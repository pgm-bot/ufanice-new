<template>
  <div>
    <Header></Header>
    <HeadMobile></HeadMobile>
    <HeroSlider></HeroSlider>
    <div class="tt_l tt_full bg_3">
      <div class="wrapper-c">
        <div class="tt_l tt_full ct_home">
          <h2 class="tt_l tt_full h_slot1">"ศูนย์รวมเว็บพนันออนไลน์ ที่ยิ่งใหญ่ที่สุดในประเทศ"</h2>
          <div class="tt_l tt_full arhx"></div>
          <GameCarousel :games="games"></GameCarousel>
        </div>
      </div>
    </div>
    <ContentSection></ContentSection>
    <JackpotSlider :jackpots="games2"></JackpotSlider>
    <WelcomeSection></WelcomeSection>
    <ArticleCard :articles="articles"></ArticleCard>
    <Footer></Footer>
    <FixedFooter></FixedFooter>
  </div>
</template>
<script setup lang="ts">
// Components are auto-imported by Nuxt 3
// ไม่ต้อง import components เพราะ Nuxt 3 จะ auto-import ให้

interface GameItem {
  title: string
  image: string
  link: string
}

interface ArticleItem {
  title: string
  image: string
  link: string
  excerpt: string
}

const games = ref<GameItem[]>([])
const games2 = ref<GameItem[]>([])
const articles = ref<ArticleItem[]>([])

const fetchGames = async () => {
  try {
    const response = await fetch('/api/games.json')
    if (response.ok) {
      const data = await response.json()
      games.value = data
    } else {
      console.error('Failed to fetch games data')
    }
  } catch (error) {
    console.error('Error fetching games:', error)
  }
}

const fetchJackpotGames = async () => {
  try {
    const response = await fetch('/api/jackpot-games.json')
    if (response.ok) {
      const data = await response.json()
      games2.value = data
    } else {
      console.error('Failed to fetch jackpot games data')
    }
  } catch (error) {
    console.error('Error fetching jackpot games:', error)
  }
}

const fetchArticles = async () => {
  try {
    const response = await fetch('/api/articles.json')
    if (response.ok) {
      const data = await response.json()
      articles.value = data
    } else {
      console.error('Failed to fetch articles data')
    }
  } catch (error) {
    console.error('Error fetching articles:', error)
  }
}

// Fetch data on component mount
onMounted(async () => {
  await Promise.all([fetchGames(), fetchJackpotGames(), fetchArticles()])
})

// Set page metadata
useHead({
  title: 'หน้าหลัก - UFANANCE คาสิโนออนไลน์',
  meta: [
    { name: 'description', content: 'UFANANCE เว็บพนันบอลออนไลน์ แทงบอล UFABET อันดับ 1' }
  ]
})
</script>