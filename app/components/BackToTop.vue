<template>
  <Transition name="fade">
    <div
      v-if="showButton"
      id="toTop"
      class="back-to-top"
      @click="scrollToTop"
    >
      <UiIcon name="chevron-up" :size="18" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #f3c31a 0%, #fbd41a 100%);
  color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(243, 195, 26, 0.4);
  transition: all 0.3s ease;
  z-index: 9998;
  font-size: 20px;
}

.back-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(243, 195, 26, 0.6);
}

.back-to-top:active {
  transform: translateY(-3px);
}

/* Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Responsive */
@media screen and (max-width: 800px) {
  .back-to-top {
    bottom: 120px;
    right: 15px;
    width: 45px;
    height: 45px;
    font-size: 18px;
  }
}

@media screen and (max-width: 480px) {
  .back-to-top {
    width: 40px;
    height: 40px;
    font-size: 16px;
    bottom: 110px;
    right: 10px;
  }
}
</style>
