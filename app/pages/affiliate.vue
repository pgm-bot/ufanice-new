<template>
    <div class="page-template page-template-page page-template-affiliate page-template-pageaffiliate-php page page-id-88">
        <HeadMobile></HeadMobile>
        <Header></Header>
        <FloatingGameMenu></FloatingGameMenu>
        <FloatingContactMenu></FloatingContactMenu>

        <AffiliatePage v-if="isLoggedIn" />

        <div v-else class="not-logged-in">
            <div class="wrapper-c">
                <div class="tt_l tt_full p_gl">
                    <div class="tt_l tt_full title_page">
                        <h1>ข้อมูลแนะนำเพื่อน</h1>
                    </div>
                    <div class="tt_l tt_full tt_content bg">
                        <div class="message-box" style="text-align: center; padding: 50px 20px;">
                            <i class="fas fa-lock" style="font-size: 48px; color: #f3c31a; margin-bottom: 20px;"></i>
                            <h2 style="color: #fff; margin-bottom: 10px;">กรุณาเข้าสู่ระบบ</h2>
                            <p style="color: #fff; margin-bottom: 30px;">คุณต้องเข้าสู่ระบบก่อนเพื่อดูข้อมูลแนะนำเพื่อน</p>
                            <a href="/login" class="btn-login" style="display: inline-block; padding: 15px 40px; background: linear-gradient(90deg, rgba(177, 9, 4, 1) 0%, rgba(242, 23, 1, 1) 100%); color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;">เข้าสู่ระบบ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer></Footer>
        <FixedFooter></FixedFooter>
        <BackToTop></BackToTop>
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

// Check existing login on mount
onMounted(() => {
    if (process.client) {
        const userCookie = getCookie('users')
        if (userCookie) {
            try {
                const user = JSON.parse(userCookie)
                isLoggedIn.value = true
            } catch (e) {
                console.error('Error parsing user cookie:', e)
            }
        }
    }
})

useHead({
    title: 'แนะนำเพื่อน - UFANANCE',
    meta: [
        { name: 'description', content: 'แนะนำเพื่อน รับ 0.6% ของยอดเทิร์นโอเวอร์ UFANANCE คาสิโนออนไลน์' }
    ],
    link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
    ]
})
</script>
