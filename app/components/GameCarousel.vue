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

<style scoped>
.bg_3 {
  background: #0b0e11;
  padding: 20px 0px 20px 0px;
  position: relative;
}

.h_slot1 {
  margin-bottom: 30px;
  position: relative;
  font-size: 40px;
  line-height: 46px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  font-weight: bold;
  margin: 15px 0px 0px 0px;
  text-shadow: 0 0 5px #000, 0 0 8px #ac890d, 0 0 20px #a27c0a;
}

.arhx {
    margin: 10px 0px 10px 0px;
    height: 2px;
    background: linear-gradient(90deg, rgba(156, 103, 39, 0), rgba(225, 164, 19, 0.5) 32%, #f1c413 49%, rgba(240, 163, 15, 0.5) 65%, rgba(253, 246, 174, 0));
}

.owl-carousel {
  position: relative;
  padding: 30px 50px 60px;
  margin: 0 auto;
  max-width: 1200px;
}

.owl-stage-outer {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.owl-stage {
  display: flex;
}

.owl-item {
  width: 198px;
  margin-right: 10px;
  flex-shrink: 0;
  box-sizing: border-box;
}

.owl-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.list_p4xx {
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid #ff9800;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  background: #000;
}

.list_p4xx:hover {
  transform: translateY(-5px);
  border-color: #ffa726;
  box-shadow: 0 8px 20px rgba(255, 152, 0, 0.4);
}

.imghvr-fold-down {
  position: relative;
  overflow: hidden;
  margin: 0;
  display: block;
}

.imghvr-fold-down figure {
  margin: 0;
  position: relative;
}

.imghvr-fold-down img {
  display: block;
  width: 100%;
  height: auto;
}

.imghvr-fold-down figcaption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
  transition: transform 0.35s ease-in-out;
}

.imghvr-fold-down figcaption img {
  opacity: 0.9;
  transition: opacity 0.35s ease;
}

.imghvr-fold-down:hover figcaption {
  transform: translateY(0);
}

.imghvr-fold-down:hover figcaption img {
  opacity: 1;
}

.owl-nav {
  position: absolute;
  top: 50%;
  left: -25px;
  right: -25px;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 10;
}

.owl-prev,
.owl-next {
  width: 50px;
  height: 50px;
  background: rgba(243, 195, 26, 0.95);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #ffa726;
  pointer-events: auto;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}

.owl-prev:hover,
.owl-next:hover {
  background: #ffa726;
  transform: scale(1.15);
  box-shadow: 0 6px 16px rgba(255, 167, 38, 0.5);
}

.owl-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.owl-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.owl-dot.active {
  background: #f3c31a;
  width: 30px;
  border-radius: 6px;
}

@media screen and (max-width: 1200px) {
  .owl-item {
    width: 180px;
  }
}

@media screen and (max-width: 1024px) {
  .owl-item {
    width: 160px;
  }

  .h_slot1 {
    font-size: 24px;
  }
}

@media screen and (max-width: 768px) {
  .owl-item {
    width: 150px;
  }

  .h_slot1 {
    font-size: 20px;
  }

  .owl-prev,
  .owl-next {
    width: 35px;
    height: 35px;
  }
}
</style>
