<template>
  <div v-if="visible" class="deposit-modal-overlay" @click.self="close">
    <div class="deposit-modal">
      <button class="deposit-modal-close" @click="close">✕</button>

      <h2 class="deposit-modal-title">ทางเลือกการฝากเงิน</h2>

      <div class="deposit-method-list">

        <button class="deposit-method-row" @click="select('crypto')">
          <div class="method-inner">
            <img src="/img/Bank/crypto.png" class="method-img" />
            <span class="method-text">ฝากเงินผ่าน CryptoCurrency</span>
          </div>
        </button>

        <button class="deposit-method-row" @click="select('bank')">
          <div class="method-inner">
            <img src="/img/Bank/scb-1.jpg" class="method-img" />
            <span class="method-text">ฝากเงินผ่านธนาคาร</span>
          </div>
        </button>

        <button class="deposit-method-row" @click="select('qr')">
          <div class="method-inner">
            <img src="/img/Bank/qrpayment.png" class="method-img" />
            <span class="method-text">ฝากเงินผ่าน QRPayment</span>
          </div>
        </button>

        <button class="deposit-method-row" @click="select('wallet')">
          <div class="method-inner">
            <img src="/img/Bank/truewallet.png" class="method-img" />
            <span class="method-text">ฝากเงินผ่านทรูวอลเล็ท</span>
          </div>
        </button>

      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'select', method: 'bank' | 'qr' | 'wallet' | 'crypto'): void
}>()

const close = () => {
  emit('close')
}

const select = (method: 'bank' | 'qr' | 'wallet' | 'crypto') => {
  emit('select', method)
}
</script>

<style scoped>
.deposit-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  font-weight: bold;
  
   font-family: 'ThaiSansLite', 'thaisanslite_r1', 'thaisanslite', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.deposit-modal {
  background: #050505;
  padding: 35px 35px 35px ;
  border-radius: 10px;
  min-width: 330px;
  max-width: 420px;
  position: relative;
  border: 1px solid rgba(255, 204, 0, 0.4);
}

.deposit-modal-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
}

.deposit-modal-close {
  position: absolute;
  top: 8px;
  right: 10px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
}

.deposit-method-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* ปุ่มทองไล่สี */
.deposit-method-row {
  background: linear-gradient(90deg, #ffdd75, #ffc400, #f5a300);
  border-radius: 6px;
  border: none;
  cursor: pointer;
  padding: 0;
  /* height: 60px; */
  display: flex;
  align-items: center;
  transition: 0.15s ease;
  padding-right: 16px;
}

.deposit-method-row:hover {
  filter: brightness(1.03);
  transform: translateY(-1px);
}

.method-inner {
  display: flex;
  align-items: center;
  width: 100%;
  /* padding: 0 15px; */
}

/* รูป 120 × 50 บูบี้ได้ และชิดปุ่มซ้าย */
.method-img {
  width: 145px;
  height: 50px;
  object-fit: cover;   /* ยอมบูบี้ */
  margin-right: 15px;  /* ชิดปุ่มตามต้องการ */
  border-radius:  6px 0 0 6px   ;
}

/* ข้อความ */
.method-text {
  flex: 1;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  color: #000;
  font-family: 'ThaiSansLite', 'thaisanslite_r1', 'thaisanslite', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

</style>
