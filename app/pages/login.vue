<template>
    <Header></Header>
    <div class="wrapper-c">
        <div class="tt_l tt_full p_member">
            <div id="ct_from" class="tt_l tt_full title_page">
                <h1>เข้าสู่ระบบ</h1>
            </div>
            <div class="tt_l tt_full tt_content bg_tr">
                <div class="tt_l tt_full">
                    <div class="tt_l tt_full">
                        <div class="tt_l tt_full fr_login fr_login_form" id="fr_login_form">
                            <div class="fr_center">

                                <a style="displayxx: none;padding-top: 10px;" href="../../line.me/login_uselib.php"
                                    class="  btn-success-line " type="button" id="btn-linelogin">เข้าสู่ระบบด้วย
                                    LINE</a>
                                <div style="display: none;" id="linelogin-c"></div>

                                <!-- Login Form -->
                                <form id="loginform" @submit.prevent="handleLogin">
                                    <div class="tt_l fr_input">
                                        <input
                                            v-model="loginForm.phone"
                                            id="phone"
                                            class="form-control tt_fr"
                                            maxlength="10"
                                            name="phone"
                                            type="text"
                                            placeholder="กรอกเบอร์โทรศัพท์">
                                        <input
                                            v-model="loginForm.password"
                                            id="password"
                                            class="form-control tt_fr"
                                            maxlength="24"
                                            name="password"
                                            type="password"
                                            placeholder="กรอกรหัสผ่าน">
                                    </div>
                                    <input type="hidden" name="task" value="login">
                                    <button class="tt_r fr_submit" type="submit">
                                        <i class="fas fa-sign-in-alt"></i> เข้าสู่ระบบ
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
    <FixedFooter></FixedFooter>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2'

interface LoginForm {
    phone: string
    password: string
}

interface UserData {
    memberId: string
    username: string
    credit: number
    gamePassword: string
    lineConnected: boolean
}

const router = useRouter()
const isLoggedIn = ref(false)
const loginForm = ref<LoginForm>({
    phone: '',
    password: ''
})

// Helper functions for notifications
const showSuccess = (title: string, text?: string) => {
    Swal.fire({
        icon: 'success',
        title: title,
        text: text,
        timer: 2000,
        showConfirmButton: false
    })
}

const showError = (title: string, text?: string) => {
    Swal.fire({
        icon: 'error',
        title: title,
        text: text,
        confirmButtonText: 'ลองใหม่'
    })
}
const setCookie = (name: string, value: string, days: number) => {
    if (!process.client) return
    const d = new Date()
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + d.toUTCString()
    document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

const handleLogin = async () => {
    if (!loginForm.value.phone || !loginForm.value.password) {
        showError('กรุณากรอกข้อมูลให้ครบถ้วน')
        return
    }

    // TODO: Implement actual API call
    // Simulate login for demo
    try {
        // สร้างข้อมูลผู้ใช้
        const memberId = 'ufnblnc' + loginForm.value.phone.slice(-6)
        const user: UserData = {
            memberId: memberId,
            username: loginForm.value.phone,
            credit: 0, // จะได้จาก API
            gamePassword: 'AbX922123', // จะได้จาก API
            lineConnected: false
        }

        // บันทึกลง cookie
        if (process.client) {
            setCookie('users', JSON.stringify(user), 30)
        }

        // แสดง success message
        showSuccess('เข้าสู่ระบบสำเร็จ', `ยินดีต้อนรับ ${user.username}`)

        // Clear form
        loginForm.value = { phone: '', password: '' }

        // Redirect to member page
        setTimeout(() => {
            router.push('/member')
        }, 1000)
    } catch (error) {
        console.error('Login error:', error)
        showError('เข้าสู่ระบบไม่สำเร็จ', 'กรุณาลองใหม่อีกครั้ง')
    }
}
</script>

<style scoped>
#btn-linelogin:before {
    position: absolute;
    font-family: "Font Awesome 5 Brands";
    content: "\f3c0";
    margin-left: -41px;
    font-size: 36px;
    top: -4px;
}

.btn-success-line {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    height: 48px;
    background-color: #00b900;
    border-color: #00b900;
    border-radius: 5px;
    padding-left: 47px;
    cursor: pointer;
    margin-top: .25rem !important;
    display: block;
    width: 100%;
    color: #fff;
    position: relative;
}

#linelogin-c {
    display: block;
    position: relative;
    height: 50px;
}

#linelogin-c:before {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    top: 50%;
    border-top: 1px solid #151515;
}

#linelogin-c::after {
    text-align: center !important;
    font-size: 18px;
    content: "หรือ";
    position: absolute;
    width: 80px;
    left: calc(50% - 40px);
    height: 100%;
    line-height: 300%;
    background-color: white;
}

.swal2-container {
    z-index: 99999999;
}
</style>