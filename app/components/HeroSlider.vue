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
          <button class="owl-prev" type="button" @click="prevSlide('desktop')">
            <UiIcon name="chevron-left" :size="18" />
          </button>
          <button class="owl-next" type="button" @click="nextSlide('desktop')">
            <UiIcon name="chevron-right" :size="18" />
          </button>
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
          <button class="owl-prev" type="button" @click="prevSlide('mobile')">
            <UiIcon name="chevron-left" :size="18" />
          </button>
          <button class="owl-next" type="button" @click="nextSlide('mobile')">
            <UiIcon name="chevron-right" :size="18" />
          </button>
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

const desktopSlides = ref<SlideItem[]>([
  {
    image: 'https://ufanance12.com/wp-content/uploads/2023/06/HEAD.jpg',
    link: '/article/promotions',
    title: 'Cover 2'
  },
  {
    image: 'https://ufanance12.com/wp-content/uploads/2025/11/UFANANACE.png',
    link: '/article/promotions',
    title: 'กิจกรรมประจำเดือน'
  },
  {
    image: 'https://ufanance12.com/wp-content/uploads/2023/06/01.jpg',
    link: '/article/customer-reviews',
    title: 'cover 3'
  }
])

const mobileSlides = ref<SlideItem[]>([
  {
    image: 'https://ufanance12.com/wp-content/uploads/2023/10/UFANANCE_0.png',
    link: '/login',
    title: '1'
  },
  {
    image: 'https://ufanance12.com/wp-content/uploads/2025/11/UFANANCE.png',
    link: '/article/promotions',
    title: 'กิจกรรมประจำเดือน'
  },
  {
    image: 'https://ufanance12.com/wp-content/uploads/2023/10/UFANANCE.1_0.png',
    link: '/article/customer-reviews',
    title: '2'
  }
])

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

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.slide_a {
  position: relative;
  width: 100%;
  max-width: 100%;
}

.owl-carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.owl-stage-outer {
  overflow: hidden;
}

.owl-stage {
  display: flex;
}

.owl-item {
  flex-shrink: 0;
}

.owl-item img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.owl-nav {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}

.owl-prev,
.owl-next {
  pointer-events: auto;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.4);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 50%;
  border: none;
}

.owl-dots {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.owl-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
  opacity: 0.6;
}

.owl-dot.active {
  background: #fff;
  opacity: 1;
}

.slide_mobile {
  display: none;
}

@media screen and (max-width: 800px) {
  .slide_mobile {
    display: block;
  }

  .slide_pc {
    display: none;
  }

  .owl-item img {
    max-height: 250px;
  }
}
</style>
