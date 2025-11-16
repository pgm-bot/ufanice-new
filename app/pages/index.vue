<template>
  <div class="home-page">
 <!-- Header with Menu -->
    <Header></Header>
    <HeadMobile></HeadMobile>
    <FloatingGameMenu></FloatingGameMenu>
    <FloatingContactMenu></FloatingContactMenu>
    <NotificationPopup :autoShow="true" :delay="1000"></NotificationPopup>
    <HeroSlider></HeroSlider>
    <GameCarousel></GameCarousel>
    <ArticleCard></ArticleCard>
    <Footer></Footer>
    <FixedFooter></FixedFooter>
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
