<template>
  <div class="tt_l tt_full slide_a">
    <div class="tt_l tt_full slide_pc">
      <div class="owl-carousel slide_pc owl-theme">
        <div class="owl-stage-outer">
          <div class="owl-stage" :style="stageStyleDesktop">
            <div
              v-for="(slide, index) in desktopSlides"
              :key="`desktop-${index}`"
              class="owl-item"
              :style="{ width: `${100 / desktopSlides.length}%` }"
            >
              <div class="item">
                <a :href="slide.link" :title="slide.title">
                  <img class="thaitheme_pc" :src="slide.image" :alt="slide.title">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="owl-nav">
          <div class="owl-prev"  @click="prevSlide('desktop')"><i class="fas fa-chevron-left"></i></div>
          <div class="owl-next" @click="nextSlide('desktop')"><i class="fas fa-chevron-right"></i></div>
        </div>
        <div class="owl-dots">
          <div
            v-for="(slide, index) in desktopSlides"
            :key="`dot-desktop-${index}`"
            class="owl-dot"
            :class="{ active: currentSlideDesktop === index }"
            @click="goToSlide(index, 'desktop')"
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="tt_l tt_full slide_mobile">
      <div class="owl-carousel slide_mobile owl-theme">
        <div class="owl-stage-outer">
          <div class="owl-stage" :style="stageStyleMobile">
            <div
              v-for="(slide, index) in mobileSlides"
              :key="`mobile-${index}`"
              class="owl-item"
              :style="{ width: `${100 / mobileSlides.length}%` }"
            >
              <div class="item">
                <a :href="slide.link" :title="slide.title">
                  <img class="thaitheme_pc" :src="slide.image" :alt="slide.title">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="owl-nav">
          <div class="owl-prev" @click="prevSlide('mobile')"><i class="fas fa-chevron-left"></i></div>
          <div class="owl-next" @click="nextSlide('mobile')"><i class="fas fa-chevron-right"></i></div>
        </div>
        <div class="owl-dots">
          <div
            v-for="(slide, index) in mobileSlides"
            :key="`dot-mobile-${index}`"
            class="owl-dot"
            :class="{ active: currentSlideMobile === index }"
            @click="goToSlide(index, 'mobile')"
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SlideItem {
  image: string
  link: string
  title: string
}

const desktopSlides = ref<SlideItem[]>([])
const mobileSlides = ref<SlideItem[]>([])

const currentSlideDesktop = ref(0)
const currentSlideMobile = ref(0)
let timerDesktop: ReturnType<typeof setInterval> | null = null
let timerMobile: ReturnType<typeof setInterval> | null = null

const stageStyleDesktop = computed(() => {
  const slideWidth = 100 / desktopSlides.value.length
  return {
    width: `${desktopSlides.value.length * 100}%`,
    transform: `translate3d(-${currentSlideDesktop.value * slideWidth}%, 0, 0)`,
    transition: 'transform 0.5s ease'
  }
})

const stageStyleMobile = computed(() => {
  const slideWidth = 100 / mobileSlides.value.length
  return {
    width: `${mobileSlides.value.length * 100}%`,
    transform: `translate3d(-${currentSlideMobile.value * slideWidth}%, 0, 0)`,
    transition: 'transform 0.5s ease'
  }
})

const nextSlide = (type: 'desktop' | 'mobile') => {
  if (type === 'desktop') {
    currentSlideDesktop.value = (currentSlideDesktop.value + 1) % desktopSlides.value.length
  } else {
    currentSlideMobile.value = (currentSlideMobile.value + 1) % mobileSlides.value.length
  }
}

const prevSlide = (type: 'desktop' | 'mobile') => {
  if (type === 'desktop') {
    currentSlideDesktop.value =
      currentSlideDesktop.value === 0
        ? desktopSlides.value.length - 1
        : currentSlideDesktop.value - 1
  } else {
    currentSlideMobile.value =
      currentSlideMobile.value === 0
        ? mobileSlides.value.length - 1
        : currentSlideMobile.value - 1
  }
}

const goToSlide = (index: number, type: 'desktop' | 'mobile') => {
  if (type === 'desktop') {
    currentSlideDesktop.value = index
  } else {
    currentSlideMobile.value = index
  }
}

const startAutoPlay = () => {
  timerDesktop = setInterval(() => nextSlide('desktop'), 5000)
  timerMobile = setInterval(() => nextSlide('mobile'), 5000)
}

const stopAutoPlay = () => {
  if (timerDesktop) clearInterval(timerDesktop)
  if (timerMobile) clearInterval(timerMobile)
}

const fetchSlides = async () => {
  try {
    const [desktopResponse, mobileResponse] = await Promise.all([
      fetch('/api/hero-slides-desktop.json'),
      fetch('/api/hero-slides-mobile.json')
    ])

    if (desktopResponse.ok) {
      const desktopData = await desktopResponse.json()
      desktopSlides.value = desktopData
    } else {
      console.error('Failed to fetch desktop slides data')
    }

    if (mobileResponse.ok) {
      const mobileData = await mobileResponse.json()
      mobileSlides.value = mobileData
    } else {
      console.error('Failed to fetch mobile slides data')
    }
  } catch (error) {
    console.error('Error fetching slides:', error)
  }
}

onMounted(async () => {
  await fetchSlides()
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
/* แสดง slide_pc บนหน้าจอ desktop */
.slide_pc {
  display: block;
}

/* ซ่อน slide_mobile บนหน้าจอ desktop */
.slide_mobile {
  display: none;
}

/* บนหน้าจอ mobile (768px ลงมา) */
@media (max-width: 768px) {
  .slide_pc {
    display: none;
  }

  .slide_mobile {
    display: block;
  }
}
</style>
