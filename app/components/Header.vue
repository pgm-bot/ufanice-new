<template>
  <div class="header-wrapper">
    <div class="tt_l tt_full">
      <div class="tt_l tt_full header_bg">
        <div class="tt_l tt_full header">
          <a class="tt_l logo_h_m" :href="homeUrl">
            <img width="135" height="40" :src="logoUrl" alt="logo">
          </a>
          <div class="tt_r btn_main_menu">
            <div
              class="nav_b"
              role="button"
              tabindex="0"
              @click="toggleMobileMenu"
              @keydown.enter.prevent="toggleMobileMenu"
              @keydown.space.prevent="toggleMobileMenu"
            >
              <span class="nav_b-icon">
                <UiIcon name="bars" :size="18" />
              </span>
              <span>Menu</span>
            </div>
          </div>

          <div class="tt_l tt_head_menu use_m" :class="{ open: isMobileMenuOpen }">
            <div class="menu-menu-mobile-container">
              <ul id="menu-menu-mobile" class="nav">
                <li
                  v-for="item in mobileMenuItems"
                  :key="item.id"
                  :class="item.classes"
                >
                  <a :href="item.url" :aria-current="item.ariaCurrent ? 'page' : null">{{ item.label }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="tt_l tt_full m_pc">
          <div class="wrapper">
            <a class="tt_l logo_pc" :title="siteName" :href="homeUrl">
              <img width="135" height="40" :src="logoUrl" alt="logo">
            </a>
            <div class="tt_l tt_head_menu">
              <div class="menu-menu-h-container">
                <ul id="menu-menu-h" class="nav">
                  <li
                    v-for="item in desktopMenuItems"
                    :key="item.id"
                    :class="item.classes"
                  >
                    <a :href="item.url" :aria-current="item.ariaCurrent ? 'page' : null">{{ item.label }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface MenuItem {
  id: string
  label: string
  url: string
  classes: string
  ariaCurrent?: boolean
}

const route = useRoute()
const isMobileMenuOpen = ref(false)

const siteName = ref('คาสิโนออนไลน์ สมัครเล่นบาคาร่าออนไลน์ สล็อตออนไลน์')
const homeUrl = ref('/')
const logoUrl = ref('/img/logo/logo-1.png')

// Helper function to check if menu item is active
const isActive = (url: string): boolean => {
  const currentPath = route.path
  if (url === '/') {
    return currentPath === '/'
  }
  return currentPath === url
}

// Helper function to get menu item classes with active state
const getMenuClasses = (baseClasses: string, url: string): string => {
  if (isActive(url)) {
    // Add current-menu-item if not already present
    if (!baseClasses.includes('current-menu-item')) {
      return `${baseClasses} current-menu-item`
    }
    return baseClasses
  }
  // Remove current-menu-item classes if present
  return baseClasses.replace(/current-menu-item|current_page_item/g, '').trim()
}

const mobileMenuItems = computed<MenuItem[]>(() => [
  {
    id: 'menu-item-60',
    label: 'หน้าหลัก',
    url: '/',
    classes: getMenuClasses('menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-60', '/'),
    ariaCurrent: isActive('/')
  },
  {
    id: 'menu-item-61',
    label: 'คาสิโนออนไลน์',
    url: '/article/casino-online',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-61', '/article/casino-online'),
    ariaCurrent: isActive('/article/casino-online')
  },
  {
    id: 'menu-item-64',
    label: 'แทงบอลออนไลน์',
    url: '/article/football-betting-online',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-64', '/article/football-betting-online'),
    ariaCurrent: isActive('/article/football-betting-online')
  },
  {
    id: 'menu-item-398',
    label: 'เข้าสู่ระบบ',
    url: '/login',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-398', '/login'),
    ariaCurrent: isActive('/login')
  },
  {
    id: 'menu-item-2447',
    label: 'รีวิวบริการ',
    url: '/article/customer-reviews',
    classes: getMenuClasses('menu-item menu-item-type-custom menu-item-object-custom menu-item-2447', '/article/customer-reviews'),
    ariaCurrent: isActive('/article/customer-reviews')
  },
  {
    id: 'menu-item-401',
    label: 'สร้างรายได้',
    url: '/article/affiliate-program',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-401', '/article/affiliate-program'),
    ariaCurrent: isActive('/article/affiliate-program')
  },
  {
    id: 'menu-item-63',
    label: 'สมัครสมาชิก',
    url: '/register',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-63', '/register'),
    ariaCurrent: isActive('/register')
  },
  {
    id: 'menu-item-65',
    label: 'โปรโมชั่น',
    url: '/article/promotions',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-65', '/article/promotions'),
    ariaCurrent: isActive('/article/promotions')
  },
  {
    id: 'menu-item-rewards',
    label: 'รางวัลประจำเดือน',
    url: '/rewards',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-rewards', '/rewards'),
    ariaCurrent: isActive('/rewards')
  },
  {
    id: 'menu-item-62',
    label: 'ติดต่อเรา',
    url: '/article/contact-us',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-62', '/article/contact-us'),
    ariaCurrent: isActive('/article/contact-us')
  }
])

const desktopMenuItems = computed<MenuItem[]>(() => [
  {
    id: 'menu-item-16',
    label: 'หน้าหลัก',
    url: '/',
    classes: getMenuClasses('menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-16', '/'),
    ariaCurrent: isActive('/')
  },
  {
    id: 'menu-item-23',
    label: 'คาสิโนออนไลน์',
    url: '/article/casino-online',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-23', '/article/casino-online'),
    ariaCurrent: isActive('/article/casino-online')
  },
  {
    id: 'menu-item-37',
    label: 'แทงบอลออนไลน์',
    url: '/article/football-betting-online',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-37', '/article/football-betting-online'),
    ariaCurrent: isActive('/article/football-betting-online')
  },
  {
    id: 'menu-item-2446',
    label: 'รีวิวบริการ',
    url: '/article/customer-reviews',
    classes: getMenuClasses('menu-item menu-item-type-custom menu-item-object-custom menu-item-2446', '/article/customer-reviews'),
    ariaCurrent: isActive('/article/customer-reviews')
  },
  {
    id: 'menu-item-417',
    label: 'สร้างรายได้',
    url: '/article/affiliate-program',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-417', '/article/affiliate-program'),
    ariaCurrent: isActive('/article/affiliate-program')
  },
  {
    id: 'menu-item-36',
    label: 'โปรโมชั่น',
    url: '/article/promotions',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-36', '/article/promotions'),
    ariaCurrent: isActive('/article/promotions')
  },
  {
    id: 'menu-item-rewards-desktop',
    label: 'รางวัลประจำเดือน',
    url: '/rewards',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-rewards', '/rewards'),
    ariaCurrent: isActive('/rewards')
  },
  {
    id: 'menu-item-35',
    label: 'ติดต่อเรา',
    url: '/article/contact-us',
    classes: getMenuClasses('menu-item menu-item-type-post_type menu-item-object-page menu-item-35', '/article/contact-us'),
    ariaCurrent: isActive('/article/contact-us')
  },
  {
    id: 'menu-item-38',
    label: 'สมัครสมาชิก',
    url: '/register',
    classes: getMenuClasses('ico-register menu-item menu-item-type-post_type menu-item-object-page menu-item-38', '/register'),
    ariaCurrent: isActive('/register')
  }
])

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleDocumentClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement | null
  if (!target) {
    return
  }
  if (!target.closest('.tt_head_menu') && !target.closest('.btn_main_menu')) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  if (process.client) {
    document.addEventListener('click', handleDocumentClick)
  }
})

onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('click', handleDocumentClick)
  }
})
</script>
<style scoped>
.open {
  display: block;
}
</style>
