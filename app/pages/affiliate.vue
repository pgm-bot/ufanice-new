<template>
  <div>
    <Header></Header>
    <HeadMobile></HeadMobile>

    <div class="wrapper-c">
      <div class="tt_l tt_full p_gl">
        <!-- Page Title -->
        <div id="ct_from" class="tt_l tt_full title_page">
          <h1>"ข้อมูลแนะนำเพื่อน"</h1>
        </div>

        <!-- Content Area -->
        <div class="tt_l tt_full tt_content bg">
          <div class="tt_l tt_full body_c">
            <div class="tt_l tt_full">
              <div class="thaitheme_read">

                <!-- Header Title -->
                <h1 class="entry-title">
                  <span class="icon-bar"></span>
                  แนะนำเพื่อน รับทันที 0.6% ของยอดได้เสียของคนแนะนำ
                </h1>

                <!-- Info Card -->
                <div class="card-header-info">
                  แนะนำเพื่อน อัพเดทล่าสุด ท่านจะได้รับ 0.6% ยอดเทิร์นโอเวอร์ เมื่อผู้ที่สมัครผ่านลิ้งค์ของท่านเข้าเล่น<br>
                  ยอดเงินจะอัพเดทอัตโนมัติ เวลา 13.20น. ของทุกวัน
                </div>

                <!-- Referral Link Section -->
                <div class="tt_l tt_full fr_sec">
                  <label class="tt_l fr_tx2x">Link แนะนำ</label>
                  <input
                    ref="affiliateLinkInput"
                    class="form-control tt_bk aff"
                    readonly
                    :value="affiliateLink"
                    @click="selectText"
                  >
                </div>

                <!-- Copy Button -->
                <a class="btn btn-block btn-dark-green btn-lg btn-copy" @click="copyToClipboard">
                  <i class="far fa-copy"></i> คัดลอก link
                </a>

                <!-- Friend Count -->
                <div class="tt_l tt_full fr_sec">
                  <label class="tt_l fr_tx2x">จำนวนเพื่อนที่แนะนำ</label>
                  <span class="form-control tt_bk aff_c tt_l fr_tx2x">
                    {{ friendCount }}
                  </span>
                </div>

                <!-- Credit Amount -->
                <div class="tt_l tt_full fr_sec">
                  <label class="tt_l fr_tx2x">จำนวนเครดิตแนะนำ</label>
                  <input
                    class="form-control tt_bk tt_l fr_tx2x aff_am"
                    readonly
                    :value="formatCurrency(creditAmount)"
                  >
                </div>

                <!-- Transfer Button -->
                <div>
                  <button
                    class="tt_l tt_ful fr_submit_bk btn-copy"
                    @click="transferCredit"
                    :disabled="creditAmount < 500 || isTransferring"
                  >
                    {{ isTransferring ? 'กำลังโอน...' : 'โอนเงินเข้าเครดิต' }}
                  </button>
                  <div class="tt_l tt_full fr_tx1">
                    *ยอดขั้นต่ำ 500 บาท จึงจะโอนเข้าเครดิตได้
                  </div>
                </div>

                <br>

                <!-- Friends Table -->
                <div class="table-container">
                  <table class="friends-table">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>รายได้ของท่าน</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="friends.length === 0">
                        <td colspan="2" class="no-data">ยังไม่มีเพื่อนที่แนะนำ</td>
                      </tr>
                      <tr v-for="friend in friends" :key="friend.id" class="data-row">
                        <td>{{ friend.username }}</td>
                        <td class="amount">{{ formatCurrency(friend.earning) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Social Share Buttons -->
                <table class="social-share-table">
                  <tbody>
                    <tr>
                      <!-- LINE -->
                      <td>
                        <center>
                          <a
                            :href="lineShareUrl"
                            target="_blank"
                            class="share-link"
                          >
                            <img src="https://ufanance12.com/img/line-icon.png" class="social-icon">
                            <br>แนะนำผ่าน LINE
                          </a>
                        </center>
                      </td>

                      <!-- Facebook Messenger -->
                      <td>
                        <center>
                          <a
                            :href="messengerShareUrl"
                            target="_blank"
                            class="share-link"
                          >
                            <img src="https://ufanance12.com/img/facebook-messenger-icon.png" class="social-icon">
                            <br>แนะนำผ่าน Messenger
                          </a>
                        </center>
                      </td>

                      <!-- Facebook -->
                      <td>
                        <center>
                          <a
                            :href="facebookShareUrl"
                            target="_blank"
                            class="share-link"
                          >
                            <img src="https://ufanance12.com/img/facebook_circle-512.png" class="social-icon">
                            <br>แนะนำผ่าน Facebook
                          </a>
                        </center>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- Promotional Image -->
                <center>
                  <img
                    class="promo-image"
                    src="https://ufanance12.com/wp-content/uploads/2024/10/05.jpg"
                    alt="ระบบแนะนำเพื่อนแบบขั้นบันได"
                  >

                  <!-- Description -->
                  <p class="tt_l tt_full fr_tx1 description">
                    <b>ลิ้งค์ช่วยแชร์รับ <span style="color: #f3c31a;">0.6%</span> ฟรี ทุกยอดการแทง</b>
                    (แค่ก๊อปปี้ลิ้งค์ไปแชร์ก็ได้เงินแล้ว) ยิ่งแชร์มากยิ่งได้มาก<br><br>

                    ท่านสามารถนำลิ้งค์ด้านล่างนี้หรือนำป้ายแบนเนอร์ ไปแชร์ในช่องทางต่างๆ ไม่ว่าจะเป็น เว็บไซต์ส่วนตัว, Blog, Facebook หรือ Social Network อื่นๆ
                    หากมีการสมัครสมาชิกโดยคลิกผ่านลิ้งค์ของท่านเข้ามา ลูกค้าที่สมัครเข้ามาก็จะอยู่ภายให้เครือข่ายของท่านทันที
                    และหากลูกค้าภายใต้เครือข่ายของท่านมีการเดิมพันเข้ามา ทุกยอดการเดิมพัน ท่านจะได้รับส่วนแบ่งในการแนะนำ 0.6% ทันทีโดยไม่มีเงื่อนไข
                    <br><br>

                    <u>ตัวอย่างเช่น...</u><br><br>

                    -เพื่อนลำดับที่ 1 ท่านจะได้รับส่วนแบ่ง เริ่มต้นในขั้นแรก 0.6% <br>
                    <u>ตัวอย่างเช่น..</u> ลูกค้าท่าน 1 คน แทง 1,000 บาท ท่านจะได้ 6 บาท (ท่านจะได้ทุกรายการแทงของลูกค้า)<br><br>

                    -เพื่อนลำดับที่ 2 ท่านจะได้รับส่วนแบ่ง เริ่มต้นในขั้นแรก 0.06% <br>
                    <u>ตัวอย่างเช่น..</u> ลูกค้าท่าน 1 คน แทง 10,000 บาท ท่านจะได้ 6 บาท (ท่านจะได้ทุกรายการแทงของลูกค้า)<br><br>

                    สามารถทำรายได้เดือน 100,000 บาทง่ายๆเลยทีเดียว และรายได้ทุกบาททุกสตางค์ของท่านสามารถตรวจสอบได้ทุกขั้นตอน
                    งานนี้แจกจริง จริงจ่าย ที่นี้ที่เดียวที่ให้คุณมากกว่าใคร ก๊อปปี้ลิ้งค์ด้านบนและข้อความด้านล่างนี้ นำไปแชร์ได้เลย
                  </p>
                </center>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
    <FixedFooter></FixedFooter>
  </div>
</template>

<script setup lang="ts">
interface Friend {
  id: number
  username: string
  earning: number
}

// Reactive state
const affiliateLinkInput = ref<HTMLInputElement | null>(null)
const affiliateLink = ref('')
const friendCount = ref(0)
const creditAmount = ref(0)
const isTransferring = ref(false)
const friends = ref<Friend[]>([])

const { showSuccess, showError } = useSweetAlert()

// Computed share URLs
const lineShareUrl = computed(() => {
  return `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(affiliateLink.value)}`
})

const messengerShareUrl = computed(() => {
  return `fb-messenger://share/?link=${encodeURIComponent(affiliateLink.value)}`
})

const facebookShareUrl = computed(() => {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(affiliateLink.value)}`
})

// Format currency
const formatCurrency = (amount: number): string => {
  return amount.toLocaleString('th-TH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

// Select text on click
const selectText = (event: Event) => {
  const input = event.target as HTMLInputElement
  input.select()
}

// Copy to clipboard
const copyToClipboard = async () => {
  try {
    if (affiliateLinkInput.value) {
      affiliateLinkInput.value.select()
      await navigator.clipboard.writeText(affiliateLink.value)
      showSuccess('คัดลอก Link สำเร็จ')
    }
  } catch (error) {
    console.error('Failed to copy:', error)
    showError('ไม่สามารถคัดลอก Link ได้')
  }
}

// Transfer credit
const transferCredit = async () => {
  if (creditAmount.value < 500) {
    showError('ยอดเครดิตต้องไม่น้อยกว่า 500 บาท')
    return
  }

  isTransferring.value = true

  try {
    // TODO: Replace with actual API call
    const response = await fetch('/api/affiliate/transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: creditAmount.value
      })
    })

    if (response.ok) {
      showSuccess(`โอนเงิน ${formatCurrency(creditAmount.value)} บาท เข้าเครดิตสำเร็จ`)

      // Reset credit amount
      creditAmount.value = 0

      // Refresh data
      await fetchAffiliateData()
    } else {
      throw new Error('Transfer failed')
    }
  } catch (error) {
    console.error('Transfer error:', error)
    showError('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
  } finally {
    isTransferring.value = false
  }
}

// Fetch affiliate data
const fetchAffiliateData = async () => {
  try {
    // TODO: Replace with actual API call
    const response = await fetch('/api/affiliate/data')

    if (response.ok) {
      const data = await response.json()
      affiliateLink.value = data.affiliateLink || ''
      friendCount.value = data.friendCount || 0
      creditAmount.value = data.creditAmount || 0
      friends.value = data.friends || []
    } else {
      // Mock data for development
      const userId = 'MTc2MjA3XzE3NjIwNw=='
      affiliateLink.value = `https://www.affufanance.com/register.php?af=${userId}`
      friendCount.value = 0
      creditAmount.value = 0
      friends.value = []
    }
  } catch (error) {
    console.error('Failed to fetch affiliate data:', error)

    // Use mock data on error
    const userId = 'MTc2MjA3XzE3NjIwNw=='
    affiliateLink.value = `https://www.affufanance.com/register.php?af=${userId}`
    friendCount.value = 0
    creditAmount.value = 0
    friends.value = []
  }
}

