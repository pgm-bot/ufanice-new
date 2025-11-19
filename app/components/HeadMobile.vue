<template>
  <div class="tt_l tt_full head_mc">
    <a v-show="showInstallBanner" class="tt_l logo_m install_m" href="#" @click.prevent="installApp">
      <img width="800" height="220" :src="installBannerUrl" alt="install banner">
    </a>
    <a v-show="showInstallBanner" href="#" class="team-popup-close logo_m install_m" @click.prevent="closeAppBanner">
      ×
    </a>

    <div class="tt_l h-linem">
      <a :href="lineUrl" target="_blank" rel="noopener">
        <img width="140" height="46"
          src="https://ufanance12.com/wp-content/themes/ufanance.com/images/button-lineadd.jpg?v=1.0"
          alt="line add friend">
      </a>
    </div>

    <div class="tt_l m-telegram">
      <a :href="telegramUrl" target="_blank" rel="noopener">
        <img src="https://ufanance12.com/wp-content/themes/ufanance.com/images/telegram.png" alt="telegram">
        <span>{{ telegramId }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice?: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

const INSTALL_COOKIE_KEY = 'hideapp'
const INSTALL_COOKIE_VALUE = 'hideapp'
const INSTALL_COOKIE_DAYS = 1

const showInstallBanner = ref(true)
const deferredPrompt = shallowRef<BeforeInstallPromptEvent | null>(null)

const homeUrl = ref('https://ufanance12.com/')
const installBannerUrl = ref('https://ufanance12.com/head-download.png')
const lineUrl = ref('https://line.me/ti/p/~@ufanancev4')
const telegramUrl = ref('https://t.me/ufanancev2')
const telegramId = ref('@ufanancev2')

const getCookie = (name: string) => {
  if (!process.client) {
    return null
  }
  const cookies = document.cookie ? document.cookie.split('; ') : []
  for (const cookie of cookies) {
    const [key, ...rest] = cookie.split('=')
    if (key === name) {
      return decodeURIComponent(rest.join('='))
    }
  }
  return null
}

const setCookie = (name: string, value: string, days: number) => {
  if (!process.client) {
    return
  }
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`
}

const closeAppBanner = () => {
  showInstallBanner.value = false
  setCookie(INSTALL_COOKIE_KEY, INSTALL_COOKIE_VALUE, INSTALL_COOKIE_DAYS)
}

const installApp = async () => {
  if (!process.client) {
    return
  }
  if (deferredPrompt.value) {
    await deferredPrompt.value.prompt()
    deferredPrompt.value = null
    return
  }
  window.open(homeUrl.value, '_blank', 'noopener')
}

const handleBeforeInstallPrompt = (event: Event) => {
  event.preventDefault()
  deferredPrompt.value = event as BeforeInstallPromptEvent
}

onMounted(() => {
  if (process.client) {
    showInstallBanner.value = getCookie(INSTALL_COOKIE_KEY) !== INSTALL_COOKIE_VALUE
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  }
})
</script>
<style scoped>
.team-popup-close {
  color: #fff;
  width: 30px;
  font-size: 30px;
  position: absolute;
  z-index: 999;
  top: 65px;
  right: 0px;
}
</style>