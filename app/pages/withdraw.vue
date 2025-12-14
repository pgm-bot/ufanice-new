<template>
  <div>
    <Header />
    <HeadMobile />

    <div class="withdraw-page">
      <div class="withdraw-card">
        <!-- Title -->
        <div class="withdraw-title-bar">
          <h1>ถอนเงินผ่านธนาคาร</h1>
        </div>

        <!-- Tabs -->
        <div class="withdraw-tabs">
          <button class="tab-btn active">
            ถอนเงินผ่านธนาคาร
          </button>
          <button class="tab-btn disabled">
            ถอนคริปโต
          </button>
        </div>

        <!-- Balance -->
        <div class="balance-box">
          <div class="balance-label">ยอดเครดิตคงเหลือ</div>
          <div class="balance-amount">{{ formatNumber(userBalance) }}</div>
        </div>

        <!-- Form -->
        <form class="withdraw-form" @submit.prevent="handleSubmit">
          <!-- ชื่อบัญชี -->
          <div class="field-row">
            <div class="field-label">ชื่อบัญชี</div>
            <div class="field-input readonly">
              {{ userAccount.accountName || '-' }}
            </div>
          </div>

          <!-- ธนาคาร -->
          <div class="field-row">
            <div class="field-label">โอนเข้าธนาคาร</div>
            <div class="field-input readonly">
              {{ userAccount.bankName || '-' }}
            </div>
          </div>

          <!-- เลขบัญชี -->
          <div class="field-row">
            <div class="field-label">เลขบัญชี</div>
            <div class="field-input readonly">
              {{ userAccount.accountNumber || '-' }}
            </div>
          </div>

          <!-- จำนวนเงิน -->
          <div class="field-row">
            <div class="field-label">จำนวนเงิน</div>
            <div class="field-input">
              <input
                v-model="withdrawAmount"
                id="amount_"
                class="amount-input"
                type="text"
                placeholder="ถอนขั้นต่ำ 300 บาท สูงสุด 500,000 บาท"
                maxlength="9"
                name="amount"
                required
                @input="validateAmount"
                :class="{ error: amountError }"
              />
            </div>
          </div>
          <div v-if="amountError" class="error-message">
            {{ amountError }}
          </div>

          <!-- ปุ่มแจ้งถอน -->
          <button
            type="submit"
            class="btn-withdraw"
            :disabled="isSubmitting || isMaintenanceTime"
          >
            <i class="fas fa-hand-holding-usd"></i>
            {{ isSubmitting ? 'กำลังดำเนินการ...' : 'แจ้งถอนเงิน' }}
          </button>

          <!-- กล่องแจ้งเวลาปิดระบบ -->
          <div class="maintenance-box">
            <i class="fa fa-times" aria-hidden="true"></i>
            ระบบถอนเงิน ปิดทำการ ช่วงเวลา 22:50 - 00:30 น.
            ลูกค้าที่แจ้งถอนเข้ามาแล้วรบกวนรอยอดเข้าหลัง 00.30 น.
            ขออภัยในความไม่สะดวกทุกประการค่ะ
          </div>
        </form>

        <!-- ข้อความสำเร็จ / ผิดพลาด -->
        <div v-if="successMessage" class="alert alert-success">
          <i class="fas fa-check-circle"></i> {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="alert alert-error">
          <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
        </div>

        <!-- ที่ว่างไว้ใส่ประวัติภายหลัง -->
        <!-- <table id="res__" class="history-table"></table> -->
      </div>
    </div>

    <Footer />
    <FixedFooter />
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

// state
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

// ช่วงปิดระบบ 22:50 - 00:30
const isMaintenanceTime = computed(() => {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const currentTime = hours * 60 + minutes

  const maintenanceStart = 22 * 60 + 50 // 22:50
  const maintenanceEnd = 0 * 60 + 30 // 00:30

  if (currentTime >= maintenanceStart || currentTime <= maintenanceEnd) return true
  return false
})

// validate จำนวนเงิน
const validateAmount = () => {
  const value = withdrawAmount.value
  const cleaned = value.replace(/[^\d.]/g, '')
  withdrawAmount.value = cleaned
  amountError.value = ''

  if (!value) return

  if (!/^\d+(\.\d{0,2})?$/.test(cleaned)) {
    amountError.value = 'กรุณาใส่ตัวเลขเท่านั้น'
    return
  }

  const amount = parseFloat(cleaned)

  if (amount < 300) {
    amountError.value = 'จำนวนเงินขั้นต่ำ 300 บาท'
    return
  }

  if (amount > 500000) {
    amountError.value = 'ถอนได้สูงสุด 500,000 บาทต่อครั้ง'
    return
  }

  if (amount > userBalance.value) {
    amountError.value = 'ยอดเงินไม่เพียงพอ'
    return
  }
}

// format number
const formatNumber = (num: number): string => {
  return num.toLocaleString('th-TH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

// submit
const handleSubmit = async () => {
  validateAmount()
  if (amountError.value || !withdrawAmount.value) return

  if (isMaintenanceTime.value) {
    errorMessage.value =
      'ระบบปิดทำการในช่วงเวลา 22:50 - 00:30 น. กรุณาทำรายการใหม่ภายหลัง'
    setTimeout(() => (errorMessage.value = ''), 5000)
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

    // TODO: เปลี่ยนเป็น API จริง
    const response = await fetch('/api/withdraw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(withdrawRequest)
    })

    if (response.ok) {
      successMessage.value = `แจ้งถอนเงิน ${formatNumber(
        withdrawRequest.amount
      )} บาท เรียบร้อยแล้ว`
      withdrawAmount.value = ''
      await fetchUserData()
      setTimeout(() => (successMessage.value = ''), 5000)
    } else {
      throw new Error('Withdrawal failed')
    }
  } catch (e) {
    console.error(e)
    errorMessage.value =
      'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง หรือติดต่อเจ้าหน้าที่'
    setTimeout(() => (errorMessage.value = ''), 5000)
  } finally {
    isSubmitting.value = false
  }
}

// mock / โหลดข้อมูลผู้ใช้
const fetchUserData = async () => {
  try {
    const response = await fetch('/api/user/account')
    if (response.ok) {
      const data = await response.json()
      userAccount.value = {
        accountName: data.accountName || 'ไม่พบข้อมูล',
        accountNumber: data.accountNumber || 'ไม่พบข้อมูล',
        bankName: data.bankName || ''
      }
      userBalance.value = data.balance || 0
      return
    }
  } catch (e) {
    console.error('Failed to fetch user data:', e)
  }

  // mock กรณีไม่มี API
  userAccount.value = {
    accountName: 'ภาคภูมิ สุขงาม',
    accountNumber: '2482605355',
    bankName: 'ไทยพาณิชย์'
  }
  userBalance.value = 0
}

onMounted(async () => {
  await fetchUserData()
})

useHead({
  title: 'ถอนเงิน - UFANICE',
  meta: [
    {
      name: 'description',
      content: 'ถอนเงินจาก UFANICE รวดเร็วภายใน 30 วินาที'
    }
  ]
})
</script>

<style scoped>
.withdraw-page {
  min-height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
  padding: 30px 12px 50px;
  background: #f5f5f5; /* พื้นหลังเทาอ่อน */
}

/* กล่องหลัก */
.withdraw-card {
  width: 100%;
  max-width: 870px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.08);
  padding: 26px 30px;
  color: #333;
  font-family: 'thaisanslite_r1','ThaiSansLite', sans-serif;
}

/* Title */
.withdraw-title-bar {
  text-align: center;
  margin-bottom: 20px;
}

.withdraw-title-bar h1 {
  font-size: 28px;
  font-weight: 700;
  color: #000;
}

/* Tabs */
.withdraw-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 22px;
}

