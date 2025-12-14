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
                                    <button class="tt_r fr_submit" type="submit" :disabled="loading">
                                        <i class="fas fa-sign-in-alt"></i> {{ loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ' }}
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
interface LoginForm {
    phone: string
    password: string
}

const router = useRouter()
const { user, loggedIn, clear } = useUserSession()
const { showSuccess, showError } = useSweetAlert()

const loading = ref(false)
const loginForm = ref<LoginForm>({
    phone: '',
    password: ''
})

// Redirect ถ้า login อยู่แล้ว
watch(loggedIn, (isLoggedIn) => {
    if (isLoggedIn && process.client) {
        router.push('/member')
    }
}, { immediate: true })

const handleLogin = async () => {
    if (!loginForm.value.phone || !loginForm.value.password) {
        showError('กรุณากรอกข้อมูลให้ครบถ้วน')
        return
    }

    loading.value = true
    try {
        // เรียก server API route ที่จะจัดการ session
        const result = await $fetch<{ success: boolean; user: any }>('/api/auth/login', {
            method: 'POST',
            body: {
                phone: loginForm.value.phone,
                password: loginForm.value.password,
            },
        })

        // ตรวจสอบผลลัพธ์
        if (result && result.success) {
            // แสดง success message
            const username = result.user?.username || loginForm.value.phone
            showSuccess('เข้าสู่ระบบสำเร็จ', `ยินดีต้อนรับ ${username}`)

            // Clear form
            loginForm.value = { phone: '', password: '' }

            // Redirect to member page
            setTimeout(() => {
                router.push('/member')
            }, 1000)
        } else {
            showError('เข้าสู่ระบบไม่สำเร็จ', 'ไม่พบข้อมูลผู้ใช้')
        }
    } catch (error: any) {
        console.error('Login error:', error)
        const errorMessage = error?.data?.message || error?.message || 'กรุณาลองใหม่อีกครั้ง'
        showError('เข้าสู่ระบบไม่สำเร็จ', errorMessage)
    } finally {
        loading.value = false
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