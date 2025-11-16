<template>
  <div class="tt_l tt_full bg_2">
    <div class="wrapper-c">
      <a class="tt_l tt_full tt_b1x Parent zoomIn animated" target="_blank" href="/login">
        <img src="https://ufanance12.com/wp-content/uploads/2022/07/banner01.gif" alt="banner 1">
      </a>
      <div class="tt_l tt_full btx_vdo">
        <div class="tt_l btxl">
          <div class="tt_l tt_full tt_txt_seo2x Parent zoomIn animated">
            <h3>
              <span style="color: #f3c31a;">ยินดีต้อนรับเข้าสู่เว็บไซต์ คาสิโนออนไลน์ UFANANCE</span>
            </h3>
            <p>
              UFANANCE เป็นเว็บตรงจากเครือ UFA BET ซึ่งเป็นผู้ให้บริการพนันออนไลน์ที่ดีที่สุด มาตรฐานระดับสากล มีเกมส์ให้เลือกเดิมพันหลากหลายไม่ว่าจะเป็น แทงบอลออนไลน์ บอลเดี่ยว บอลสเต็ป เกมส์บาคาร่าจากค่ายดังๆ เกมส์สล็อตที่แตกง่ายมากๆ และหวยออนไลน์ เช่น หวยรัฐบาล หวยยี่กี่ หวยหุ้น และอื่นๆอีกมากมายไว้ให้บริการ โดยระบบเว็บเราเป็นระบบที่ฝาก-ถอน AUTO ภายใน 10 วินาที ทำให้ลูกค้าไม่ต้องรอนาน พร้อมทั้งมีทีมงานมืออาชีพคอยดูแลลูกค้าตลอด 24 ชั่วโมง รวมไปถึงการให้บริการต่างๆ สุดพิเศษที่ลูกค้าหาไม่ได้จากที่ไหน หากท่านมีข้อสงสัยหรือต้องการคำปรึกษากรุณา ติดต่อสอบถาม CALL CENTER ได้ตลอด 24 ชั่วโมง. หรือ ทักแชทไลน์มาได้เลย LINE ID :
              <a :href="lineUrl" target="_blank"><span style="color: #12c412;"><strong>@UFANANCEV4</strong></span></a>
            </p>
          </div>
        </div>
        <div class="tt_r btxr Parent zoomIn animated">
          <iframe
            width="560"
            height="280"
            :src="videoUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <a class="tt_l tt_full tt_bb2x Parent zoomIn animated" target="_blank" href="/login">
        <img src="https://ufanance12.com/wp-content/uploads/2022/07/banner02.gif" alt="banner 2">
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const lineUrl = ref('https://line.me/ti/p/~@ufanancev4')
const videoUrl = ref('https://cdend.com/c2FnYW1lc2FnYW1lc2FnYW1lc2FnYW1lc2FnYW1lc2FnYW1l/ufanance.mp4')
</script>

<style scoped>
.bg_2 {
  padding: 40px 0;
  background: #12151d;
}

.tt_b1x img,
.tt_bb2x img {
  width: 100%;
  height: auto;
}

.btx_vdo {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  margin: 30px 0;
}

.btxl,
.btxr {
  flex: 1;
}

iframe {
  width: 100%;
  border-radius: 10px;
}

@media screen and (max-width: 800px) {
  .btx_vdo {
    flex-direction: column;
  }
}
</style>
