<template>
  <div class="fix_footer" aria-hidden="true">
    <!-- เข้าสู่ระบบ / ข้อมูลส่วนตัว -->
    <a :href="isLoggedIn ? '/member#ct_from' : '/login#ct_from'">
      <span class="link_ico ico_1">
        <i class="fas fa-sign-in-alt"></i>
      </span>
      <strong class="reg1">{{ isLoggedIn ? 'ข้อมูลส่วนตัว' : 'เข้าสู่ระบบ' }}</strong>
    </a>

    <!-- สมัครสมาชิก (แสดงเฉพาะเมื่อยังไม่ล็อกอิน) -->
    <a v-show="!isLoggedIn" class="nologin" href="/register#ct_from">
      <span class="link_ico ico_2">
        <i class="fas fa-user-plus"></i>
      </span>
      <strong>สมัครสมาชิก</strong>
    </a>

    <!-- โปรโมชั่น (แสดงเฉพาะเมื่อยังไม่ล็อกอิน) -->
    <a v-show="!isLoggedIn" class="nologin" href="/article/promotions#ct_from">
      <span class="link_ico ico_2">
        <i class="fas fa-bullhorn"></i>
      </span>
      <strong>โปรโมชั่น</strong>
    </a>

    <!-- ฝากเงิน (แสดงเฉพาะเมื่อล็อกอินแล้ว) -->
    <a v-show="isLoggedIn" class="readylogin" href="/deposit#ct_from">
      <span class="link_ico ico_3">
        <i class="fas fa-wallet"></i>
      </span>
      <strong>ฝากเงิน</strong>
    </a>

    <!-- ถอนเงิน (แสดงเฉพาะเมื่อล็อกอินแล้ว) -->
    <a v-show="isLoggedIn" class="readylogin" href="/withdrawal#ct_from">
      <span class="link_ico ico_4">
        <i class="fas fa-hand-holding-usd"></i>
      </span>
      <strong>ถอนเงิน</strong>
    </a>

    <!-- สร้างรายได้ (แสดงเสมอ) -->
    <a href="/article/affiliate-program#ct_from">
      <span class="link_ico ico_4">
        <i class="fas fa-dollar-sign"></i>
      </span>
      <strong>สร้างรายได้</strong>
    </a>

    <!-- ติดต่อเรา (แสดงเสมอ) -->
    <a class="last" href="/article/contact-us#ct_from">
      <span class="link_ico ico_5">
        <i class="fab fa-line"></i>
      </span>
      <strong>ติดต่อเรา</strong>
    </a>
  </div>
</template>

<script setup lang="ts">
const isLoggedIn = ref(false)

// Cookie Management Functions
const getCookie = (name: string): string | null => {
  if (!process.client) return null
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

// Check login status
const checkLoginStatus = () => {
  if (process.client) {
    const userCookie = getCookie('users')
    isLoggedIn.value = !!userCookie
  }
}

// Check on mount
onMounted(() => {
  checkLoginStatus()

  // Check periodically for changes in login status
  const interval = setInterval(checkLoginStatus, 1000)

  // Cleanup interval on unmount
  onBeforeUnmount(() => {
    clearInterval(interval)
  })
})
</script>

<style scoped>
.fix_footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999999;
  width: 100%;
  min-height: 50px;
  border-top: 2px solid #000;
  text-align: center;
  background: linear-gradient(180deg, rgb(248, 209, 47) 0%, rgb(240, 185, 11) 99.77%);
}

.fix_footer a {
  display: inline-block;
  color: #000;
  margin-left: -3px;
  font-family: 'thaisanslite_r1', 'ThaiSansLite', sans-serif;
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;
  padding: 10px 50px 6px;
  border-right: 2px solid #000;
  text-decoration: none;
  transition: color 0.3s ease, background 0.3s ease;
}

.fix_footer a:last-child {
  border-right: 0;
}

.fix_footer strong {
  display: inline-block;
  position: relative;
  top: -6px;
  font-weight: bold;
}

.link_ico {
  display: inline-block;
  width: 28px;
  height: 28px;
  margin-right: 6px;
}

.link_ico svg {
  width: 100%;
  height: 100%;
  color: currentColor;
}

.fix_footer a:hover {
  background: radial-gradient(circle, #27292b 0%, #000 100%);
  color: #fff;
}

.reg1 {
  color: inherit;
}

@media screen and (max-width: 980px) {
  .fix_footer a {
    float: left;
    width: 20%;
    font-size: 16px;
    line-height: 18px;
    padding: 8px 0 0;
    margin-left: 0;
    border-right: 1px solid #000;
  }
}

@media screen and (max-width: 620px) {
  .fix_footer a {
    width: 25%;
    padding: 3px 0 0;
  }

  .fix_footer a strong {
    width: 100%;
    margin: 5px 0;
  }

  .fix_footer a.last {
    display: none;
  }
}
</style>
