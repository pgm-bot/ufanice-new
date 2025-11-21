<template>
  <HeadMobile></HeadMobile>
  <Header></Header>
  <div class="wrapper-c">
    <div class="tt_l tt_full p_gl">
      <div id="ct_from" class="tt_l tt_full title_page">
        <h1>เปิดไพ่รับเงินแจกวันละ-5</h1>
      </div>
      <div class="tt_l tt_full tt_content bg">
        <div class="thaitheme_read">
          <div class="p-2 w-100 bg-light main-content align-self-stretch"
            style="min-height: calc((100vh - 106px) - 90px);">
            <div
              class="bgwhitealpha text-secondary shadow-sm rounded p-2 xtarget col-lotto d-flex flex-row justify-content-between mb-1 pb-0">
              <div class="lotto-title">
                <h4>
                  <i class="fas fa-gift" aria-hidden="true"></i>
                  เปิดไพ่เสี่ยงโชควันละครั้งแจกเงินทุกวันสูงสุดวันละ 5,000,000 บาท
                </h4>
              </div>
            </div>
            <div class="bgwhitealpha text-secondary shadow-sm rounded pl-3 pr-3 pt-2 pb-2 col-lotto text-left">
              <div class="user-dashboard-tab">
                <div class="row">
                  <div class="order-details col-12">
                    <div class="justify-content-center">
                      <div class="text-center">
                        <img @click="$router.push('/card/game')" src="/ads/11.jpg" alt="เปิดไพ่เสี่ยงโชค"
                          style="width:100%;cursor:pointer" />
                      </div>

                      <p class="mt-3">
                        <span class="raw">เงื่อนไขการร่วมสนุก</span>
                        <br />- ต้องมียอดฝากแรกของวันขั้นต่ำ 100 บาท
                        <br />- เล่นได้วันละครั้งเท่านั้น..รีระบบหลัง 00.00 ของทุกวัน
                        <br />- แจกวันละ 5000 user เท่านั้น! รับได้อีกทีหลังเวลารีระบบ
                        <!--                    <br />- ต้องมีเงินคงเหลือไม่ต่ำกว่า 100 บาท จึงจะสามารถเปิดได้-->
                        <br />- เมื่อรับโบนัสเกมไพ่แล้ว จะต้องทำเทิน 4 เท่าของ โบนัสที่เปิดได้ ถึงจะถอนเงินได้
                        หากท่านรับโบนัสอื่นอยู่จะเปิดไพ่ไม่ได้
                      </p>
                      <!-- <br /> -->
                      <h2>
                        <nuxt-link class="text-red raw raw-open" to="/card/game">เริ่มเปิดไพ่เสี่ยงโชค
                          คลิกที่นี้!</nuxt-link>
                      </h2>
                    </div>
                  </div>
                </div>
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

<script>
export default {
  scrollToTop: false,
};
</script>

<style scoped>
/* Container Styles */
.bgwhitealpha {
  background: rgba(255, 255, 255, 0.9);
  margin-bottom: 10px;
  border: rgba(255, 255, 255, 1) 2px solid;
}

.lotto-title h4 {
  font-family: inherit !important;
  color: #343a40;
  line-height: 1;
  margin-bottom: 0;
}

/* Text Styles */
.text-red {
  color: red !important;
}

.text-red:hover {
  color: rgb(153, 11, 11) !important;
}

h2 {
  cursor: pointer;
  text-decoration: underline;
}

@media (max-width: 767px) {
  .lotto-title h4 {
    font-size: 18px !important;
  }
}

@media (max-width: 576px) {
  .lotto-title h4 {
    font-size: 18px !important;
  }

  /* .text-detail {
    font-size: 16px !important;
  } */
  h2 {
    font-size: 18px;
  }
}
</style>
