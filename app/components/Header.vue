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
const logoUrl = ref('https://ufanance12.com/wp-content/uploads/2022/07/logo-ufanance1.png')

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
.header-wrapper {
  position: relative;
  z-index: 999999;
  font-family: 'thaisanslite_r1', 'ThaiSansLite', sans-serif;
}

.header_bg {
  float: left;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid #073520;
  z-index: 999999;
  padding: 5px 0;
  backdrop-filter: blur(8px);
}

.header {
  float: left;
  width: 100%;
  position: relative;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header::after {
  content: '';
  display: table;
  clear: both;
}

.logo_h_m {
  display: none;
  width: 135px;
  padding: 5px 10px;
}

.logo_h_m img {
  width: 100%;
  display: block;
}

.logo_pc {
  width: 20%;
  margin: 0;
}

.logo_pc img {
  width: 100%;
  display: block;
}

.btn_main_menu {
  display: none;
  cursor: pointer;
}

.nav_b {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid #222;
  padding: 7px 20px 10px 12px;
  background: linear-gradient(180deg, rgb(248, 209, 47) 0%, rgb(240, 185, 11) 100%);
  color: #000;
  border-radius: 5px;
  font-family: 'thaisanslite_r1', 'ThaiSansLite', sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.nav_b-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tt_head_menu {
  float: right;
  width: 80%;
  min-height: 40px;
  position: relative;
  margin: 0;
  text-align: right;
}

.tt_head_menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.tt_head_menu ul li {
  display: inline-block;
  position: relative;
  margin: 7px 0 0 0;
}

.tt_head_menu ul li a {
  display: inline-block;
  color: #fff;
  font-family: 'thaisanslite_r1', 'ThaiSansLite', sans-serif;
  font-size: 20px;
  line-height: 20px;
  padding: 3px 12px 7px;
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 7px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.tt_head_menu ul li.current-menu-item a,
.tt_head_menu ul li:hover a {
  color: #f3c31a;
  border-color: #f3c31a;
  background-color: #1c1a1b;
}

.tt_head_menu ul li.ico-register a {
  color: #fff;
  border-radius: 5px;
  padding: 3px 20px 7px;
  border: 2px solid #9a2222;
  text-shadow: 1px 1px 0 #660c08;
  background: linear-gradient(to bottom, #fc5353 0%, #c00 100%);
  animation: hvr-pulse-grow 0.8s linear infinite alternate;
}

.tt_head_menu ul li.ico-register:hover a {
  background: linear-gradient(to bottom, #c00 0%, #fc5353 100%);
}

@keyframes hvr-pulse-grow {
  to {
    transform: scale(0.9);
  }
}

.tt_head_menu.use_m {
  display: none;
}

.wrapper {
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.m_pc {
  display: block;
  width: 100%;
}

.nav {
  list-style: none;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 1200px) {
  .tt_head_menu {
    width: 70%;
  }
}

@media screen and (max-width: 980px) {
  .logo_pc,
  .m_pc {
    display: none;
  }

  .logo_h_m {
    display: block;
  }

  .btn_main_menu {
    display: block;
  }


  .header_bg {
    top: 0px;
  }

  .tt_head_menu.use_m {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    padding: 80px 15px 40px;
    background: rgba(0, 0, 0, 0.95);
    z-index: 999998;
    overflow-y: auto;
    transition: left 0.3s ease;
  }

  .tt_head_menu.use_m.open {
    left: 0;
  }

  .tt_head_menu.use_m .nav {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tt_head_menu.use_m .nav li {
    width: calc(50% - 5px);
    margin: 0;
    border: 1px solid #000;
    background: #222;
  }

  .tt_head_menu.use_m .nav li a {
    width: 100%;
    text-align: center;
    padding: 12px 0;
    background: #222;
    color: #eee;
    border: 0;
    border-radius: 0;
  }

  .tt_head_menu.use_m .nav li.current-menu-item a,
  .tt_head_menu.use_m .nav li:hover a {
    background: #333;
    color: #f3c31a;
  }

  .tt_head_menu.use_m .nav li.ico-register a {
    background: linear-gradient(to bottom, #fc5353 0%, #c00 100%);
    color: #fff;
  }

  .header {
    padding: 0 15px;
  }

  .tt_head_menu {
    width: auto;
  }
}

@media screen and (max-width: 640px) {
  .tt_head_menu.use_m .nav li {
    width: 100%;
  }
}
@media screen and (max-width: 800px) {
    .logo_h_m {
        display: block;
        width: 180px;
        padding: 5px 5px 5px 10px;
    }
}

</style>
