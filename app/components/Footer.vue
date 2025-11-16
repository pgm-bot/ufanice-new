<template>
  <div class="tt_l tt_full footer">
    <div class="tt_l tt_full ar_f"></div>

    <div class="tt_l tt_full footer_cx">
      <div class="wrapper-c">
        <!-- Logo -->
        <div class="tt_l logo_pc_f">
          <a class="tt_l tt_full mb-10" :title="siteName" :href="homeUrl">
            <img :src="logoUrl" alt="Logo">
          </a>
        </div>

        <!-- Description -->
        <div class="tt_r tt_txt_seo3">
          <p>
            บริการทางเข้าเล่น กีฬาออนไลน์ คาสิโนออนไลน์ โดยให้บริการตลอด 24 ชั่วโมง
            ท่านสามารถ ฝาก และ ถอนเงินได้ตลอดเวลาที่ต้องการ
            เราบริการทางเข้าที่ฉับไวผ่านหน้าเว็บ เว็บแทงบอลออนไลน์ผ่านเน็ต
            ยอดนิยมอันดับ 1 ตัวแทนโดยตรงจากยูฟ่าเบท
            ที่เป็นที่นิยมใช้บริการ มากที่สุดในประเทศไทย
            รับเดิมพันกีฬาออนไลน์และคาสิโนทุกประเภท
            บริการลูกค้าทุกวัน 7 วัน 24 ชั่วโมง ไม่มีวันหยุด
          </p>
        </div>

        <!-- Game Partners -->
        <div class="tt_l tt_full game_ft mb-20">
          <a v-for="(partner, index) in partners" :key="`partner-${index}`" :href="partner.link" :title="partner.name">
            <img class="thaitheme_pc" :src="partner.logo" :alt="partner.name">
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="tt_r copyright_footer">
        Copyright {{ currentYear }} ©
        <a :title="siteName" :href="homeUrl">
          {{ siteDomain }}
        </a>
        All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Partner {
  name: string
  logo: string
  link: string
}

const siteName = ref('คาสิโนออนไลน์ สมัครเล่นบาคาร่าออนไลน์ สล็อตออนไลน์')
const siteDomain = ref('UFANANCE.COM')
const homeUrl = ref('/')
const logoUrl = ref('https://ufanance12.com/wp-content/uploads/2022/07/logo-ufanance1.png')
const currentYear = new Date().getFullYear()

const partners = ref<Partner[]>([
  {
    name: 'UFABET',
    logo: 'https://ufanance12.com/wp-content/uploads/2020/12/logo-ufabet.png',
    link: '#'
  },
  {
    name: 'SAGAMING',
    logo: 'https://ufanance12.com/wp-content/uploads/2020/12/logo-sagaming.png',
    link: '#'
  },
  {
    name: 'SEXY BACCARAT',
    logo: 'https://ufanance12.com/wp-content/uploads/2020/12/Sexy-Baccarat.png',
    link: '#'
  },
  {
    name: 'JOKER',
    logo: 'https://ufanance12.com/wp-content/uploads/2020/12/cert5_grey.png',
    link: '#'
  }
])
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, #0b0e11 0%, #000 100%);
  padding-top: 40px;
  position: relative;
}

.ar_f {
  height: 3px;
  background: linear-gradient(90deg, transparent, #f3c31a, transparent);
  margin-bottom: 40px;
}

.footer_cx {
  padding-bottom: 80px;
}

.wrapper-c {
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
}

.logo_pc_f {
  float: left;
  width: 25%;
  margin-top: 5%;
}

.logo_pc_f img {
  height: 50px;
  width: auto;
}

.mb-10 {
  margin-bottom: 10px;
}

.tt_txt_seo3 {
  line-height: 1.5em;
}

.tt_txt_seo3 {
  width: 70%;
  color: #b4b4b4;
  font-family: thaisanslite_r1;
  font-size: 20px;
  line-height: 20px;
  overflow: hidden;
  margin-bottom: 10px;
  margin-top: 20px;
}

.tt_r {
  float: right;
}

.tt_txt_seo3 p {
  display: block;
  margin: 0.3em 0;
  line-height: 1.2em;
}

.game_ft {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.game_ft a {
  transition: all 0.3s ease;
  opacity: 0.8;
}

.game_ft a:hover {
  opacity: 1;
  transform: translateY(-5px);
}

.game_ft img {
  height: 50px;
  width: auto;
  filter: brightness(0.9);
  transition: filter 0.3s ease;
}

.game_ft a:hover img {
  filter: brightness(1.2);
}

.mb-20 {
  margin-bottom: 20px;
}

.copyright_footer {
  background-color: #000;
  width: 100%;
  text-align: center;
  font-family: thaisanslite_r1;
  font-size: 19px;
  line-height: 16px;
  color: #dedddd;
  padding: 10px 0px 10px 0px;
}

.copyright_footer a {
  color: #f3c31a;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.copyright_footer a:hover {
  color: #fbd41a;
}

/* Responsive */
@media screen and (max-width: 800px) {
  .footer_cx {
    padding-bottom: 100px;
  }

  .logo_pc_f img {
    height: 40px;
  }

  .tt_txt_seo3 p {
    font-size: 13px;
  }

  .game_ft {
    gap: 20px;
  }

  .game_ft img {
    height: 40px;
  }

  .copyright_footer {
    font-size: 12px;
    padding: 15px;
  }
}

@media screen and (max-width: 480px) {
  .logo_pc_f img {
    height: 35px;
  }

  .tt_txt_seo3 p {
    font-size: 12px;
  }

  .game_ft {
    gap: 15px;
  }

  .game_ft img {
    height: 35px;
  }
}
</style>
