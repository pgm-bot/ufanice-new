<template>
  <div class="bank-box">
    <h2 class="title">บัญชีธนาคารสำหรับฝากเงิน</h2>

    <div class="min-deposit">ฝากขั้นต่ำ 1 บาท</div>

    <div class="bank-logo">
      <img :src="`/img/Bank/select/${bankMock.bankType}.png`" width="220" />
    </div>

    <div class="bank-info">
      <div>
        <div class="label">เลขบัญชี</div>
        <div class="value">{{ bankMock.number }}</div>
      </div>

      <div>
        <div class="label">ชื่อบัญชี</div>
        <div class="value">{{ bankMock.name }}</div>
      </div>
    </div>

    <button class="btn-copy" @click="copy(bankMock.number)">
      คัดลอกเลขบัญชี
    </button>

    <div class="warning">
      ชื่อบัญชีต้องตรงกับบัญชีถอน  
      <br>ระบบจะจับคู่ยอดเงินอัตโนมัติ
    </div>

    <h3 class="title small">บัญชีของคุณ</h3>

    <table class="bank-table">
      <tr>
        <th>ธนาคาร</th>
        <th>ชื่อบัญชี</th>
        <th>เลขบัญชี</th>
      </tr>
      <tr>
        <td>{{ user.bank }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.number }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
const bankMock = {
  bankType: "scb",
  number: "123-456-7890",
  name: "นายทดสอบ ระบบ"
}

const user = {
  bank: "SCB",
  name: "USER TEST",
  number: "888-999-0000"
}

const copy = (text: string) => {
  navigator.clipboard.writeText(text)
  alert("คัดลอกแล้ว")
}
</script>

<style scoped>
.bank-box {
  background: rgba(0,0,0,0.75);
  color: #fff;
  padding: 30px;
  border-radius: 10px;
  font-size: 22px; /* ← เพิ่มฐานฟอนต์ใหญ่ขึ้นทั้งกล่อง */
}

.title {
  text-align: center;
  font-size: 28px; /* ↑ ใหญ่ขึ้นเยอะ */
  font-weight: 900;
  margin-bottom: 15px;
}

.title.small {
  font-size: 22px;
  margin-top: 30px;
}

.min-deposit {
  text-align: center;
  color: #ffca00;
  font-size: 22px;
  margin-bottom: 25px;
  font-weight: bold;
}

.bank-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.bank-info {
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
}

.label {
  font-size: 20px;
  opacity: 0.8;
}

.value {
  font-size: 28px; /* ตัวเลขบัญชีใหญ่พิเศษ */
  font-weight: bold;
}

.btn-copy {
  display: block;
  margin: 15px auto 25px;
  padding: 14px 30px;
  background: #ffc400;
  border: none;
  font-size: 22px;
  font-weight: 700;
  color: #000;
  border-radius: 6px;
  cursor: pointer;
}

.warning {
  text-align: center;
  color: #ff8888;
  font-size: 20px;
  margin-bottom: 25px;
  line-height: 1.6;
}

.bank-table {
  width: 100%;
  border-collapse: collapse;
  background: #222;
  color: #fff;
  font-size: 22px;
}

.bank-table th {
  background: #ffc400;
  color: #000;
  padding: 14px;
  font-size: 24px;
}

.bank-table td {
  padding: 14px;
  text-align: center;
  font-size: 22px;
}

</style>
