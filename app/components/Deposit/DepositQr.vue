<template>
  <div class="deposit-qr-container">
    <div class="qr-wrapper">
      <h2 class="qr-title">ฝากเงินผ่านระบบ QR Payment</h2>

      <!-- ขั้นตอนแรก: ป้อนจำนวนเงิน -->
      <template v-if="process === 'off'">
        <div class="qr-info-box">
          <img src="/img/Bank/qrpayment.png" class="qr-img" alt="QR Payment" />

          <p class="qr-warning">
            หมายเหตุ<br />
            - กรุณาใช้ QR Code ใหม่ทุกครั้ง หากใช้ซ้ำยอดจะไม่เข้า<br />
            - กรุณาใช้ “บัญชีที่สมัคร” ในการโอนเท่านั้น<br />
            - งดการทำรายการช่วงเวลา 22.50 - 02.00 น.
          </p>

          <p class="qr-step">กรุณากรอกยอดเงินที่ท่านต้องการฝาก</p>

          <div class="qr-input-row">
            ฝากเงิน:
            <input type="number" v-model="amount" placeholder="ป้อนจำนวนเงิน" />
            <button class="qr-confirm" @click="generateQR">ยืนยัน</button>
          </div>
        </div>
      </template>

      <!-- แสดง QR -->
      <template v-else>
        <div class="qr-title-box">QR Payment<br />สแกนเพื่อชำระเงิน</div>

        <img :src="imgQRCode" class="qr-code-img" alt="QRCode" />

        <div class="qr-info-display">
          ยอดเงิน: {{ realamount }} บาท<br />
          เวลาที่ต้องทำรายการก่อน: <br />
          {{ datetime }}
        </div>

        <button class="qr-save-btn" @click="saveImage">
          บันทึกภาพ QR Code
        </button>

        <div class="qr-note">
          <p>หมายเหตุ</p>
          <ul>
            <li>
              หากต้องการเปลี่ยนยอดหรือยกเลิก กรุณากด
              <u class="click-cancel" @click="cancelProcess">ยกเลิก</u>
            </li>
            <li>
              วิธีบันทึกรูป QR Code:
              <u class="click-cancel" @click="howToSave">คลิก</u>
            </li>
            <li>กรุณาใช้บัญชีที่ท่านสมัครโอนมาเท่านั้น</li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
// Mockup state
const amount = ref<number | null>(null)
const realamount = ref('')
const imgQRCode = ref('')
const datetime = ref('')
const process = ref<'off' | 'on'>('off')

// กด "ยืนยัน" เพื่อสร้าง QR แบบ mockup
const generateQR = () => {
  if (!amount.value || amount.value <= 0) {
    alert('กรุณากรอกจำนวนเงินที่ถูกต้อง')
    return
  }

  realamount.value = amount.value.toFixed(2)
  imgQRCode.value = '/img/sample-qr.png' // mockup QR
  datetime.value = new Date(Date.now() + 5 * 60000).toLocaleString() // +5 นาที
  process.value = 'on'
}

// เซฟภาพ QR
const saveImage = () => {
  const link = document.createElement('a')
  link.href = imgQRCode.value
  link.download = 'qrcode.png'
  link.click()
}

// ยกเลิก
const cancelProcess = () => {
  if (confirm('ต้องการยกเลิกการทำรายการหรือไม่ ?')) {
    process.value = 'off'
    amount.value = null
  }
}

// วิธีบันทึกภาพ
const howToSave = () => {
  alert('กดค้างที่รูป QR Code → เลือกบันทึกรูปภาพ')
}
</script>

<style scoped>
.deposit-qr-container {
  /* display: flex; */
  /* justify-content: center; */
  /* padding: 40px 12px; */
  width: 100%;
  max-width: 870px;
}

.qr-wrapper {
  background: rgba(0, 0, 0, 0.7);
  padding: 24px 32px;
  border-radius: 10px;
  /* max-width: 480px; */
  width: 100%;
  color: #fff;
  text-align: center;
}

.qr-title {
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: bold;
}

.qr-info-box {
  margin-bottom: 20px;
}

.qr-img {
  width: 220px;
  margin: 0 auto 12px;
}

.qr-warning {
  color: #ff4d4d;
  font-size: 16px;
  margin-bottom: 12px;
}

.qr-step {
  margin: 12px 0;
  font-size: 18px;
}

.qr-input-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 18px;
}

.qr-input-row input {
  width: 180px;
  padding: 10px 12px;
  background: #111;
  border: 1px solid #555;
  color: #fff;
  font-size: 16px;
  border-radius: 6px;
   font-family: 'ThaiSansLite', 'thaisanslite_r1', 'thaisanslite', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.qr-confirm {
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

.qr-title-box {
  background: #103e68;
  padding: 8px 0;
  border-radius: 8px 8px 0 0;
  margin-bottom: 16px;
  font-size: 20px;
}

.qr-code-img {
  width: 240px;
  height: auto;
  margin-bottom: 14px;
}

.qr-info-display {
  background: #103e68;
  padding: 10px;
  border-radius: 0 0 8px 8px;
  margin-bottom: 18px;
}

.qr-save-btn {
  background: #00fd15;
  color: #000;
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 12px;
  cursor: pointer;
}

.qr-note {
  font-size: 16px;
  text-align: left;
}

.click-cancel {
  color: #ff4d4d;
  cursor: pointer;
}
</style>
