<template>
    <div class="page-template page-template-page page-template-account page-template-pageaccount-php page page-id-84">
        <HeadMobile></HeadMobile>
        <Header></Header>
        <FloatingGameMenu></FloatingGameMenu>
        <FloatingContactMenu></FloatingContactMenu>

        <!-- แสดง TransactionHistory เมื่อมี query parameter h=h -->
        <TransactionHistory v-if="isLoggedIn && showHistory" />

        <!-- แสดง AccountPage เมื่อไม่มี query parameter -->
        <AccountPage
            v-else-if="isLoggedIn"
            :userData="accountData"
            @updatePassword="handleUpdatePassword"
        />

        <!-- แสดง login prompt เมื่อยังไม่ได้ login -->
        <div v-else class="not-logged-in">
            <div class="wrapper-c">
                <div class="tt_l tt_full p_gl">
                    <div class="tt_l tt_full title_page">
                        <h1>ข้อมูลบัญชี</h1>
                    </div>
                    <div class="tt_l tt_full tt_content bg">
                        <div class="message-box">
                            <i class="fas fa-lock"></i>
                            <h2>กรุณาเข้าสู่ระบบ</h2>
                            <p>คุณต้องเข้าสู่ระบบก่อนเพื่อดูข้อมูลบัญชี</p>
                            <a href="/login" class="btn-login">เข้าสู่ระบบ</a>
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
interface UserData {
    memberId: string
    accountNumber: string
    gamePassword: string
    phone: string
    username: string
    credit: number
}

// เช็ค query parameter
const route = useRoute()
const showHistory = computed(() => route.query.h === 'h')

const isLoggedIn = ref(false)
const userData = ref<UserData>({
    memberId: '',
    accountNumber: '',
    gamePassword: '',
    phone: '',
    username: '',
    credit: 0
})

const accountData = computed(() => ({
    memberId: userData.value.memberId,
    accountNumber: userData.value.accountNumber,
    gamePassword: userData.value.gamePassword,
    phone: userData.value.phone,
    credit: userData.value.credit
}))

const { showSuccess, showError } = useSweetAlert()

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

const setCookie = (name: string, value: string, days: number) => {
    if (!process.client) return
    const d = new Date()
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + d.toUTCString()
    document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

const handleUpdatePassword = async (newPassword: string) => {
    // TODO: Implement actual password update API call
    console.log('Update password:', newPassword)

    // Update local data
    userData.value.gamePassword = newPassword

    // Update cookie
    if (process.client) {
        setCookie('users', JSON.stringify(userData.value), 30)
    }

    showSuccess('อัพเดทรหัสผ่านสำเร็จ')
}

// Check existing login on mount
onMounted(() => {
    if (process.client) {
        const userCookie = getCookie('users')
        if (userCookie) {
            try {
                const user = JSON.parse(userCookie)
                userData.value = {
                    memberId: user.memberId || '',
                    accountNumber: user.accountNumber || '2482605355', // Default value
                    gamePassword: user.gamePassword || 'AbX922123',
                    phone: user.phone || user.username || '',
                    username: user.username || '',
                    credit: user.credit || 0
                }
                isLoggedIn.value = true
            } catch (e) {
                console.error('Error parsing user cookie:', e)
            }
        }
    }
})

useHead({
    title: 'ข้อมูลบัญชี - UFANANCE',
    meta: [
        { name: 'description', content: 'ข้อมูลบัญชีของคุณ UFANANCE คาสิโนออนไลน์' }
    ],
    link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
    ]
})
</script>