<template>
    <div class="page-template page-template-page page-template-account page-template-pageaccount-php page page-id-84">
        <!-- <HeadMobile></HeadMobile> -->
        <Header></Header>
      
        <FloatingGameMenu></FloatingGameMenu>
        <FloatingContactMenu></FloatingContactMenu>

        <!-- แสดง TransactionHistory เมื่อมี query parameter h=h -->
        <TransactionHistory v-if="loggedIn && showHistory" />

        <!-- แสดง AccountPage เมื่อไม่มี query parameter -->
        <AccountPage
            v-else-if="loggedIn"
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
// Protect this route with auth middleware
definePageMeta({
    middleware: 'auth'
})

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

const { user, loggedIn } = useUserSession()
const { showSuccess, showError } = useSweetAlert()

// แปลง user session เป็น UserData format
const userData = computed<UserData>(() => {
    if (!user.value) {
        return {
            memberId: '',
            accountNumber: '',
            gamePassword: '',
            phone: '',
            username: '',
            credit: 0
        }
    }
    
    const sessionUser = user.value as any
    return {
        memberId: sessionUser.memberId || '',
        accountNumber: sessionUser.accountNumber || '2482605355', // Default value
        gamePassword: sessionUser.gamePassword || '',
        phone: sessionUser.phone || '',
        username: sessionUser.username || '',
        credit: sessionUser.credit || 0
    }
})

const accountData = computed(() => ({
    memberId: userData.value.memberId,
    accountNumber: userData.value.accountNumber,
    gamePassword: userData.value.gamePassword,
    phone: userData.value.phone,
    credit: userData.value.credit
}))

const handleUpdatePassword = async (newPassword: string) => {
    // TODO: Implement actual password update API call
    console.log('Update password:', newPassword)

    // อัปเดต session (ต้องสร้าง API route สำหรับ update session)
    // ตอนนี้แค่แสดง success message
    showSuccess('อัพเดทรหัสผ่านสำเร็จ')
}

useHead({
    title: 'ข้อมูลบัญชี - ufanice',
    meta: [
        { name: 'description', content: 'ข้อมูลบัญชีของคุณ ufanice คาสิโนออนไลน์' }
    ],
    link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
    ]
})
</script>