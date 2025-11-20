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
                <div class="tt_l tt_full fr_tx1">
                  <div class="table100 ver1 m-b-110" style="margin: auto; width: 90%; padding-top: 5px;">
                    <div class="table100-body js-pscroll ps ps--active-y">
                      <table>
                        <tbody id="memaff">
                          <tr class="row100 body">
                            <td class="cell100 column2x" style="text-align: center;">User</td>
                            <td class="cell100 column1x" style="text-align: center;">รายได้ของท่าน</td>
                          </tr>
                          <tr v-if="friends.length === 0" class="row100 body">
                            <td colspan="2" class="cell100" style="text-align: center; padding: 20px; color: #999;">
                              ยังไม่มีเพื่อนที่แนะนำ
                            </td>
                          </tr>
                          <tr v-for="friend in friends" :key="friend.id" class="row100 body">
                            <td class="cell100 column2x" style="text-align: center;">{{ friend.username }}</td>
                            <td class="cell100 column1x" style="text-align: center;">{{ formatCurrency(friend.earning) }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- Social Share Buttons -->
                <table class="social-share-table">
                  <tbody>
                    <tr>
                      <!-- LINE -->
                      <td class="text-center">
                        <a
                          :href="lineShareUrl"
                          target="_blank"
                          class="share-link"
                        >
                          <img src="https://ufanance12.com/img/line-icon.png" class="social-icon">
                          <br>แนะนำผ่าน LINE
                        </a>
                      </td>

                      <!-- Facebook Messenger -->
                      <td class="text-center">
                        <a
                          :href="messengerShareUrl"
                          target="_blank"
                          class="share-link"
                        >
                          <img src="https://ufanance12.com/img/facebook-messenger-icon.png" class="social-icon">
                          <br>แนะนำผ่าน Messenger
                        </a>
                      </td>

                      <!-- Facebook -->
                      <td class="text-center">
                        <a
                          :href="facebookShareUrl"
                          target="_blank"
                          class="share-link"
                        >
                          <img src="https://ufanance12.com/img/facebook_circle-512.png" class="social-icon">
                          <br>แนะนำผ่าน Facebook
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- Promotional Image -->
                <div class="text-center">
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
                </div>

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
  // TODO: Uncomment when API is ready
  // try {
  //   const response = await fetch('/api/affiliate/data')
  //   if (response.ok) {
  //     const data = await response.json()
  //     affiliateLink.value = data.affiliateLink || ''
  //     friendCount.value = data.friendCount || 0
  //     creditAmount.value = data.creditAmount || 0
  //     friends.value = data.friends || []
  //     return
  //   }
  // } catch (error) {
  //   console.error('Failed to fetch affiliate data:', error)
  // }

  // Use mock data for development
  const userId = 'MTc2MjA3XzE3NjIwNw=='
  affiliateLink.value = `https://www.affufanance.com/register.php?af=${userId}`
  friendCount.value = 0
  creditAmount.value = 0
  friends.value = []
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
/* Text alignment utility */
.text-center {
  text-align: center;
}

/* Card header info */
.card-header-info {
  background: linear-gradient(135deg, #f3c31a 0%, #ffd700 100%);
  color: #1e3c72;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  box-shadow: 0 2px 8px rgba(243, 195, 26, 0.3);
}

/* Social share table */
.social-share-table {
  width: 100%;
  margin: 30px 0;
  border-collapse: collapse;
}

.social-share-table td {
  padding: 20px 10px;
  vertical-align: top;
}

.share-link {
  display: inline-block;
  text-decoration: none;
  color: #1e3c72;
  transition: all 0.3s;
}

.share-link:hover {
  transform: translateY(-5px);
  color: #f3c31a;
}

.social-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  transition: all 0.3s;
}

.share-link:hover .social-icon {
  transform: scale(1.1);
}

/* Promotional image */
.promo-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Description text */
.description {
  text-align: left;
  line-height: 1.8;
  color: #333;
  margin-top: 20px;
}
.table100-body {
    max-height: 585px;
    overflow: auto;
}
.js-pscroll {
    position: relative;
    overflow: hidden;
}
table {
    width: 100%;
}
.table100.ver1 td {
    font-family: Lato-Regular;
    font-size: 15px;
    color: #808080;
    line-height: 1.4;
}
.table100-body td {
    padding-top: 16px;
    padding-bottom: 16px;
}
.table100-body td {
    padding-top: 1px;
    padding-bottom: 1px;
}
.thaitheme_read a {
    color: black !important;
}
.table100.ver1 {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
    -o-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
    -ms-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
}

.table100 {
    position: relative;
    padding-top: 60px;
}
.table100 {
    background-color: #fff;
}

.m-b-110 {
  margin-bottom: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .social-share-table td {
    display: block;
    width: 100%;
    padding: 15px 10px;
  }

  .social-icon {
    width: 60px;
    height: 60px;
  }

  .card-header-info {
    font-size: 0.9rem;
    padding: 12px 15px;
  }
}
</style>