.tab-btn {
  flex: 1;
  max-width: 220px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  border: 2px solid #f1c40f;
  cursor: pointer;
  background: #fff;
  color: #000;
}

.tab-btn.active {
  background: #f8d347; /* เหลืองทอง */
  color: #000;
  border-color: #f5c000;
}

.tab-btn.disabled {
  background: #eee;
  color: #aaa;
  border-color: #ddd;
  cursor: default;
}

/* Balance Box */
.balance-box {
  background: #fdf3c6;
  border: 2px solid #f7d665;
  border-radius: 8px;
  padding: 20px 15px;
  text-align: center;
  margin-bottom: 25px;
}

.balance-label {
  font-size: 20px;
  font-weight: 600;
  color: #444;
}

.balance-amount {
  font-size: 40px;
  font-weight: 700;
  color: #000;
  margin-top: 8px;
}

/* Form */
.field-row {
  display: flex;
  margin-bottom: 16px;
}

.field-label {
  width: 28%;
  min-width: 130px;
  background: #fff7df;
  border: 1px solid #f5d47b;
  color: #333;
  padding: 12px 16px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 6px 0 0 6px;
}

.field-input {
  flex: 1;
  background: #fff;
  border: 1px solid #ddd;
  border-left: none;
  border-radius: 0 6px 6px 0;
  display: flex;
  align-items: center;
}

.field-input.readonly {
  padding: 12px 16px;
  font-size: 18px;
  color: #111;
}

/* input */
.amount-input {
  width: 100%;
  padding: 12px 16px;
  border: none;
  font-size: 18px;
  outline: none;
  color: #333;
}

.amount-input.error {
  box-shadow: inset 0 0 0 2px #ff4d4d;
}

/* Error */
.error-message {
  color: #ff3b3b;
  font-size: 15px;
  margin-top: -10px;
  margin-bottom: 15px;
}

/* ปุ่มถอนเงิน */
.btn-withdraw {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 6px;
  background: linear-gradient(180deg, #ffe680 0%, #f5c10a 50%, #dca406 100%);
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #000;
  margin-top: 10px;
}

.btn-withdraw:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Maintenance */
.maintenance-box {
  margin-top: 18px;
  padding: 14px 16px;
  border-left: 4px solid #ff0000;
  background: #ffe5e5;
  color: #900;
  line-height: 1.6;
  font-size: 16px;
  border-radius: 6px;
}

.maintenance-box i {
  margin-right: 6px;
}

/* Alerts */
.alert {
  margin-top: 20px;
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.alert-success {
  background: #e8ffe8;
  border: 1px solid #8fdd8f;
  color: #0f7a0f;
}

.alert-error {
  background: #ffe5e5;
  border: 1px solid #ff7878;
  color: #a30000;
}

/* Responsive */
@media (max-width: 640px) {
  .field-row {
    flex-direction: column;
  }

  .field-label {
    border-radius: 6px 6px 0 0;
  }

  .field-input {
    border-radius: 0 0 6px 6px;
  }
}

</style>
