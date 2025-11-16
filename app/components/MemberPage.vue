<template>
    <div class="wrapper-c">
        <div class="tt_l tt_full p_member">
            <div id="ct_from" class="tt_l tt_full title_page">
                <h1>สมาชิก</h1>
            </div>
            <div class="tt_l tt_full tt_content bg_tr">
                <div class="tt_l tt_full">
                    <div class="tt_l tt_full">
                        <!-- User Dashboard -->
                        <UserDashboard
                            :userData="userDashboardData"
                            @logout="handleLogout"
                            @connectLine="handleConnectLine" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface UserData {
    memberId: string
    username: string
    credit: number
    gamePassword: string
    lineConnected: boolean
}

const router = useRouter()
const { showSuccess, showError } = useSweetAlert()

const userData = ref<UserData>({
    memberId: '',
    username: '',
    credit: 0,
    gamePassword: '',
    lineConnected: false
})

const userDashboardData = computed(() => userData.value)

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

const deleteCookie = (name: string) => {
    if (!process.client) return
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

// Logout Handler
const handleLogout = () => {
    if (process.client) {
        deleteCookie('users')
    }

    userData.value = {
        memberId: '',
        username: '',
        credit: 0,
        gamePassword: '',
        lineConnected: false
    }

    showSuccess('ออกจากระบบสำเร็จ')

    // Redirect to login
    setTimeout(() => {
        router.push('/login')
    }, 1000)
}

// Connect LINE Handler
const handleConnectLine = () => {
    // TODO: Implement LINE login connection
    console.log('Connect LINE account')
    showSuccess('เชื่อมต่อ LINE สำเร็จ')
    userData.value.lineConnected = true
}

// Check existing login on mount
onMounted(() => {
    if (process.client) {
        const userCookie = getCookie('users')
        if (userCookie) {
            try {
                const user = JSON.parse(userCookie)
                userData.value = user
            } catch (e) {
                console.error('Error parsing user cookie:', e)
                // Redirect to login if cookie is invalid
                router.push('/login')
            }
        } else {
            // Redirect to login if not logged in
            router.push('/login')
        }
    }
})
</script>

<style scoped>
/* Utility Classes */
.tt_l {
  float: left;
}

.tt_r {
  float: right;
}

.tt_full {
  width: 100%;
}

.center {
  text-align: center;
}

.clear,
.tt_l::after,
.tt_full::after {
  content: '';
  display: table;
  clear: both;
}

/* Wrapper and Layout */
.wrapper-c {
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
}

.p_member {
  padding: 40px 0;
}

.title_page h1,
.title_page h2 {
  color: #000;
  font-size: 34px;
  line-height: 34px;
  font-family: thaisanslite_r1, 'ThaiSansLite', sans-serif;
  font-weight: bold;
}

.title_page {
  margin-bottom: 0px;
  margin-top: 0px;
  position: relative;
  padding: 5px 20px 10px 20px;
  border-radius: 0px;
  text-shadow: 1px 1px 0 #fef866;
  background: linear-gradient(rgb(248, 209, 47) 0%, rgb(240, 185, 11) 99.77%);
  text-align: center;
}

.tt_content {
  padding: 20px;
  min-height: 240px;
}

.bg_tr {
  background-color: rgba(0, 0, 0, 0.6);
}

/* Responsive */
@media screen and (max-width: 480px) {
  .title_page h1,
  .title_page h2 {
    font-size: 24px;
    line-height: 24px;
  }
}
</style>
