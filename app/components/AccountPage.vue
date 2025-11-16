<template>
    <div class="wrapper-c">
        <div class="tt_l tt_full p_gl">
            <div id="ct_from" class="tt_l tt_full title_page">
                <h1>ข้อมูลบัญชี</h1>
            </div>
            <div class="tt_l tt_full tt_content bg">
                <div class="tt_l tt_full">
                    <div class="tt_l tt_full">
                        <div class="wrapper-m">
                            <div class="tt_l tt_full from_acc">
                                <div class="fr_center">
                                    <div class="tt_l tt_full fr_tx1">
                                        <strong>เลขบัญชี : </strong>
                                        <span id="account">{{ userData.accountNumber }}</span>
                                    </div>
                                    <div class="tt_l tt_full fr_tx1">
                                        <strong>User เข้าเกมส์ : </strong>
                                        <span id="user_">{{ userData.memberId }}</span>
                                    </div>
                                    <div class="tt_l tt_full fr_tx1">
                                        <strong>Password เข้าเกมส์ : </strong>
                                        <span id="password_">{{ userData.gamePassword }}</span>
                                    </div>
                                    <div class="tt_l tt_full fr_tx1">
                                        <strong>เบอร์โทรศัพท์ : </strong>
                                        <span id="user">{{ userData.phone }}</span>
                                    </div>
                                    <div class="tt_l tt_full fr_tx1">
                                        <strong>ยอดเงินคงเหลือ : </strong>
                                        <span id="amount">{{ formatCurrency(userData.credit) }}</span>
                                    </div>
                                </div>

                                <div class="tt_l tt_full fr_li1x">
                                    <span class="tt_l fr_uptx"> update Password UFA ในระบบ: </span>
                                    <input
                                        v-model="newPassword"
                                        class="form-control tt_bkb"
                                        name="password2"
                                        id="password2"
                                        type="text"
                                        placeholder="รหัสผ่านใหม่ (8-15 ตัวอักษร)"
                                    >
                                    <button
                                        type="button"
                                        @click="updatePassword"
                                        class="btn pass_b fr_submit_bk"
                                    >
                                        Update
                                    </button>
                                    <div class="tt_l tt_full tx_sm">
                                        <small>
                                            *รหัสผ่านของท่านต้องประกอบด้วยตัวอักษร 8-15 ตัว<br>
                                            *รหัสผ่านของคุณจะต้องมีการรวมกันของตัวอักษรตัวเลขและสัญลักษณ์<br>
                                            *ห้ามใช้ชื่อเข้าระบบ ชื่อจริงและนามสกุลเป็นส่วนหนึ่งของรหัสผ่าน
                                        </small>
                                    </div>

                                    <form
                                        method="post"
                                        :action="`/login_uf2.php?t=${timestamp}`"
                                        id="form1"
                                        target="_blank"
                                    >
                                        <input type="hidden" name="__EVENTTARGET" value="btnSignIn">
                                        <input type="hidden" name="txtUserName" class="username_" :value="userData.memberId">
                                        <input type="hidden" name="password" class="password_" :value="userData.gamePassword">
                                        <button class="tt_l tt_ful fr_submit_bk2" type="submit">
                                            เล่นเดียวนี้
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface UserData {
    memberId: string
    accountNumber: string
    gamePassword: string
    phone: string
    credit: number
}

const props = defineProps<{
    userData: UserData
}>()

const emit = defineEmits<{
    updatePassword: [password: string]
}>()

const newPassword = ref('')
const timestamp = ref(Date.now())

const { showSuccess, showError } = useSweetAlert()

const formatCurrency = (amount: number) => {
    return amount.toLocaleString('th-TH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}

const updatePassword = () => {
    if (!newPassword.value) {
        showError('กรุณากรอกรหัสผ่านใหม่')
        return
    }

    if (newPassword.value.length < 8 || newPassword.value.length > 15) {
        showError('รหัสผ่านต้องมี 8-15 ตัวอักษร')
        return
    }

    // TODO: Implement actual password update API call
    emit('updatePassword', newPassword.value)
    showSuccess('อัพเดทรหัสผ่านสำเร็จ')
    newPassword.value = ''
}

// Update timestamp periodically
onMounted(() => {
    if (process.client) {
        const interval = setInterval(() => {
            timestamp.value = Date.now()
        }, 60000) // Update every minute

        onUnmounted(() => {
            clearInterval(interval)
        })
    }
})
</script>