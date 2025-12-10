<template>
  <div class="overview">
    <h2 class="overview-title">ภาพรวมรายได้แนะนำเพื่อน</h2>

    <div class="overview-grid">
      <div class="overview-box">
        <div class="overview-label">จำนวนเพื่อนที่แนะนำ</div>
        <div class="overview-value">0</div>
        <div class="overview-unit">ยูสเซอร์</div>
      </div>

      <div class="overview-box">
        <div class="overview-label">จำนวนเครดิตแนะนำสะสม</div>
        <div class="overview-value">0.00</div>
        <div class="overview-unit">บาท</div>
      </div>

      <div class="overview-box">
        <div class="overview-label">ยอดจ่ายแล้ว</div>
        <div class="overview-value">0.00</div>
        <div class="overview-unit">บาท</div>
      </div>

      <div class="overview-box">
        <div class="overview-label">ยอดคงเหลือ</div>
        <div class="overview-value highlight">0.00</div>
        <div class="overview-unit">บาท</div>
      </div>
    </div>

    <p class="overview-note">
      ** รายได้การช่วยแชร์ลิงก์แนะนำของท่านสามารถแจ้งถอนเงินได้ทุกเวลา
      หากมียอดรายได้มากกว่า 500 บาทขึ้นไป
    </p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.overview-title {
  font-size: 22px;
  margin-bottom: 14px;
  font-weight: bold;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 12px;
}

.overview-box {
  border-radius: 6px;
  border: 1px solid #eee;
  padding: 10px 12px;
  background: #fffdf0;
}

.overview-label {
  font-size: 18px;
  margin-bottom: 4px;
}

.overview-value {
  font-size: 26px;
  font-weight: 700;
}

.overview-value.highlight {
  color: #e6a300;
}

.overview-unit {
  font-size: 16px;
}

.overview-note {
  font-size: 14px;
  color: #555;
}

@media (max-width: 640px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }
}
</style>
