<template>
  <HeadMobile></HeadMobile>
  <Header></Header>
  <div class="wrapper">
    <div class="tt_l tt_full tt_content bg">
      <div class="tt_l tt_lcxxx">
        <div class="tt_l tt_full title_page">
          <h1>รับเครดิตเงินคืน</h1>
        </div>
        <div class="tt_l tt_full">
          <div class="thaitheme_read" style="display: none;"></div>

          <div class="tt_l tt_full">
            <div class="tt_l tt_full fr_login fr_aff">
              <div class="fr_center">
                <div class="tt_l tt_full fr_h1">รับเงินคืนฟรี ทันทีทุกวัน {{ cashbackData.cashbackRate }}%</div>
                <div class="tt_l tt_full fr_tx1">
                  จำนวนเงินคืน : <span class="amount_return">{{ formatCurrency(cashbackData.totalAmount) }}</span> บาท
                </div>

                <div class="text-center">
                  <p class="tt_l tt_full fr_tx1">
                    <b class="tt_l tt_full fr_tx1">
                      ยอดเงินจะอัพเดทอัตโนมัติ เวลา<span style="color: #dc3545"> {{ cashbackData.lastUpdateTime }}น.</span> ของทุกวัน
                    </b>
                    <br /><br />
                  </p>
                </div>

                <div class="text-center">
                  <p class="tt_l tt_full fr_tx1">
                    <b class="tt_l tt_full fr_tx1">
                      รับเงินคืน <span style="color: #dc3545">{{ cashbackData.cashbackRate }}%</span> ฟรี ทุกยอดการแทง
                    </b>

                    <strong class="thick"><u>สุดยอดโปรโมชั่น รับเงินคืนฟรี ทันทีทุกวัน ทั้งวัน ไม่อั้น ไม่ติดเทิร์น</u></strong>

                    ง่ายๆ เพียงเดิมพัน ออนไลน์
                    <b style="font-size: 35px;">
                      รับเงินคืน <span style="color: red; font-size: 35px;">{{ cashbackData.cashbackRate }}%</span> ทันที
                    </b>
                    ยิ่งเล่นยิ่งได้ ได้แบบฟรีๆ ไม่มีข้อแม้ โดยคำนวนจาก ยอดเดิมพันของท่าน ที่นี่ที่เดียว ที่ใจถึงให้ท่านได้
                    <br />
                  </p>
                </div>

                <a
                  class="tt_l tt_ful fr_submit_bk"
                  href="javascript:void(0);"
                  @click="transferToCredit"
                  :class="{ disabled: !canTransfer }">
                  โอนเงินเข้าเครดิต
                </a>

                <div class="tt_l tt_full fr_tx1">
                  <u>*ยอดขั้นต่ำ {{ cashbackData.minimumAmount }} บาท จึงจะโอนเข้าเครดิตได้</u>
                </div>

                <img src="/ads/03.jpg" style="margin-top: 5px; padding-top: 5px; width: 100%;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
  <FixedFooter></FixedFooter>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

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
  return cashbackData.value.canWithdraw && cashbackData.value.totalAmount >= cashbackData.value.minimumAmount
})

const formatCurrency = (amount: number) => {
  return amount.toFixed(2)
}

const loadCashbackData = async () => {
  try {
    const response = await fetch('/api/cashback/summary.json')
    const result = await response.json()
    if (result.status === 200 && result.data) {
      cashbackData.value = {
        totalAmount: result.data.totalAmount,
        minimumAmount: result.data.minimumAmount,
        cashbackRate: result.data.cashbackRate,
        lastUpdateTime: result.data.lastUpdateTime,
        canWithdraw: result.data.canWithdraw
      }
    }
  } catch (error) {
    console.error('Failed to load cashback data:', error)
  }
}

const transferToCredit = async () => {
  if (cashbackData.value.totalAmount < cashbackData.value.minimumAmount) {
    Swal.fire({
      icon: 'error',
      title: 'ทำรายการไม่สำเร็จ',
      text: `ท่านมียอดรายได้ไม่ถึง ${cashbackData.value.minimumAmount} บาท โปรดสะสมให้ครบก่อนทำรายการ`,
    })
    return
  }

  Swal.fire({
    title: 'กำลังทำรายการ',
    html: 'กำลังทำรายการ กรุณารอสักครู่',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
      // Simulate API call
      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'ทำรายการสำเร็จ',
          text: 'ระบบได้เพิ่มเครดิตให้ท่านแล้ว!',
        }).then(() => {
          // Reload data
          loadCashbackData()
        })
      }, 2000)
    }
  })
}

onMounted(() => {
  if (process.client) {
    loadCashbackData()
  }
})
</script>
