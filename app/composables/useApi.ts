import { defu } from 'defu'

export const useApi = () => {
  const config = useRuntimeConfig()
  const session = useUserSession()
  
  // Get access token from nuxt-auth-utils session
  const getAccessToken = () => (session.user?.value as any)?.accessToken

  // Cache for Cloudflare trace data using sessionStorage
  const CACHE_DURATION = 60 * 1000 // 1 minute in milliseconds
  const CACHE_KEY = 'cloudflare_trace_cache'

  // Get Cloudflare trace data with sessionStorage caching
  const getCloudflareTrace = async () => {
    const now = Date.now()
    
    // Check if cache exists in sessionStorage
    if (process.client) {
      try {
        const cachedData = sessionStorage.getItem(CACHE_KEY)
        if (cachedData) {
          const cache = JSON.parse(cachedData)
          // Check if cache is valid (less than 1 minute old)
          if (cache && (now - cache.timestamp) < CACHE_DURATION) {
            console.log('Using cached trace data')
            return cache.data
          }
        }
      } catch (error) {
        console.warn('Error reading from sessionStorage:', error)
      }
    }
    
    try {
      console.log('Fetching new trace data from Cloudflare')
      const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace")
      const rawText = await response.text()
      
      const lines = rawText.trim().split("\n")
      const result: any = {}
      
      for (const line of lines) {
        const [key, value] = line.split("=", 2)
        if (key) {
          result[key] = value || ""
        }
      }
      
      // Update cache in sessionStorage
      if (process.client) {
        try {
          const cacheData = {
            data: result,
            timestamp: now
          }
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(cacheData))
          console.log('Cached trace data to sessionStorage')
        } catch (error) {
          console.warn('Error saving to sessionStorage:', error)
        }
      }
      
      return result
    } catch (error) {
      console.warn('Error fetching Cloudflare trace:', error)
      // Try to return cached data if available
      if (process.client) {
        try {
          const cachedData = sessionStorage.getItem(CACHE_KEY)
          if (cachedData) {
            const cache = JSON.parse(cachedData)
            return cache.data
          }
        } catch (e) {
          console.warn('Error reading fallback cache:', e)
        }
      }
      return null
    }
  }

  const apiFetch = async <T>(url: string, options: any = {}) => {
    const accessToken = getAccessToken()
    
    // Get user IP from Cloudflare trace
    const traceData = await getCloudflareTrace()
    const userIp = traceData?.ip || ''

    console.log('userIp', userIp)
    
    const defaults = {
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        ...(userIp && { 'user_ip': userIp }),
        ...options.headers,
      },
    }
    const params = defu(options, defaults)
    try {
      return await $fetch<T>(url, params)
    } catch (err: any) {
      // สามารถ log เพิ่มเติมได้ที่นี่
      // useToast().error(err?.data?.message || err?.message || 'เกิดข้อผิดพลาด')
      throw err
    }
  }

  return {
    get: async <T>(url: string, options?: any) => await apiFetch<T>(url, { ...options, method: 'GET' }),
    post: async <T>(url: string, data?: any, options?: any) => await apiFetch<T>(url, { 
      ...options, 
      method: 'POST', 
      body: data 
    }),
    put: async <T>(url: string, data?: any, options?: any) => await apiFetch<T>(url, { 
      ...options, 
      method: 'PUT', 
      body: data 
    }),
    delete: async <T>(url: string, options?: any) => await apiFetch<T>(url, { ...options, method: 'DELETE' }),
  }
}
