export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (!body.phone || !body.password) {
    throw createError({
      statusCode: 400,
      message: 'กรุณากรอกข้อมูลให้ครบถ้วน'
    })
  }

  try {
    // เรียก external API
    const result = await $fetch<any>('https://ufanice.net/api/auth/login', {
      method: 'POST',
      headers: {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'origin': 'https://ufanice.net',
        'referer': 'https://ufanice.net/',
      },
      body: {
        phone: body.phone,
        password: body.password,
      },
    })

    console.log('result', result)

    // ตรวจสอบผลลัพธ์จาก API
    if (result && result.token) {
      const userId = result.userData?.id || result.payload?.id
      const username = result.userData?.username || result.payload?.username
      const phone = result.userData?.phone || result.payload?.phone
      
      // สร้าง memberId จาก phone (ตามรูปแบบเดิม)
      const memberId = 'ufnblnice' + username.toLowerCase()
      
      // บันทึก session ด้วย nuxt-auth-utils
      await setUserSession(event, {
        user: {
          id: userId,
          username: username,
          phone: phone,
          memberId: memberId,
          // ข้อมูลเพิ่มเติมจะดึงจาก API อื่นถ้าจำเป็น
          credit: 0, // จะอัปเดตจาก API อื่น
          gamePassword: '', // จะอัปเดตจาก API อื่น
          lineConnected: false, // จะอัปเดตจาก API อื่น
        },
        token: result.token,
        loggedInAt: new Date().toISOString()
      })

      return {
        success: true,
        user: {
          id: userId,
          username: username,
          phone: phone,
          memberId: memberId,
        }
      }
    } else {
      throw createError({
        statusCode: 401,
        message: 'เข้าสู่ระบบไม่สำเร็จ - ไม่พบข้อมูลผู้ใช้'
      })
    }
  } catch (error: any) {
    console.error('Login API error:', error)
    
    // จัดการ error จาก external API
    const errorMessage = error?.data?.message || error?.message || 'กรุณาลองใหม่อีกครั้ง'
    
    throw createError({
      statusCode: error?.statusCode || 401,
      message: errorMessage
    })
  }
})
