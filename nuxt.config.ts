// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-auth-utils'],

  // Route rules for API proxy
  routeRules: {
    '/api': { proxy: `${process.env.API_URL}/api` }, // Proxy only v1 API
  },

  runtimeConfig: {
    session: {
      password: process.env.NUXT_SESSION_PASSWORD || 'change_this_to_a_long_secure_password_32_chars',
    },
  },
})
