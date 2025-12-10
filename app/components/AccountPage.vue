<template>
  <div class="account-wrapper">

    <!-- หัวข้อใหญ่ -->
    <!-- <h1 class="page-title">ข้อมูลบัญชี</h1> -->

    <div class="account-container">
      
      <!-- ซ้าย : ข้อมูลผู้ใช้ -->
      <div class="account-box">
        <div class="box-title">ข้อมูลบัญชีผู้ใช้</div>

        <div class="info-row" v-for="(v, k) in infoList" :key="k">
          <span class="info-label">{{ k }} :</span>
          <span class="info-value">{{ v }}</span>
        </div>
      </div>

      <!-- ขวา : เปลี่ยนรหัสผ่าน -->
      <div class="account-box">
        <div class="box-title">เปลี่ยนรหัสผ่าน</div>

        <label class="form-label">รหัสผ่านเดิม</label>
        <input v-model="oldPassword" class="form-input" type="password" placeholder="รหัสผ่านเดิม">

        <label class="form-label">รหัสผ่านใหม่</label>
        <input v-model="newPassword" class="form-input" type="password" placeholder="รหัสผ่านใหม่ (8-15 ตัวอักษร)">

        <label class="form-label">ยืนยันรหัสผ่านใหม่</label>
        <input v-model="confirmPassword" class="form-input" type="password" placeholder="ยืนยันรหัสผ่านใหม่">

        <button class="btn-submit" @click="updatePw">ทำรายการ</button>

        <div class="pw-note">
          * รหัสผ่านต้องมี 8-15 ตัวอักษร<br>
          * ต้องมีตัวเลข ตัวอักษร และสัญลักษณ์ผสมกัน<br>
          * ห้ามใช้ชื่อจริงหรือชื่อเข้าใช้งานเป็นส่วนหนึ่งของรหัสผ่าน
        </div>
      </div>
    </div>

    <!-- ปุ่มเข้าเล่น -->
    <!-- <div class="play-wrapper">
      <button class="play-btn">เล่นเดี๋ยวนี้</button>
    </div> -->

  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  userData: Object
})

const oldPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const infoList = computed(() => ({
  'ยูสเซอร์เนมสำหรับเข้า UFA': props.userData?.ufaUsername || '-',
  'รหัสผ่านสำหรับเข้า UFA': props.userData?.ufaPassword || '-',
  'ยูสเซอร์เนม': props.userData?.username || '-',
  'ชื่อ - นามสกุล': props.userData?.fullName || '-',
  'เบอร์โทรศัพท์': props.userData?.phone || '-',
  'หมายเลขบัญชี': props.userData?.accountNumber || '-',
  'ธนาคาร': props.userData?.bankName || '-',
  'LINE': props.userData?.lineId || '-',
  'วันเกิด': props.userData?.birthday || 'ยังไม่ได้ระบุ',
  'ยอดเงินคงเหลือ': props.userData?.credit?.toFixed(2) || '0.00'
}))

const updatePw = () => {
  if (!oldPassword.value || !newPassword.value || !confirmPassword.value) {
    alert('กรุณากรอกข้อมูลให้ครบ')
    return
  }
  if (newPassword.value !== confirmPassword.value) {
    alert('รหัสผ่านไม่ตรงกัน')
    return
  }
  alert('อัพเดทรหัสผ่านสำเร็จ')
}
</script>

<style scoped>
/* ===================== GLOBAL ===================== */
.account-wrapper {
  padding: 60px 0 60px 0 ;
  max-width: 1100px;
  margin: auto;
  font-family: thaisanslite_r1;
  color: #000;
}

.page-title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 25px;
}

/* ===================== CONTAINER ===================== */
.account-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

/* ===================== BOX ===================== */
.account-box {
  background: #fff;
  border-radius: 10px;
  border: 1px solid #d7d7d7;
  padding: 20px 25px;
  flex: 1 1 48%;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.box-title {
  font-size: 20px;
  font-weight: bold;
  background: #ffc400;
  padding: 10px 15px;
  border-radius: 6px;
  margin-bottom: 15px;
}

/* ===================== INFO ROW ===================== */
.info-row {
  display: flex;
  margin: 6px 0;
  font-size: 18px;
}

.info-label {
  width: 180px;
  color: #444;
}

.info-value {
  font-weight: bold;
  color: #000;
}

/* ===================== FORM INPUTS ===================== */
.form-label {
  font-size: 17px;
  margin-top: 10px;
  display: block;
}

.form-input {
  width: 100%;
  margin: 5px 0 12px;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #bebebe;
  font-size: 18px;
  background: #fafafa;
    font-family: 'ThaiSansLite', 'thaisanslite_r1', 'thaisanslite', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.btn-submit {
  width: 100%;
  margin-top: 10px;
  background: #ffc400;
  color: #000;
  font-size: 20px;
  padding: 10px 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
 font-family: 'ThaiSansLite', 'thaisanslite_r1', 'thaisanslite', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.btn-submit:hover {
  filter: brightness(1.1);
}

.pw-note {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
}

/* ===================== PLAY BUTTON ===================== */
.play-wrapper {
  text-align: center;
  margin-top: 25px;
}

.play-btn {
  background: #ffc400;
  color: #000;
  padding: 14px 40px;
  font-size: 26px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.play-btn:hover {
  filter: brightness(1.1);
}

/* ===================== RESPONSIVE ===================== */
@media (max-width: 768px) {
  .account-box {
    flex: 1 1 100%;
  }
  .info-label {
    width: 150px;
  }
  .info-row {
    font-size: 16px;
  }
}
</style>
