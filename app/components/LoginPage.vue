<template>
    <div class="wrapper-c">
        <div class="tt_l tt_full p_member">
            <div id="ct_from" class="tt_l tt_full title_page">
                <h1>เข้าสู่ระบบ</h1>
            </div>
            <div class="tt_l tt_full tt_content bg_tr">
                <div class="tt_l tt_full">
                    <div class="tt_l tt_full">
                        <!--- if not login--->
                        <div class="tt_l tt_full fr_login fr_login_form" id="fr_login_form">
                            <div class="fr_center">
                                <!-- LINE Login Button (ซ่อนไว้) -->
                                <a style="display: none;padding-top: 10px;"
                                   href="#"
                                   class="btn-success-line"
                                   type="button"
                                   id="btn-linelogin">
                                    เข้าสู่ระบบด้วย LINE
                                </a>
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
</template>

<script setup lang="ts">
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
const loginForm = ref<LoginForm>({
    phone: '',
    password: ''
})

const { showSuccess, showError } = useSweetAlert()

// Cookie Management Functions
const setCookie = (name: string, value: string, days: number) => {
    if (!process.client) return
    const d = new Date()
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + d.toUTCString()
    document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

// Login Handler
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
