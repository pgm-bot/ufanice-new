<template>
  <div>
    <Header></Header>
    <HeadMobile></HeadMobile>

    <div class="wrapper-c">
      <div class="tt_l tt_full p_gl">
        <!-- Page Title -->
        <div id="ct_from" class="tt_l tt_full title_page">
          <h1>ถอนเงิน</h1>
        </div>

        <!-- Content Area -->
        <div class="tt_l tt_full tt_content bg">
          <div class="tt_l tt_full">
            <div class="tt_l tt_full">
              <div class="tt_l tt_full body_c">

                <!-- Credit Balance Display -->
                <div class="mount-credit">
                  <a>
                    <div class="tt_l tt_full fr_nmtx">ยอดเงินคงเหลือ</div>
                    <span class="number-h amount">{{ formatNumber(userBalance) }}</span> เครดิต
                  </a>
                </div>

                <!-- Withdraw Form -->
                <form
                  id="withdform"
                  class="tt_l tt_full fr_re"
                  @submit.prevent="handleSubmit"
                >
                  <!-- Account Name -->
                  <div class="tt_l tt_full fr_sec">
                    <div class="input-group">
                      <label class="tt_l fr_tx2x">ชื่อบัญชี</label>
                      <span
                        class="form-control tt_bk tt_l fr_tx2x"
                        id="name_acc"
                      >
                        {{ userAccount.accountName || '-' }}
                      </span>
                    </div>
                  </div>

                  <!-- Bank Account Number -->
                  <div class="tt_l tt_full fr_sec">
                    <div class="input-group">
                      <label class="tt_l fr_tx2x">โอนเข้าธนาคาร</label>
                      <span
                        class="form-control tt_bk tt_l fr_tx2x"
                        id="account"
                      >
                        {{ userAccount.accountNumber || '-' }}
                      </span>
                    </div>
                  </div>

                  <!-- Amount Input -->
                  <div class="tt_l tt_full fr_sec">
                    <div class="input-group">
                      <label class="tt_l fr_tx2x">จำนวนเงิน</label>
                      <input
                        v-model="withdrawAmount"
                        class="form-control tt_bk"
                        id="amount_"
                        placeholder="300 หรือ 5000 ไม่ต้องใส่ , (ลูกน้ำ)!"
                        maxlength="9"
                        name="amount"
                        required
                        type="text"
                        @input="validateAmount"
                        :class="{ 'error': amountError }"
                      >
                    </div>
                    <div v-if="amountError" class="error-message">{{ amountError }}</div>
                  </div>

                  <!-- Submit Button -->
                  <div class="form-group">
                    <button
                      type="submit"
                      id="wd"
                      class="tt_l tt_ful fr_submit_bk"
                      :disabled="isSubmitting || isMaintenanceTime"
                    >
                      <i class="fas fa-hand-holding-usd"></i>
                      {{ isSubmitting ? 'กำลังดำเนินการ...' : 'แจ้งถอนเงิน' }}
                    </button>
                  </div>

                  <!-- Maintenance Warning -->
                  <div class="depositList warning-box">
                    <div class="w50">
                      <a class="timerange">
                        <i class="fa fa-times" aria-hidden="true"></i>
                        ระบบถอนเงิน ปิดทำการ ช่วงเวลา 22:50 - 00:30 น.
                        ลูกค้าที่แจ้งถอนเข้ามาแล้วรบกวนรอยอดเข้าหลัง 00.30 น.
                        ขออภัยในความไม่สะดวกทุกประการค่ะ
                      </a>
                    </div>
                  </div>
                </form>

                <!-- Success/Error Messages -->
                <div v-if="successMessage" class="alert alert-success">
                  <i class="fas fa-check-circle"></i> {{ successMessage }}
                </div>
                <div v-if="errorMessage" class="alert alert-error">
                  <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
                </div>

                <!-- Transaction History Table -->
                <table id="res__" class="tt_l tt_full fr_tx2">
                  <!-- Transaction history can be added here -->
                </table>
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
interface UserAccount {
  accountName: string
  accountNumber: string
  bankName: string
}

interface WithdrawRequest {
  amount: number
  accountNumber: string
  timestamp: string
}

// Reactive state
const userBalance = ref(0)
const withdrawAmount = ref('')
const amountError = ref('')
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const userAccount = ref<UserAccount>({
  accountName: '',
  accountNumber: '',
  bankName: ''
})

// Check if current time is in maintenance window (22:50 - 00:30)
const isMaintenanceTime = computed(() => {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const currentTime = hours * 60 + minutes

  // 22:50 = 1370 minutes, 00:30 = 30 minutes
  const maintenanceStart = 22 * 60 + 50 // 1370
  const maintenanceEnd = 0 * 60 + 30 // 30

  // Handle overnight maintenance period
  if (currentTime >= maintenanceStart || currentTime <= maintenanceEnd) {
    return true
  }
  return false
})

// Validate amount input (numbers only, no commas)
const validateAmount = () => {
  const value = withdrawAmount.value

  // Remove any non-numeric characters except decimal point
  const cleaned = value.replace(/[^\d.]/g, '')
  withdrawAmount.value = cleaned

  // Clear previous error
  amountError.value = ''

  if (!value) {
    return
  }

  // Check if it's a valid number
  if (!/^\d+(\.\d{0,2})?$/.test(cleaned)) {
    amountError.value = 'กรุณาใส่ตัวเลขเท่านั้น'
    return
  }

  const amount = parseFloat(cleaned)

  // Minimum withdrawal
  if (amount < 100) {
    amountError.value = 'จำนวนเงินขั้นต่ำ 100 บาท'
    return
  }

  // Check if amount exceeds balance
  if (amount > userBalance.value) {
    amountError.value = 'ยอดเงินไม่เพียงพอ'
    return
  }
}

