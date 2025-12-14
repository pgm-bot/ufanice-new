<template>
    <div class="tt_l tt_full fr_login center" id="fr_login_user_form">
        <!-- User Info Section -->
        <div class="fr_uc">
            <span class="tt_l tt_full fr_tx_u">
                รหัสสมาชิกของคุณคือ: <span id="user_">{{ userData.memberId }}</span>
                (<span class="amount">{{ formatCurrency(ufaBalance || userData.credit) }}</span>)
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
      <p class="amount">{{ formatCurrency(ufaBalance || userData.credit) }}</p>
    </div>

    <div class="button-box float-left">
      <!-- เปลี่ยนจาก <a href="/deposit"> เป็น button กดเปิด modal -->
      <button type="button" class="btn-block btn-gold" @click="isDepositModalVisible = true">
        <i class="fas fa-wallet"></i> ฝากเงิน
      </button>
      <a href="/withdraw" class="btn-block btn-silver">
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
                    <a href="/rewards" class="btn-dark-tri hvr-buzz-out">
                        <i class="fas fa-star"></i>
                        <p>รางวัลประจำเดือน</p>
                    </a>
                </div>

                <!-- Row 3 -->
                <div class="other-list other-list-1">
                    <a href="/card" class="btn-dark-tri hvr-buzz-out">
                        <img src="https://ufanance12.com/wp-content/themes/ufanance.com/images/card.png" alt="Card">
                        <p>เปิดไพ่เสี่ยงโชค</p>
                    </a>
                </div>
                <div class="other-list other-list-2">
                    <a href="/spin" class="btn-dark-tri hvr-buzz-out">
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
                            ทางเข้าเล่น UFANICE
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

                <!-- Dynamic Promotions from API -->
                <table v-for="promo in promotions" :key="promo.id" style="width: 100%;margin-bottom: 15px;">
                    <tbody>
                        <tr style="border-bottom:1pt solid #e0e0e0;">
                            <td style="vertical-align: top !important;">
                                <a v-if="!promo.isExternal" :href="promo.registerLink" :target="promo.isExternal ? '_blank' : '_self'">
                                    <img :src="promo.image" style="width: 100%" :alt="promo.title">
                                </a>
                                <img v-else :src="promo.image" style="width: 100%" :alt="promo.title">
                                <br>
                                <div style="text-align: center">
                                    <span class="fr_name">
                                        {{ promo.title }}<br v-if="promo.description">
                                        {{ promo.description }}
                                    </span>
                                </div>
                                <br>
                            </td>
                            <td>
                                <div class="tt_l tt_full fr_link_r pro-bt">
                                    <a style="width: 80px;"
                                       :href="promo.registerLink"
                                       :target="promo.isExternal ? '_blank' : '_self'">
                                        {{ promo.registerText }}
                                    </a>
                                </div>
                                <div class="tt_l tt_full fr_link_r" style="margin-top: 10px;">
                                    <a style="width: 80px;" href="#" @click.prevent="showPromoDetail(promo.detailsId)">รายละเอียด</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <!-- Modal ฝากเงิน -->
<DepositMethodModal
  :visible="isDepositModalVisible"
  @close="isDepositModalVisible = false"
  @select="handleDepositMethodSelect"
/>
        <PromoDetailModal :visible="isPromoModalVisible" :promo-id="selectedPromoId" @close="closePromoModal" />
        
    </div>
</template>

<script setup lang="ts">
    const isDepositModalVisible = ref(false)
    const router = useRouter()

const handleDepositMethodSelect = (methodKey: string) => {
  isDepositModalVisible.value = false

  // ไปหน้า /deposit โดยส่ง method ไปเป็น query (หรือจะใช้ params ก็ได้)
  router.push({
    path: '/deposit',
    query: { method: methodKey } // เช่น ?method=bank
  })
}
interface UserData {
    memberId: string
    username: string
    credit: number
    gamePassword: string
    lineConnected: boolean
}

interface Promotion {
    id: number
    title: string
    description: string
    image: string
    registerLink: string
    registerText: string
    detailsId: number
    isExternal: boolean
}

const emit = defineEmits<{
    logout: []
    connectLine: []
}>()

const { user } = useUserSession()

// แปลง user session เป็น UserData format
const userData = computed<UserData>(() => {
    if (!user.value) {
        return {
            memberId: '',
            username: '',
            credit: 0,
            gamePassword: '',
            lineConnected: false
        }
    }
    
    return {
        memberId: (user.value as any).memberId || '',
        username: (user.value as any).username || '',
        credit: (user.value as any).credit || 0,
        gamePassword: (user.value as any).gamePassword || '',
        lineConnected: (user.value as any).lineConnected || false
    }
})

const timestamp = ref('')
const isPromoModalVisible = ref(false)
const selectedPromoId = ref<number | undefined>(undefined)
const promotions = ref<Promotion[]>([])
const ufaBalance = ref<number>(0)
const api = useApi()

const formatCurrency = (amount: number) => {
    return amount.toLocaleString('th-TH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}

// โหลดยอดเงินจาก UFABET API
const loadBalance = async () => {
    if (!userData.value.username) {
        return
    }
    
    try {
        const result = await api.get(`/api/v1/ufa/balance/${userData.value.username}`)
        if (result && (result as any).totalBetCredit) {
            ufaBalance.value = parseFloat((result as any).totalBetCredit)
        }
    } catch (error) {
        console.error('Failed to load balance:', error)
        // ใช้ credit จาก session เป็น fallback
        ufaBalance.value = userData.value.credit
    }
}

const handleLogout = () => {
    emit('logout')
}

const connectLine = () => {
    emit('connectLine')
}

const showPromoDetail = (promoId: number) => {
    selectedPromoId.value = promoId
    isPromoModalVisible.value = true
}

const closePromoModal = () => {
    isPromoModalVisible.value = false
    selectedPromoId.value = undefined
}

const loadPromotions = async () => {
    try {
        const response = await fetch('/api/promotions.json')
        const result = await response.json()
        if (result.status === 200 && result.data) {
            promotions.value = result.data
        }
    } catch (error) {
        console.error('Failed to load promotions:', error)
    }
}

// Set timestamp only on client side to avoid hydration mismatch
onMounted(() => {
    if (process.client) {
        timestamp.value = Date.now().toString()

        const interval = setInterval(() => {
            timestamp.value = Date.now().toString()
        }, 60000) // Update every minute

        onUnmounted(() => {
            clearInterval(interval)
        })

        // Load promotions
        loadPromotions()
        
        // Load balance from UFABET API
        loadBalance()
    }
})
</script>
<style  scoped>
    .btn-gold{
          font-size: 22px;
    width: 100%;
    float: left;
    margin: 0px 0px 8px 0px;
    padding: 4px 0px 4px 0px; 
     font-family: 'ThaiSansLite', 'thaisanslite_r1', 'thaisanslite', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
 
</style>
