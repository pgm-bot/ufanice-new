<template>
  <div class="tt_l tt_full jp_bg">
    <div class="wrapper-c">
      <div class="tt_l tt_full mb-20">
        <div class="owl-carousel slide_jp owl-theme">
          <div class="owl-stage-outer">
            <div class="owl-stage" :style="stageStyle">
              <div
                v-for="(item, index) in jackpots"
                :key="`jackpot-${index}`"
                class="owl-item"
              >
                <div class="item">
                  <a :href="item.link" :title="item.title">
                    <img class="thaitheme_pc" :src="item.image" :alt="item.title">
                  </a>
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

const jackpots = ref<JackpotItem[]>([
  { title: 'Jackpot 1', image: 'https://ufanance12.com/wp-content/uploads/2023/06/jackpot4.jpg', link: '/รวม-jackpot/' },
  { title: 'Jackpot 2', image: 'https://ufanance12.com/wp-content/uploads/2023/06/jackpot5.jpg', link: '/รวม-jackpot/' },
  { title: 'Jackpot 3', image: 'https://ufanance12.com/wp-content/uploads/2023/06/jackpot6.jpg', link: '/รวม-jackpot/' },
  { title: 'Jackpot 4', image: 'https://ufanance12.com/wp-content/uploads/2023/06/jackpot7.jpg', link: '/รวม-jackpot/' },
  { title: 'Jackpot 5', image: 'https://ufanance12.com/wp-content/uploads/2023/06/jackpot8.jpg', link: '/รวม-jackpot/' },
  { title: 'Jackpot 6', image: 'https://ufanance12.com/wp-content/uploads/2023/06/jackpot9.jpg', link: '/รวม-jackpot/' },
  { title: 'Jackpot 7', image: 'https://ufanance12.com/wp-content/uploads/2023/06/jackpot10.jpg', link: '/รวม-jackpot/' },
  { title: 'Jackpot 8', image: 'https://ufanance12.com/wp-content/uploads/2023/06/jackpot11.jpg', link: '/รวม-jackpot/' }
])

const currentIndex = ref(0)
const visibleJackpots = 3

const stageStyle = computed(() => ({
  width: `${jackpots.value.length * (100 / visibleJackpots)}%`,
  transform: `translate3d(-${currentIndex.value * (100 / jackpots.value.length)}%, 0, 0)`
}))

const scrollNext = () => {
  currentIndex.value = (currentIndex.value + 1) % jackpots.value.length
}

const scrollPrev = () => {
  currentIndex.value = currentIndex.value === 0 ? jackpots.value.length - 1 : currentIndex.value - 1
}

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(scrollNext, 4000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.owl-stage {
  display: flex;
  gap: 15px;
  transition: transform 0.4s ease;
}

.owl-item {
  flex: 0 0 calc(33.333% - 10px);
}

.owl-nav {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
}

.owl-prev,
.owl-next {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
}

@media screen and (max-width: 1024px) {
  .owl-item {
    flex: 0 0 calc(50% - 10px);
  }
}

@media screen and (max-width: 768px) {
  .owl-item {
    flex: 0 0 100%;
  }
}
</style>
