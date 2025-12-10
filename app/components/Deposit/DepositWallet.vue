<template>
  <div class="deposit-wallet-modal">
    <!-- ปุ่มปิด (ถ้าเอาไปใช้เป็น modal ก็จับ @close เอาเอง) -->
    <div class="modal-header">
      <button class="close-btn" @click="$emit('close')">x</button>
    </div>

    <!-- แถวเบอร์ / เครดิต -->
    <div class="summary-row">
      <div class="summary-block">
        <div class="summary-label">เบอร์ที่โอนเงินเข้า</div>
        <div class="summary-value highlight">
          {{ memberPhone }}
        </div>
      </div>

      <div class="summary-block">
        <div class="summary-label">ยอดเครดิตคงเหลือ</div>
        <div class="summary-value yellow">
          {{ formattedBalance }}
        </div>
      </div>
    </div>

    <!-- รูป true wallet -->
    <div class="wallet-logo-row">
      <img
        src="/img/Bank/truewallet.png"
        class="wallet-logo"
        alt="truewallet"
      />
    </div>

    <!-- เปิดใช้งาน true wallet -->
    <template v-if="enabled">
      <div class="info-row">
        เบอร์ที่ต้องทำรายการ :
        <span class="highlight">{{ walletPhone }}</span>
      </div>

      <div class="btn-row">
        <button class="btn-copy" type="button" @click="handleCopy">
          คัดลอกเบอร์
        </button>
      </div>

      <div class="amount-row">
        <span>ฝากเงิน :</span>
        <input
          v-model.number="amount"
          type="number"
          min="0"
          placeholder="ป้อนจำนวนเงิน"
          class="amount-input"
        />
        <button class="btn-confirm" type="button" @click="handleConfirm">
          ยืนยัน
        </button>
      </div>
    </template>

    <!-- ปิดระบบ true wallet -->
    <div v-else class="notice-row">
      ** ปิดปรับปรุงระบบ Truewallet ชั่วคราวติดตามข่าวสารได้ที่ @Line24hr ค่ะ **
    </div>

   
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    memberPhone?: string
    balance?: number
    walletPhone?: string
    enabled?: boolean
  }>(),
  {
    memberPhone: '091-234-5678',
    balance: 0,
    walletPhone: '091-000-0000',
    enabled: true
  }
)

defineEmits<{
  close: []
  'go-bank': []
}>()

const amount = ref<number | null>(null)

const formattedBalance = computed(() =>
  props.balance.toLocaleString('th-TH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
)

const handleCopy = async () => {
  if (!props.walletPhone) return

  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(props.walletPhone)
      alert('คัดลอกเบอร์แล้ว')
    } else {
      // fallback เผื่อ browser ไม่รองรับ
      const temp = document.createElement('input')
      temp.value = props.walletPhone
      document.body.appendChild(temp)
      temp.select()
      document.execCommand('copy')
      document.body.removeChild(temp)
      alert('คัดลอกเบอร์แล้ว')
    }
  } catch (e) {
    alert('คัดลอกไม่สำเร็จ')
  }
}

const handleConfirm = () => {
  if (!amount.value || amount.value <= 0) {
    alert('กรุณากรอกจำนวนเงินให้ถูกต้อง')
    return
  }

  // mockup: แค่แสดง alert แทนการยิง API
  alert(`ทำรายการฝาก TrueWallet จำนวน ${amount.value.toFixed(2)} บาท (mockup)`)
}
</script>

<style scoped>
.deposit-wallet-modal {
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 6px;
  padding: 16px 20px 24px;
  max-width: 870px;
  margin: 0 auto;
}

.modal-header {
  display: flex;
  justify-content: flex-end;
}

.close-btn {
  background: transparent;
  border: none;
  color: #f1c40f;
  font-size: 20px;
  cursor: pointer;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
  gap: 16px;
  flex-wrap: wrap;
}

.summary-block {
  flex: 1 1 200px;
}

.summary-label {
  text-align: center;
  font-size: 18px;
  margin-bottom: 4px;
}

.summary-value {
  text-align: center;
  font-size: 18px;
}

.summary-value.highlight {
  color: #f1c40f;
}

.summary-value.yellow {
  color: #ffd54f;
  font-size: 22px;
}

.wallet-logo-row {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.wallet-logo {
  max-width: 220px;
  border-radius: 4px;
}

.info-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  font-size: 18px;
}

.highlight {
  color: #f1c40f;
  margin-left: 4px;
}

.btn-row {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}

.btn-copy {
  padding: 6px 16px;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  background: #f1c40f;
  color: #000;
  cursor: pointer;
}

.amount-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 20px;
}

.amount-input {
 width: 180px;
  padding: 10px 12px;
  background: #111;
  border: 1px solid #555;
  color: #fff;
  font-size: 16px;
  border-radius: 6px;
   font-family: 'ThaiSansLite', 'thaisanslite_r1', 'thaisanslite', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.btn-confirm {
   background: #ffc400;
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  font-family: 'ThaiSansLite', 'thaisanslite_r1', 'thaisanslite', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
font-size: 18px;
}

.notice-row {
  text-align: center;
  font-size: 12px;
  color: #ff7675;
  margin-bottom: 16px;
}

.bank-button-row {
  display: flex;
  justify-content: center;
}

.btn-bank {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background: #f1c40f;
  color: #000;
  font-size: 18px;
}

.btn-bank .icon {
  font-size: 18px;
}
</style>