// Fetch data on component mount
onMounted(async () => {
  await fetchAffiliateData()
})

// Set page metadata
useHead({
  title: 'แนะนำเพื่อน - UFANANCE',
  meta: [
    { name: 'description', content: 'แนะนำเพื่อนรับ 0.6% ของยอดเทิร์นโอเวอร์ทุกยอดการแทง UFANANCE' }
  ]
})
</script>

<style scoped>
/* Page Layout */
.wrapper-c {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.p_gl {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Title */
.title_page {
  background: linear-gradient(90deg, #f3c31a 0%, #ffd700 100%);
  padding: 20px;
  text-align: center;
}

.title_page h1 {
  margin: 0;
  color: #1e3c72;
  font-size: 2rem;
  font-weight: bold;
}

/* Content Area */
.tt_content {
  padding: 30px 20px;
}

.body_c {
  max-width: 800px;
  margin: 0 auto;
}

.thaitheme_read {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  padding: 25px;
}

/* Entry Title */
.entry-title {
  color: #1e3c72;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.icon-bar {
  display: inline-block;
  width: 4px;
  height: 20px;
  background: #f3c31a;
  margin-right: 10px;
  vertical-align: middle;
}

/* Info Card */
.card-header-info {
  background: #479988;
  padding: 15px;
  color: white;
  border-radius: 8px;
  margin-bottom: 25px;
  line-height: 1.6;
}

/* Form Sections */
.fr_sec {
  margin-bottom: 20px;
}

.fr_tx2x {
  color: #1e3c72;
  font-size: 1.1rem;
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
}

.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  color: #333;
}

.form-control.aff {
  cursor: pointer;
  user-select: all;
}

.form-control.aff:focus {
  outline: none;
  border-color: #f3c31a;
}

.form-control[readonly] {
  background: #f8f9fa;
}

.aff_c,
.aff_am {
  width: 100% !important;
  background: #f8f9fa !important;
  border: 2px solid #ddd !important;
}

/* Buttons */
.btn-copy {
  display: block;
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #479988 0%, #56b3a0 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  text-align: center;
  margin-bottom: 15px;
}

.btn-copy:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.btn-copy i {
  margin-right: 8px;
}

.fr_submit_bk {
  background: linear-gradient(135deg, #f3c31a 0%, #ffd700 100%);
  color: #1e3c72;
  margin-bottom: 10px;
}

.fr_submit_bk:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

.fr_tx1 {
  color: #666;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 20px;
}

/* Table */
.table-container {
  margin: 30px 0;
  overflow-x: auto;
}

.friends-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.friends-table th,
.friends-table td {
  padding: 12px 15px;
  text-align: center;
  border: 1px solid #ddd;
}

.friends-table th {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  font-weight: bold;
}

.friends-table .data-row:hover {
  background: #f0f8ff;
}

.friends-table .amount {
  color: #28a745;
  font-weight: 600;
}

.friends-table .no-data {
  padding: 40px;
  color: #999;
  font-style: italic;
}

/* Social Share */
.social-share-table {
  width: 100%;
  border: none;
  margin: 30px 0;
}

.social-share-table td {
  width: 33%;
  border: none;
  padding: 15px;
  text-align: center;
}

.share-link {
  text-decoration: none;
  color: #1e3c72;
  display: block;
  transition: all 0.3s;
}

.share-link:hover {
  transform: scale(1.05);
}

.social-icon {
  max-width: 80%;
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
}

/* Promo Image */
.promo-image {
  max-width: 100%;
  width: 1080px;
  height: auto;
  border-radius: 10px;
  margin: 30px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Description */
.description {
  text-align: left;
  line-height: 1.8;
  color: #333;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 20px 0;
}

.description b {
  color: #1e3c72;
  font-size: 1.1rem;
}

.description u {
  color: #f3c31a;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 768px) {
  .wrapper-c {
    padding: 10px;
  }

  .tt_content {
    padding: 20px 10px;
  }

  .thaitheme_read {
    padding: 15px;
  }

  .title_page h1 {
    font-size: 1.5rem;
  }

  .entry-title {
    font-size: 1.2rem;
  }

  .social-icon {
    width: 70px;
    height: 70px;
  }

  .description {
    font-size: 0.9rem;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .title_page h1 {
    font-size: 1.3rem;
  }

  .entry-title {
    font-size: 1.1rem;
  }

  .fr_tx2x {
    font-size: 1rem;
  }

  .btn-copy {
    font-size: 1rem;
    padding: 12px;
  }

  .social-icon {
    width: 60px;
    height: 60px;
  }

  .promo-image {
    margin: 20px 0;
  }
}
</style>
