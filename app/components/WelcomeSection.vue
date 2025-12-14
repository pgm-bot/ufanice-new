<template>
  <div class="tt_l tt_full bg_2">
    <div class="wrapper-c">
      <!-- Top Banner -->
      <a
        class="tt_l tt_full tt_b1x Parent zoomIn animated"
        target="_blank"
        :href="topBannerLink"
      >
        <img :src="topBannerImage" alt="UFANICE Top Banner">
      </a>

      <!-- Content + Video Section -->
      <div class="tt_l tt_full btx_vdo">
        <!-- Left: Text Content -->
        <div class="tt_l btxl">
          <div class="tt_l tt_full tt_txt_seo2x Parent zoomIn animated">
            <h3>
              <span style="color: #f3c31a;">ยินดีต้อนรับเข้าสู่เว็บไซต์ คาสิโนออนไลน์ UFANICE</span>
            </h3>
            <p>
              UFANICE เป็นเว็บตรงจากเครือ UFA BET ซึ่งเป็นผู้ให้บริการพนันออนไลน์ที่ดีที่สุด มาตรฐานระดับสากล
              มีเกมส์ให้เลือกเดิมพันหลากหลายไม่ว่าจะเป็น แทงบอลออนไลน์ บอลเดี่ยว บอลสเต็ป เกมส์บาคาร่าจากค่ายดังๆ
              เกมส์สล็อตที่แตกง่ายมากๆ และหวยออนไลน์ เช่น หวยรัฐบาล หวยยี่กี่ หวยหุ้น และอื่นๆอีกมากมายไว้ให้บริการ
              โดยระบบเว็บเราเป็นระบบที่ฝาก-ถอน AUTO ภายใน 10 วินาที ทำให้ลูกค้าไม่ต้องรอนาน
              พร้อมทั้งมีทีมงานมืออาชีพคอยดูแลลูกค้าตลอด 24 ชั่วโมง รวมไปถึงการให้บริการต่างๆ สุดพิเศษที่ลูกค้าหาไม่ได้จากที่ไหน
              หากท่านมีข้อสงสัยหรือต้องการคำปรึกษากรุณา ติดต่อสอบถาม CALL CENTER ได้ตลอด 24 ชั่วโมง. หรือ ทักแชทไลน์มาได้เลย
              LINE ID : <a :href="lineUrl" target="_blank">
                <span style="color: #12c412;"><strong>{{ lineId }}</strong></span>
              </a>
            </p>
            <p>&nbsp;</p>
          </div>
        </div>

        <!-- Right: Video -->
       <div class="tt_r btxr Parent zoomIn animated">
  <video
    :width="videoWidth"
    :height="videoHeight"
    controls
    preload="none"
    style="width: 100%; border-radius: 8px;"
  >
    <source :src="videoUrl" type="video/mp4" />
    วิดีโอไม่รองรับบนเบราว์เซอร์นี้
  </video>
</div>
      </div>

      <!-- Bottom Banner -->
      <a
        class="tt_l tt_full tt_bb2x Parent zoomIn animated"
        target="_blank"
        :href="bottomBannerLink"
      >
        <img :src="bottomBannerImage" alt="UFANICE Bottom Banner">
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  topBannerImage?: string
  topBannerLink?: string
  bottomBannerImage?: string
  bottomBannerLink?: string
  videoUrl?: string
  videoWidth?: number
  videoHeight?: number
  lineId?: string
  lineUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  topBannerImage: 'https://ufanance12.com/wp-content/uploads/2022/07/banner01.gif',
  topBannerLink: '',
  bottomBannerImage: 'https://ufanance12.com/wp-content/uploads/2022/07/banner02.gif',
  bottomBannerLink: '',
  videoUrl: 'https://cdend.com/c2FnYW1lc2FnYW1lc2FnYW1lc2FnYW1lc2FnYW1lc2FnYW1l/ufanance.mp4',
  videoWidth: 560,
  videoHeight: 280,
  lineId: '@UFANICEV4',
  lineUrl: 'https://line.me/ti/p/~@ufanancev4'
})
</script>

<style scoped>
/* Animation for zoomIn effect */
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

/* Banner Styles */
.tt_b1x,
.tt_bb2x {
  display: block;
  margin-bottom: 20px;
}

.tt_b1x img,
.tt_bb2x img {
  width: 100%;
  height: auto;
  display: block;
}

/* Content + Video Layout */
.btx_vdo {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  align-items: flex-start;
}

/* Left Text Content */
.btxl {
  flex: 1;
  min-width: 0;
}

.tt_txt_seo2x {
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.tt_txt_seo2x h3 {
  margin-bottom: 15px;
  font-size: 1.5rem;
  text-align: center;
}

.tt_txt_seo2x p {
  line-height: 1.8;
  text-align: left;
  color: #ffffff;
}

.tt_txt_seo2x a {
  text-decoration: none;
  transition: opacity 0.3s;
}

.tt_txt_seo2x a:hover {
  opacity: 0.8;
}

/* Right Video */
.btxr {
  flex: 0 0 auto;
  width: 560px;
  max-width: 100%;
}

.btxr iframe {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .btx_vdo {
    flex-direction: column;
  }

  .btxr {
    width: 100%;
  }

  .btxr iframe {
    max-width: 100%;
  }

  .tt_txt_seo2x h3 {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .btx_vdo {
    gap: 15px;
    margin-bottom: 15px;
  }

  .tt_txt_seo2x {
    padding: 15px;
  }

  .tt_txt_seo2x h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .tt_txt_seo2x p {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .tt_b1x,
  .tt_bb2x {
    margin-bottom: 15px;
  }
}

/* Visibility control */
[style*="visibility: visible"] {
  visibility: visible !important;
}
</style>
