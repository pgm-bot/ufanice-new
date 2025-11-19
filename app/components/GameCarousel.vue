<template>

  <div class="tt_l tt_full slide_b">
    <div class="owl-carousel owl-theme" :class="{ 'owl-loaded': isLoaded }">
      <div class="owl-stage-outer">
        <div class="owl-stage" :style="stageStyle">
          <div v-for="(game, index) in games" :key="game.title + index" class="owl-item"
            :style="{ width: `${itemWidth}px`, marginRight: '10px' }" :class="{ active: isActive(index) }">
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
        <div class="owl-prev" @click="scrollPrev"><i class="fas fa-chevron-left"></i></div>
        <div class="owl-next" @click="scrollNext"><i class="fas fa-chevron-right"></i></div>
      </div>
      <div class="owl-dots">
        <div v-for="(dot, index) in totalDots" :key="index" class="owl-dot" :class="{ active: currentDot === index }"
          @click="goToDot(index)">
          <span></span>
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

interface Props {
  games?: GameItem[]
}

const props = withDefaults(defineProps<Props>(), {
  games: () => []
})

const games = computed(() => props.games)

const currentIndex = ref(0)
const visibleCount = ref(5)
const itemWidth = ref(198) // px
const itemMargin = 10 // px
const isLoaded = ref(false)

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
  isLoaded.value = true
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
