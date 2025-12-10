<template>
  <div class="withdraw">
    <h2 class="withdraw-title">ถอนรายได้แนะนำเพื่อน</h2>

    <div class="withdraw-summary">
      <div class="withdraw-label">ยอดรายได้ที่สามารถถอนได้ตอนนี้</div>
      <div class="withdraw-amount">0.00 บาท</div>
      <p class="withdraw-note">
        ยอดขั้นต่ำ 500 บาท ถึงจะสามารถกดถอนรายได้เข้ากระเป๋าเครดิตได้
      </p>
    </div>

    <button type="button" class="withdraw-btn" disabled>
      โอนยอดแนะนำเพื่อน
    </button>

    <p class="withdraw-info">
      * เมื่อกดโอนยอด ระบบจะโอนยอดรายได้เข้ากระเป๋าเครดิตหลักของคุณโดยอัตโนมัติ
      <br>
      * ปัจจุบันยอดคงเหลือยังไม่ถึงขั้นต่ำ 500 บาท
    </p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.withdraw-title {
  font-size: 20px;
  margin-bottom: 12px;
    font-weight: bold;
}

.withdraw-summary {
  border-radius: 6px;
  border: 1px solid #ffe082;
  padding: 12px 14px;
  background: #fffdf0;
  margin-bottom: 14px;
}

.withdraw-label {
  font-size: 18px;
  margin-bottom: 4px;
    font-weight: bold;
}

.withdraw-amount {
  font-size: 26px;
  font-weight: 700;
  color: #e6a300;
}

.withdraw-note {
  font-size: 16px;
  color: #555;
  margin-top: 4px;
}

.withdraw-btn {
  display: inline-block;
  border: none;
  border-radius: 4px;
  padding: 10px 28px;
  font-size: 16px;
  cursor: not-allowed;
  background: #ffc400;
  color: #000;
  margin-bottom: 10px;
  font-family: 'thaisanslite_r1', sans-serif;
  font-weight: bold;
}

.withdraw-info {
  font-size: 16px;
  color: #555;
}
</style>