// Format number with comma separator
const formatNumber = (num: number): string => {
  return num.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

// Handle form submission
const handleSubmit = async () => {
  // Validate amount first
  validateAmount()
  if (amountError.value) {
    return
  }

  if (!withdrawAmount.value) {
    amountError.value = 'กรุณาระบุจำนวนเงิน'
    return
  }

  // Check maintenance time
  if (isMaintenanceTime.value) {
    errorMessage.value = 'ระบบปิดทำการในช่วงเวลา 22:50 - 00:30 น. กรุณาทำรายการใหม่ภายหลัง'
    setTimeout(() => {
      errorMessage.value = ''
    }, 5000)
    return
  }

  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const withdrawRequest: WithdrawRequest = {
      amount: parseFloat(withdrawAmount.value),
      accountNumber: userAccount.value.accountNumber,
      timestamp: new Date().toISOString()
    }

    // TODO: Replace with actual API call
    const response = await fetch('/api/withdraw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(withdrawRequest)
    })

    if (response.ok) {
      successMessage.value = `แจ้งถอนเงิน ${formatNumber(withdrawRequest.amount)} บาท เรียบร้อยแล้ว`
      withdrawAmount.value = ''

      // Refresh balance
      await fetchUserData()

      // Clear success message after 5 seconds
      setTimeout(() => {
        successMessage.value = ''
      }, 5000)
    } else {
      throw new Error('Withdrawal failed')
    }
  } catch (error) {
    console.error('Withdraw error:', error)
    errorMessage.value = 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง หรือติดต่อเจ้าหน้าที่'

    // Clear error message after 5 seconds
    setTimeout(() => {
      errorMessage.value = ''
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}

// Fetch user account data and balance
const fetchUserData = async () => {
  try {
    // TODO: Replace with actual API call
    const response = await fetch('/api/user/account')

    if (response.ok) {
      const data = await response.json()
      userAccount.value = {
        accountName: data.accountName || 'ไม่พบข้อมูล',
        accountNumber: data.accountNumber || 'ไม่พบข้อมูล',
        bankName: data.bankName || ''
      }
      userBalance.value = data.balance || 0
    } else {
      // Mock data for development
      userAccount.value = {
        accountName: 'ภาคภูมิ สุขงาม',
        accountNumber: '2482605355',
        bankName: 'ธนาคารกสิกรไทย'
      }
      userBalance.value = 0
    }
  } catch (error) {
    console.error('Failed to fetch user data:', error)
    // Use mock data on error
    userAccount.value = {
      accountName: 'ภาคภูมิ สุขงาม',
      accountNumber: '2482605355',
      bankName: 'ธนาคารกสิกรไทย'
    }
    userBalance.value = 0
  }
}

// Fetch data on component mount
onMounted(async () => {
  await fetchUserData()
})

// Set page metadata
useHead({
  title: 'ถอนเงิน - UFANANCE',
  meta: [
    { name: 'description', content: 'ถอนเงินจาก UFANANCE รวดเร็วภายใน 30 วินาที' }
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
  max-width: 600px;
  margin: 0 auto;
}

/* Credit Balance */
.mount-credit {
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.mount-credit a {
  text-decoration: none;
  color: white;
  display: block;
}

.fr_nmtx {
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 500;
}

.number-h {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Form Styles */
.fr_re {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 25px;
}

.fr_sec {
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.fr_tx2x {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
}

.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  transition: all 0.3s;
}

.form-control:focus {
  outline: none;
  border-color: #f3c31a;
  background: white;
}

.form-control.error {
  border-color: #ff4444;
}

.form-control[readonly] {
  background: rgba(255, 255, 255, 0.7);
  cursor: not-allowed;
}

/* Error Message */
.error-message {
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 5px;
  padding: 8px;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 5px;
  border-left: 3px solid #ff6b6b;
}

/* Submit Button */
.fr_submit_bk {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #f3c31a 0%, #ffd700 100%);
  border: none;
  border-radius: 8px;
  color: #1e3c72;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.fr_submit_bk:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.fr_submit_bk:active:not(:disabled) {
  transform: translateY(0);
}

.fr_submit_bk:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.fr_submit_bk i {
  margin-right: 8px;
}

/* Warning Box */
.warning-box {
  border: 2px solid #ce0000;
  border-radius: 8px;
  background-color: #ffdee4;
  padding: 15px;
  margin-top: 20px;
}

.w50 {
  font-size: clamp(14px, 1.5vw, 18px);
  font-weight: bold;
  width: 100%;
}

.timerange {
  color: #ce0000;
  text-decoration: none;
  display: block;
  line-height: 1.6;
}

.timerange i {
  margin-right: 8px;
}

/* Alert Messages */
.alert {
  padding: 15px 20px;
  border-radius: 8px;
  margin: 20px 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  animation: slideIn 0.3s ease;
}

.alert-success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .wrapper-c {
    padding: 10px;
  }

  .tt_content {
    padding: 20px 15px;
  }

  .title_page h1 {
    font-size: 1.5rem;
  }

  .number-h {
    font-size: 2rem;
  }

  .fr_re {
    padding: 20px 15px;
  }

  .fr_tx2x {
    font-size: 1rem;
  }

  .fr_submit_bk {
    font-size: 1.1rem;
    padding: 12px;
  }

  .w50 {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .title_page h1 {
    font-size: 1.3rem;
  }

  .number-h {
    font-size: 1.8rem;
  }

  .fr_nmtx {
    font-size: 1rem;
  }

  .mount-credit {
    padding: 15px;
  }
}
</style>
