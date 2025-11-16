<template>
    <div class="tt_l tt_full fr_login center" id="fr_login_user_form">
        <!-- User Info Section -->
        <div class="fr_uc">
            <span class="tt_l tt_full fr_tx_u">
                รหัสสมาชิกของคุณคือ: <span id="user_">{{ userData.memberId }}</span>
                (<span class="amount">{{ formatCurrency(userData.credit) }}</span>)
            </span>
        </div>

        <div class="tt_l tt_full fr_name">
            สวัสดี <span id="user">{{ userData.username }}</span>
        </div>

        <!-- Credit Section -->
        <section class="credit">
            <div class="credit-box">
                <div class="amount-box float-left">
                    <small>ยอดเครดิตของคุณ</small>
                    <p class="amount">{{ formatCurrency(userData.credit) }}</p>
                </div>

                <div class="button-box float-left">
                    <a href="/deposit" class="btn-block btn-gold">
                        <i class="fas fa-wallet"></i> ฝากเงิน
                    </a>
                    <a href="/withdrawal" class="btn-block btn-silver">
                        <i class="fas fa-hand-holding-usd"></i> ถอนเงิน
                    </a>
                </div>
            </div>
        </section>

        <!-- Navigation Section -->
        <section class="navigation">
            <div class="nav-other-button">
                <!-- Row 1 -->
                <div class="other-list other-list-1">
                    <a href="/account" class="btn-dark-tri hvr-buzz-out">
                        <i class="fas fa-user"></i>
                        <p>ข้อมูลบัญชี</p>
                    </a>
                </div>
                <div class="other-list other-list-2">
                    <a href="/account?h=h" class="btn-dark-tri hvr-buzz-out">
                        <i class="fas fa-list-alt"></i>
                        <p>ประวัติการเงิน</p>
                    </a>
                </div>

                <!-- Row 2 -->
                <div class="other-list other-list-1">
                    <a href="/affiliate" class="btn-dark-tri hvr-buzz-out">
                        <i class="fas fa-users"></i>
                        <p>แนะนำเพื่อน</p>
                    </a>
                </div>
                <div class="other-list other-list-2">
                    <a href="/รางวัลประจำเดือน" class="btn-dark-tri hvr-buzz-out">
                        <i class="fas fa-star"></i>
                        <p>รางวัลประจำเดือน</p>
                    </a>
                </div>

                <!-- Row 3 -->
                <div class="other-list other-list-1">
                    <a href="/เปิดไพ่รับเงินแจกวันละ-5" class="btn-dark-tri hvr-buzz-out">
                        <img src="https://ufanance12.com/wp-content/themes/ufanance.com/images/card.png" alt="Card">
                        <p>เปิดไพ่เสี่ยงโชค</p>
                    </a>
                </div>
                <div class="other-list other-list-2">
                    <a href="/หมุนกงล้อเสี่ยงโชค" class="btn-dark-tri hvr-buzz-out">
                        <img src="https://ufanance12.com/wp-content/themes/ufanance.com/images/wheels.png" alt="Wheel">
                        <p>หมุนกงล้อเสี่ยงโชค</p>
                    </a>
                </div>

                <!-- Row 4 -->
                <div class="other-list other-list-3">
                    <a href="/return/" class="btn-dark-tri hvr-buzz-out">
                        <i class="fas fa-donate"></i>
                        <p>รับเครดิตเงินคืน</p>
                    </a>
                </div>
                <div class="other-list other-list-4">
                    <a href="https://line.me/ti/p/~@ufanancev4" target="_blank" class="btn-dark-tri hvr-buzz-out">
                        <i class="fab fa-line"></i>
                        <p>ติดต่อเจ้าหน้าที่</p>
                    </a>
                </div>
            </div>

            <!-- Play Buttons -->
            <div class="nav-play-button hvr-buzz-out">
                <div class="btn-block play-button hvr-buzz-out">
                    <form method="post" :action="`/login_uf2.php?t=${timestamp}`" target="_blank">
                        <input type="hidden" name="txtUserName" class="username_" :value="userData.memberId">
                        <input type="hidden" name="password" class="password_" :value="userData.gamePassword">
                        <input type="hidden" name="__EVENTTARGET" value="btnSignIn">
                        <button class="tt_l tt_full fr_submit_bk ufa_link" type="submit">
                            ทางเข้าเล่น UFANANCE
                        </button>
                    </form>
                </div>
            </div>

            <div class="nav-play-button hvr-buzz-out">
                <div class="btn-block play-button hvr-buzz-out">
                    <form method="post" :action="`/login_uf2.php?t=${timestamp}`" target="_blank">
                        <input type="hidden" name="url" value="https://www.thuflike.com">
                        <input type="hidden" name="txtUserName" class="username_" :value="userData.memberId">
                        <input type="hidden" name="password" class="password_" :value="userData.gamePassword">
                        <input type="hidden" name="__EVENTTARGET" value="btnSignIn">
                        <button class="tt_l tt_full fr_submit_bk ufa_link" type="submit">
                            ทางเข้าเล่น ( สำรอง 1)
                        </button>
                    </form>
                </div>
            </div>

            <div class="nav-play-button hvr-buzz-out">
                <div class="btn-block play-button hvr-buzz-out">
                    <form method="post" :action="`/login_uf2.php?t=${timestamp}`" target="_blank">
                        <input type="hidden" name="url" value="https://www.goodufp.com">
                        <input type="hidden" name="txtUserName" class="username_" :value="userData.memberId">
                        <input type="hidden" name="password" class="password_" :value="userData.gamePassword">
                        <input type="hidden" name="__EVENTTARGET" value="btnSignIn">
                        <button class="tt_l tt_full fr_submit_bk ufa_link" type="submit">
                            ทางเข้าเล่น ( สำรอง 2)
                        </button>
                    </form>
                </div>
            </div>

            <!-- LINE Login Connect Button -->
            <div v-if="!userData.lineConnected" id="line_lg_" style="background: rgb(0, 185, 0);"
                 class="tt_l tt_full b_link_game hvr-buzz buzz">
                <a href="#" @click.prevent="connectLine" class="u-btn btn-play btn-block hvr-buzz">
                    <i class="fab fa-line"></i> เชื่อมต่อบัญชี LINE LOGIN
                </a>
            </div>

            <!-- Logout Button -->
            <div class="tt_l tt_full b_logout_game" @click="handleLogout">
                <a href="#" @click.prevent="handleLogout" class="u-btn btn-play btn-block hvr-buzz">
                    <i class="fas fa-power-off"></i><span> ออกจากระบบ</span>
                </a>
            </div>

            <div class="clear"></div>

            <!-- Promotions Section -->
            <div class="promo-box tt_l tt_full fr_login center">
                <img src="https://ufanance12.com/img/ดาวน์โหลด.jpg" class="pro-title" width="100%" alt="Promotions">
                <br><br>

                <!-- Promotion 1: เกาจิ้ง -->
                <table style="width: 100%;margin-bottom: 15px;">
                    <tbody>
                        <tr style="border-bottom:1pt solid #e0e0e0;">
                            <td style="vertical-align: top !important;">
                                <a href="/kj-r/#ct_from" target="_blank">
                                    <img src="https://ufanance12.com/ev1010.png" style="width: 100%" alt="Event">
                                </a>
                                <br>
                                <div style="text-align: center">
                                    <span class="fr_name">
                                        ตามหานักเดิมพัน สายเลือดเกาจิ้ง 30อันดับ ทำกำไรสูงที่สุด
                                        แจกเงินรางวัลรวมสูงสุด 30 ล้านบาท วันเดียวเท่านั้น ท้าพิสูจน์เกาจิ้งตัวจริง
                                    </span>
                                </div>
                                <br>
                            </td>
                            <td>
                                <div class="tt_l tt_full fr_link_r pro-bt">
                                    <a style="width: 80px;" href="/kj-r/#ct_from" target="_blank">สมัครเข้าร่วมกิจกรรม</a>
                                </div>
                                <div class="tt_l tt_full fr_link_r" style="margin-top: 10px;">
                                    <a style="width: 80px;" href="#" @click.prevent="showPromoDetail(1)">รายละเอียด</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- Promotion 2: แทงติดกัน 10 ตา -->
                <table style="width: 100%;margin-bottom: 15px;">
                    <tbody>
                        <tr style="border-bottom:1pt solid #e0e0e0;">
                            <td style="vertical-align: top !important;">
                                <img src="https://ufanance12.com/wp-content/uploads/2023/06/04-1.jpg" style="width: 100%" alt="Promotion">
                                <br>
                                <div style="text-align: center">
                                    <span class="fr_name">
                                        แทงถูก หรือ ผิด ติดกัน 10 ตารวด!รับเงินทันที<br>
                                        รับโบนัสทันทีสูงสุดไม่เกิน 5,000 บาท อ่านรายละเอียดเพิ่มเติม
                                    </span>
                                </div>
                                <br>
                            </td>
                            <td>
                                <div class="tt_l tt_full fr_link_r pro-bt">
                                    <a style="width: 80px;" href="https://line.me/ti/p/~@ufanancev4" target="_blank">แลกโบนัส</a>
                                </div>
                                <div class="tt_l tt_full fr_link_r" style="margin-top: 10px;">
                                    <a style="width: 80px;" href="#" @click.prevent="showPromoDetail(2)">รายละเอียด</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- Promotion 3: โปรวันเกิด -->
                <table style="width: 100%;margin-bottom: 15px;">
                    <tbody>
                        <tr style="border-bottom:1pt solid #e0e0e0;">
                            <td style="vertical-align: top !important;">
                                <img src="https://ufanance12.com/wp-content/uploads/2023/06/03-1.jpg" style="width: 100%" alt="Birthday">
                                <br>
                                <div style="text-align: center">
                                    <span class="fr_name">
                                        เมื่อถึงวันเกิดของท่าน เพียงแค่ท่านโชว์บัตรประชาชนให้ทีมงาน<br>
                                        รับทันทีเครดิต 500 บาท (สามารถถอนเงินได้ทันที)
                                    </span>
                                </div>
                                <br>
                            </td>
                            <td>
                                <div class="tt_l tt_full fr_link_r pro-bt">
                                    <a style="width: 80px;" href="https://line.me/ti/p/~@ufanancev4" target="_blank">แลกโบนัส</a>
                                </div>
                                <div class="tt_l tt_full fr_link_r" style="margin-top: 10px;">
                                    <a style="width: 80px;" href="#" @click.prevent="showPromoDetail(4)">รายละเอียด</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <PromoDetailModal :visible="isPromoModalVisible" @close="closePromoModal" />
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

const props = defineProps<{
    userData: UserData
}>()

const emit = defineEmits<{
    logout: []
    connectLine: []
}>()

const timestamp = ref(Date.now())
const isPromoModalVisible = ref(false)

const formatCurrency = (amount: number) => {
    return amount.toLocaleString('th-TH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}

const handleLogout = () => {
    emit('logout')
}

const connectLine = () => {
    emit('connectLine')
}

const showPromoDetail = (_promoId: number) => {
    isPromoModalVisible.value = true
}

const closePromoModal = () => {
    isPromoModalVisible.value = false
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
