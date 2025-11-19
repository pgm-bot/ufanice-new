<template>
  <div class="tt_l tt_full jp_bg">
    <div class="wrapper-c">
      <div class="tt_l tt_full mb-20">
        <div class="owl-carousel slide_jp owl-theme" :class="{ 'owl-loaded': isLoaded }">
          <div class="owl-stage-outer">
            <div class="owl-stage" :style="stageStyle">
              <div v-for="(item, index) in jackpots" :style="{ width: `${itemWidth}px`, marginRight: '10px' }" :key="`jackpot-${index}`" class="owl-item">
                <div class="item">
                  <a :href="item.link" :title="item.title">
                    <img class="thaitheme_pc" :src="item.image" :alt="item.title">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-nav">
            <div class="owl-prev" @click="scrollPrev"><i class="fas fa-chevron-left"></i></div>
            <div class="owl-next" @click="scrollNext"><i class="fas fa-chevron-right"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface JackpotItem {
  image: string
  title: string
  link: string
}

interface Props {
  jackpots?: JackpotItem[]
}

const props = withDefaults(defineProps<Props>(), {
  jackpots: () => []
})

const jackpots = computed(() => props.jackpots)

const isLoaded = ref(false)
const currentIndex = ref(0)
const itemWidth = ref(198) // px
const itemMargin = 10 // px
const visibleJackpots = ref(3)

const updateResponsive = () => {
  if (!process.client) return

  const width = window.innerWidth
  if (width <= 768) {
    itemWidth.value = 280
    visibleJackpots.value = 2
  } else if (width <= 1024) {
    itemWidth.value = 280
    visibleJackpots.value = 3
  } else if (width <= 1200) {
    itemWidth.value = 280
    visibleJackpots.value = 4
  } else {
    itemWidth.value = 280
    visibleJackpots.value = 4
  }
}

const totalDots = computed(() => Math.ceil(jackpots.value.length / visibleJackpots.value))
const currentDot = computed(() => Math.floor(currentIndex.value / visibleJackpots.value))

const stageStyle = computed(() => {
  const totalWidth = jackpots.value.length * (itemWidth.value + itemMargin)
  const translateX = currentIndex.value * (itemWidth.value + itemMargin)
  return {
    width: `${totalWidth}px`,
    transform: `translate3d(-${translateX}px, 0, 0)`,
    transition: 'transform 0.4s ease'
  }
})

const scrollNext = () => {
  if (currentIndex.value + visibleJackpots.value < jackpots.value.length) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const scrollPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = Math.max(0, jackpots.value.length - visibleJackpots.value)
  }
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