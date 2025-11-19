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