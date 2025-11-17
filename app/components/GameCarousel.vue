<template>
  <div class="tt_l tt_full bg_3">
    <div class="wrapper-c">
      <div class="tt_l tt_full ct_home">
        <h2 class="tt_l tt_full h_slot1">"ศูนย์รวมเว็บพนันออนไลน์ ที่ยิ่งใหญ่ที่สุดในประเทศ"</h2>
        <div class="tt_l tt_full arhx"></div>
        <div class="tt_l tt_full slide_b">
          <div class="owl-carousel owl-theme">
            <div class="owl-stage-outer">
              <div class="owl-stage" :style="stageStyle">
                <div v-for="(game, index) in games" :key="game.title + index" class="owl-item"
                  :class="{ active: isActive(index) }">
                  <div class="item">
                    <div class="list_p4xx" :class="{ last: (index + 1) % 5 === 0 }">
                      <a :href="game.link" :title="game.title">
                        <figure class="imghvr-fold-down">
                          <img :src="game.image" :alt="game.title">
                          <figcaption>
                            <img :src="game.image" :alt="game.title">
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="owl-nav">
              <button class="owl-prev" type="button" @click="scrollPrev">
                <UiIcon name="chevron-left" :size="18" />
              </button>
              <button class="owl-next" type="button" @click="scrollNext">
                <UiIcon name="chevron-right" :size="18" />
              </button>
            </div>
            <div class="owl-dots">
              <div v-for="(dot, index) in totalDots" :key="index" class="owl-dot"
                :class="{ active: currentDot === index }" @click="goToDot(index)">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface GameItem {
  title: string
  image: string
  link: string
}

const games = ref<GameItem[]>([
  { title: 'SA', image: 'https://ufanance12.com/wp-content/uploads/2022/07/banner01.jpg', link: '/login' },
  { title: 'AE', image: 'https://ufanance12.com/wp-content/uploads/2022/07/banner02.jpg', link: '/login' },
  { title: 'GDG', image: 'https://ufanance12.com/wp-content/uploads/2022/07/banner03.jpg', link: '/login' },
  { title: 'VENUS', image: 'https://ufanance12.com/wp-content/uploads/2022/07/banner04.jpg', link: '/login' },
  { title: 'EBET', image: 'https://ufanance12.com/wp-content/uploads/2022/07/banner05.jpg', link: '/login' },
  { title: 'Spadegaming', image: 'https://ufanance12.com/wp-content/uploads/2022/07/banner06.jpg', link: '/login' },
  { title: 'Joker', image: 'https://ufanance12.com/wp-content/uploads/2022/07/banner07.jpg', link: '/login' },
  { title: 'UFA', image: 'https://ufanance12.com/wp-content/uploads/2022/07/banner08.jpg', link: '/login' },
  { title: 'PG', image: 'https://ufanance12.com/wp-content/uploads/2022/07/banner09.jpg', link: '/login' },
  { title: 'RED TIGER', image: 'https://ufanance12.com/wp-content/uploads/2022/07/banner10.jpg', link: '/login' }
])

const currentIndex = ref(0)
const visibleCount = ref(5)
const itemWidth = ref(198) // px
const itemMargin = 10 // px

const updateResponsive = () => {
  if (!process.client) return

  const width = window.innerWidth
  if (width <= 768) {
    itemWidth.value = 150
    visibleCount.value = 2
  } else if (width <= 1024) {
    itemWidth.value = 160
    visibleCount.value = 4
  } else if (width <= 1200) {
    itemWidth.value = 180
    visibleCount.value = 5
  } else {
    itemWidth.value = 198
    visibleCount.value = 5
  }
}

const totalDots = computed(() => Math.ceil(games.value.length / visibleCount.value))
const currentDot = computed(() => Math.floor(currentIndex.value / visibleCount.value))

const stageStyle = computed(() => {
  const totalWidth = games.value.length * (itemWidth.value + itemMargin)
  const translateX = currentIndex.value * (itemWidth.value + itemMargin)
  return {
    width: `${totalWidth}px`,
    transform: `translate3d(-${translateX}px, 0, 0)`,
    transition: 'transform 0.4s ease'
  }
})

const isActive = (index: number) => {
  return index >= currentIndex.value && index < currentIndex.value + visibleCount.value
}

const scrollNext = () => {
  if (currentIndex.value + visibleCount.value < games.value.length) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const scrollPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = Math.max(0, games.value.length - visibleCount.value)
  }
}

const goToDot = (dotIndex: number) => {
  currentIndex.value = dotIndex * visibleCount.value
}

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  updateResponsive()
  timer = setInterval(scrollNext, 4000)

  if (process.client) {
    window.addEventListener('resize', updateResponsive)
  }
})

onUnmounted(() => {
  if (timer) clearInterval(timer)

  if (process.client) {
    window.removeEventListener('resize', updateResponsive)
  }
})
</script>
