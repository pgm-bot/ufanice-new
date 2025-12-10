<template>
  <div class="registered">
    <h2 class="registered-title">ยูสเซอร์ที่สมัครจากลิงก์ของคุณ</h2>
    <p class="registered-desc">
      * แสดงข้อมูลล่าสุดไม่เกิน 50 ยูสเซอร์
    </p>

    <div class="table-wrapper">
      <table class="aff-table">
        <thead>
          <tr>
            <th>วันที่สมัคร (Y-M-D)</th>
            <th>ยูสเซอร์เนม</th>
            <th>เติมเงินมาแล้ว</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3" class="empty-row">
              ยังไม่มีผู้ใช้งานที่สมัคร
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.registered-title {
  font-size: 20px;
  margin-bottom: 4px;
}

.registered-desc {
  font-size: 16px;
  margin-bottom: 10px;
}

.table-wrapper {
  overflow-x: auto;
}

.aff-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
}

.aff-table thead {
  background: #ffe082;
}

.aff-table th,
.aff-table td {
  padding: 8px 10px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

.empty-row {
  text-align: center;
  color: #777;
}
</style>
