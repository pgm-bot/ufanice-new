<template>
  <div class="home-page">
    <!-- Top Bar with LINE/Telegram -->
    <TopBar />
 <!-- Header with Menu -->
    <Header />

    <div class="tt_l tt_full head_mc">
      <a
        v-show="showInstallBanner"
        class="tt_l logo_m install_m"
        href="#"
        @click.prevent="installApp"
      >
        <img
          width="800"
          height="220"
          :src="installBannerUrl"
          alt="install banner"
        >
      </a>
      <a
        v-show="showInstallBanner"
        href="#"
        class="team-popup-close logo_m install_m"
        @click.prevent="closeAppBanner"
      >
        ×
      </a>

      <div class="tt_l h-linem">
        <a :href="lineUrl" target="_blank" rel="noopener">
          <img
            width="140"
            height="46"
            src="https://ufanance12.com/wp-content/themes/ufanance.com/images/button-lineadd.jpg?v=1.0"
            alt="line add friend"
          >
        </a>
      </div>

      <div class="tt_l m-telegram">
        <a :href="telegramUrl" target="_blank" rel="noopener">
          <img src="https://ufanance12.com/wp-content/themes/ufanance.com/images/telegram.png" alt="telegram">
          <span>{{ telegramId }}</span>
        </a>
      </div>
    </div>

    <!-- Hero Slider -->
    <HeroSlider />

    <!-- DMCA Badge -->
    <DmcaBadge />

    <!-- Game Carousel -->
    <GameCarousel />

    <!-- Intro Block (bg_2x) -->
    <HomeIntro />

    <!-- Content Section with Video -->
    <ContentSection />

    <!-- Jackpot Slider -->
    <JackpotSlider />

    <!-- Article Cards -->
    <ArticleCard />

    <!-- Footer -->
    <Footer />

    <!-- Fixed Footer (Mobile Menu) -->
    <FixedFooter />

    <!-- Overlay layer -->
    <OverlayLayer />

    <!-- Back to Top Button -->
    <BackToTop />
   
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt 3
// ไม่ต้อง import components เพราะ Nuxt 3 จะ auto-import ให้

// Set page metadata
useHead({
  title: 'หน้าหลัก - UFANANCE คาสิโนออนไลน์',
  meta: [
    { name: 'description', content: 'UFANANCE เว็บพนันบอลออนไลน์ แทงบอล UFABET อันดับ 1' }
  ]
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
