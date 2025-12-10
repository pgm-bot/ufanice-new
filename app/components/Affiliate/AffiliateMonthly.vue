<template>
  <div class="monthly">
    <h2 class="monthly-title">รายได้ที่รับแล้ว</h2>

    <div class="monthly-filter">
      <span>เดือนที่ต้องการดูรายได้ :</span>
      <select v-model="selectedMonth">
        <option value="2025-12">ธันวาคม 2025</option>
        <option value="2025-11">พฤศจิกายน 2025</option>
        <option value="2025-10">ตุลาคม 2025</option>
      </select>
    </div>

    <p class="monthly-note">
      วันที่รับรายได้เดือนล่าสุด: <span class="highlight">ไม่มีวันที่รับรายได้</span>
    </p>

    <div class="table-wrapper">
      <table class="aff-table">
        <thead>
          <tr>
            <th>วันที่ (Y-M-D)</th>
            <th>จำนวนเงิน</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td class="empty">คุณยังไม่มีรายการรับรายได้ในเดือนนี้</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedMonth = ref('2025-12')
</script>

<style scoped>
.monthly-title {
  font-size: 20px;
  margin-bottom: 8px;
  font-weight: bold;
}

.monthly-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  font-size: 16px;
  margin-bottom: 8px;
}

.monthly-filter select {
  padding: 4px 8px;
  font-size: 16px;
  font-family: 'thaisanslite_r1', sans-serif;
}

.monthly-note {
  font-size: 16px;
  margin-bottom: 10px;
}

.monthly-note .highlight {
  color: #e53935;
}

.table-wrapper {
  overflow-x: auto;
}

.aff-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.aff-table thead {
  background: #ffe082;
}

.aff-table th,
.aff-table td {
  padding: 8px 10px;
  border-bottom: 1px solid #eee;
}

.aff-table .empty {
  color: #777;
}
</style>
