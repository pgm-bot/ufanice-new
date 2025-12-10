<template>
  <div>
    <HeadMobile />
    <Header />

    <!-- พื้นหลังขาวครอบทั้งหมด -->
    <div class="cashback-wrapper">

      <div class="cashback-page">
        <!-- กล่องใหญ่ด้านบน -->
        <section class="cashback-top-card">
          <h2 class="title">
            รับเงินคืนฟรี ทันทีทุกวัน 
            <span class="rate">{{ cashbackData.cashbackRate }}%</span>
          </h2>

          <div class="row-amount">
            <span>จำนวนเงินคืน :</span>
            <span class="amount">{{ formatCurrency(cashbackData.totalAmount) }} บาท</span>
          </div>

          <p class="update-time">
            ยอดเงินจะอัพเดทอัตโนมัติ เวลา 
            <span class="red">{{ cashbackData.lastUpdateTime }} น.</span> ของทุกวัน
          </p>

          <p class="detail-text">
            รับเงินคืน <span class="rate">{{ cashbackData.cashbackRate }}%</span> ฟรี ทุกยอดการแทง  
            <br />
            <strong class="u">สุดยอดโปรโมชั่น รับเงินคืนฟรี ทั้งวัน ไม่อั้น ไม่ติดเทิร์น</strong>
            <br />
            ง่าย ๆ เพียงเดิมพันออนไลน์ ยิ่งเล่นยิ่งได้ ได้แบบฟรี ๆ ไม่มีข้อแม้
          </p>

          <button
            class="btn-transfer"
            :class="{ disabled: !canTransfer }"
            @click="transferToCredit"
          >
            โอนเงินเข้าเครดิต
          </button>

          <p class="note">
            * ยอดขั้นต่ำ {{ cashbackData.minimumAmount }} บาท จึงจะโอนเข้าเครดิตได้
          </p>
        </section>

        <!-- รูปภาพใหญ่ -->
        <section class="cashback-img-wrap">
          <img src="/img/allpage/cashback.jpg" class="cashback-img" />
        </section>

        <!-- รายละเอียดล่าง -->
        <section class="cashback-description">
          <h2 class="desc-title">** การคำนวนรายได้ที่ท่านจะได้รับ</h2>

          <p>
            เล่นบาคาร่าสด<br>
            แทง Player 1,000,000 บาท → มียอดเดิมพัน 1,000,000 บาท
          </p>

          <p>
            แทง Player อีกครั้ง 1,000,000 บาท ผล Banker ชนะ → มียอดเดิมพัน 1,000,000 บาท  
            <br>รวมทั้งหมด = <strong>2,000,000 บาท</strong>
          </p>

          <p>
            ท่านจะได้รับเงินคืน <strong>0.3%</strong> ของยอดเดิมพัน 2,000,000  
            <br>รายได้ที่จะได้รับคือ <strong>6,000 บาท</strong> ไม่ว่าจะแพ้หรือชนะ ได้คืนฟรีทันที!
          </p>

          <p class="desc-note">
            หมายเหตุ : ถอนรายได้ได้เมื่อมากกว่า <strong>15 บาทขึ้นไป</strong>
          </p>
        </section>
      </div>
    </div>

    <Footer />
    <FixedFooter />
  </div>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2'

interface CashbackData {
  totalAmount: number
  minimumAmount: number
  cashbackRate: number
  lastUpdateTime: string
  canWithdraw: boolean
}

const cashbackData = ref<CashbackData>({
  totalAmount: 0,
  minimumAmount: 15,
  cashbackRate: 0.3,
  lastUpdateTime: '13:20',
  canWithdraw: true
})

const canTransfer = computed(() => {
  return cashbackData.value.totalAmount >= cashbackData.value.minimumAmount
})

const formatCurrency = (amount: number) =>
  amount.toLocaleString('th-TH', { minimumFractionDigits: 2 })

const transferToCredit = () => {
  if (!canTransfer.value) {
    Swal.fire('ผิดพลาด', 'ยอดยังไม่ถึงขั้นต่ำ', 'error')
    return
  }

  Swal.fire('สำเร็จ', 'ระบบได้เพิ่มเครดิตให้ท่านแล้ว!', 'success')
}
</script>

<style scoped>
/* พื้นหลังขาวเต็มหน้า */
.cashback-wrapper {
  background: #ffffff;
  padding: 25px 0 50px;
  width: 100%;
  max-width: 980px;
  margin-inline: auto;
  margin-bottom: 40px;
}

/* ความกว้างของเนื้อหา */
.cashback-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  font-family: 'thaisanslite_r1', sans-serif;
}

/* กล่องบน */
.cashback-top-card {
  background: #fffbea;
  border: 1px solid #ffda6a;
  padding: 26px 22px;
  border-radius: 12px;
  margin-bottom: 22px;
  text-align: center;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 12px;
}

.rate { color: #ff7b00; font-weight: 900; }

.row-amount {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.update-time { font-size: 19px; }
.red { color: #d80000; }

.detail-text {
  font-size: 21px;
  line-height: 1.7;
  margin: 16px 0;
}

.u { text-decoration: underline; }

.btn-transfer {
  width: 100%;
  padding: 15px;
  font-size: 22px;
  font-weight: bold;
  background: #ffcc00;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn-transfer.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.note {
  margin-top: 10px;
  font-size: 17px;
}

/* รูป */
.cashback-img-wrap { margin-bottom: 20px; }

.cashback-img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

/* รายละเอียด */
.cashback-description {
  font-size: 21px;
  line-height: 1.8;
}

.desc-title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 12px;
}

.desc-note {
  margin-top: 14px;
  font-size: 19px;
  color: #444;
}

/* มือถือ */
@media (max-width: 600px) {
  .title { font-size: 24px; }
  .detail-text { font-size: 18px; }
  .btn-transfer { font-size: 18px; padding: 12px; }
}
</style>
