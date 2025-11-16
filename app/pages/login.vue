<template>
  <div class="page-template page-template-page page-template-login page-template-pagelogin-php page page-id-66">
    <HeadMobile></HeadMobile>
    <Header></Header>
    <FloatingGameMenu></FloatingGameMenu>
    <FloatingContactMenu></FloatingContactMenu>
    <LoginPage></LoginPage>
    <Footer></Footer>
    <FixedFooter></FixedFooter>
    <BackToTop></BackToTop>
  </div>
</template>
<script setup lang="ts">
interface UserData {
  username: string
  displayName: string
  credit: number
  password?: string
}
const isLoggedIn = ref(false)
const userData = ref<UserData>({
  username: 'USER001',
  displayName: 'สมชาย ใจดี',
  credit: 10000.00,
  password: ''
})
const handleLogin = async (data: { phone: string; password: string }) => {
  console.log('Login attempt:', data)
  // TODO: Implement actual login API call
  // Simulate login for demo
  if (data.phone && data.password) {
    // เก็บข้อมูล user ลง cookie (ในต้นฉบับใช้ cookie 'users')
    if (process.client) {
      setCookie('users', JSON.stringify({
        username: 'USER' + data.phone.slice(-4),
        displayName: 'สมาชิก ' + data.phone.slice(-4),
        credit: 10000.00,
        phone: data.phone
      }), 30)
    }
    // อัพเดต state
    userData.value = {
      username: 'USER' + data.phone.slice(-4),
      displayName: 'สมาชิก ' + data.phone.slice(-4),
      credit: 10000.00,
      password: data.password
    }
    isLoggedIn.value = true
    // แสดง success message
    if (process.client) {
      alert('เข้าสู่ระบบสำเร็จ')
    }
  } else {
    if (process.client) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน')
    }
  }
}
const handleLogout = () => {
  // ลบ cookie
  if (process.client) {
    deleteCookie('users')
    alert('ออกจากระบบสำเร็จ')
  }
  isLoggedIn.value = false
  userData.value = {
    username: '',
    displayName: '',
    credit: 0
  }
}
const handleGameEntry = (type: string) => {
  console.log('Game entry type:', type)
  // TODO: Implement actual game entry logic
}
const promotions = [
  {
    id: 'gaojing',
    image: 'https://ufanance12.com/ev1010.png',
    alt: 'กิจกรรมสายเลือดเกาจิ้ง',
    caption: 'ตามหานักเดิมพัน สายเลือดเกาจิ้ง 30 อันดับ ทำกำไรสูงที่สุด แจกเงินรางวัลรวมสูงสุด 30 ล้านบาท วันเดียวเท่านั้น ท้าพิสูจน์เกาจิ้งตัวจริง',
    primaryLink: 'https://ufanance12.com/kj-r/#ct_from',
    cta: {
      text: 'สมัครเข้าร่วมกิจกรรม',
      link: 'https://ufanance12.com/kj-r/#ct_from'
    },
    detailLink: 'javascript:void(0)'
  },
  {
    id: 'ten-streak',
    image: 'https://ufanance12.com/wp-content/uploads/2023/06/04-1.jpg',
    alt: 'แทงติดกัน 10 ตา',
    caption: 'แทงถูก หรือ ผิด ติดกัน 10 ตารวด!<br>รับโบนัสทันทีสูงสุดไม่เกิน 5,000 บาท อ่านรายละเอียดเพิ่มเติม',
    primaryLink: null,
    cta: {
      text: 'แลกโบนัส',
      link: 'https://line.me/ti/p/~@ufanancev4'
    },
    detailLink: 'javascript:void(0)'
  },
  {
    id: 'birthday',
    image: 'https://ufanance12.com/wp-content/uploads/2023/06/03-1.jpg',
    alt: 'โปรวันเกิด',
    caption: 'เมื่อถึงวันเกิดของท่าน เพียงแค่ท่านโชว์บัตรประชาชนให้ทีมงาน<br>รับทันทีเครดิต 500 บาท (สามารถถอนเงินได้ทันที)',
    primaryLink: null,
    cta: {
      text: 'แลกโบนัส',
      link: 'https://line.me/ti/p/~@ufanancev4'
    },
    detailLink: 'javascript:void(0)'
  }
]
// Cookie Management Functions (จากต้นฉบับ)
const setCookie = (name: string, value: string, days: number) => {
  if (!process.client) return
  const d = new Date()
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + d.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}
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
const deleteCookie = (name: string) => {
  if (!process.client) return
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}
// Check existing login on mount
onMounted(() => {
  if (process.client) {
    const userCookie = getCookie('users')
    if (userCookie) {
      try {
        const user = JSON.parse(userCookie)
        userData.value = user
        isLoggedIn.value = true
      } catch (e) {
        console.error('Error parsing user cookie:', e)
      }
    }
  }
})
useHead({
  title: 'เข้าสู่ระบบ - UFANANCE',
  meta: [
    { name: 'description', content: 'เข้าสู่ระบบ UFANANCE คาสิโนออนไลน์ บาคาร่า สล็อต แทงบอล' }
  ],
  link: [
    // FontAwesome
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
  ]
})
</script>
