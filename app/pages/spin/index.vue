<template>
  <HeadMobile></HeadMobile>
  <Header></Header>
  <div class="wrapper-c">
    <div class="tt_l tt_full p_gl">
      <div id="ct_from" class="tt_l tt_full title_page">
        <h1>หมุนกงล้อเสี่ยงโชค</h1>
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
                  ปั่นกงล้อลุ้นรับทอง 1 บาท ได้ทุกวัน ปั่นได้ทุกวันวันละครั้ง
                </h4>
              </div>
            </div>
            <div class="bgwhitealpha text-secondary shadow-sm rounded pl-3 pr-3 pt-2 pb-2 col-lotto text-left">
              <div class="user-dashboard-tab">
                <div class="row">
                  <div class="order-details col-12">
                    <div class="justify-content-center">
                      <div class="text-center">
                        <img @click="$router.push('./spin/game')" src="~assets/ads/12.jpg" alt="แนะนำเพื่อนรับเงินฟรี"
                          style="width:100%;cursor:pointer" />
                      </div>

                      <p class="mt-3">
                        <span class="raw">เงื่อนไขการร่วมสนุก</span>
                        <br />- ต้องมียอดเสียของวันนั้น 1,000 บาท ถึงจะรับสิทธิปั่นกงล้อในวันนั้นได้ 1 ครั้ง
                        <br />- เมื่อรับโบนัสเกมกงล้อ จะต้องทำ
                        <span style="font-style: italic">turnover 4 เท่าของ</span> โบนัสที่เปิดได้ ถึงจะถอนเงินได้
                        <br />- แจกทุก user ไม่อั้น ทุกวัน ไม่มีจำกัด
                        <br />- ท่านที่ได้รับทอง 1 บาท ให้แจ้งทีมงานทันที (ทีมงานจะสอบถามและส่งรางวัลของให้ถึงที่)
                        <br />- *ยิ่งมียอดเสียเยอะยิ่งลุ้นรับรางวัลใหญ่ได้เยอะขึ้น
                        <br />-
                        <span class="text-red text-detial">หากพบเห็นตั้งใจแทงสวนหรือปั้มโบนัส..มากกว่า 1 user
                          จะทำการยึดเงินทันทีไม่มีคืนเงิน เด็ดขาด !</span>
                      </p>
                      <!-- <br /> -->
                      <h2>
                        <nuxt-link class="text-red raw raw-open" to="./spin/game">เริ่มหมุนกงล้อเสี่ยงโชค
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

  /* .text-detial {
    font-size: 16px !important;
  } */
  h2 {
    font-size: 18px;
  }
}
</style>
