<template>
  <div>
    <div id="topbar">
      <button
        class="tt_btn_close"
        v-show="isContactOpen"
        @click="isContactOpen = false"
        type="button"
        aria-label="close contact panel"
      >
        <UiIcon name="close" :size="16" />
      </button>
      <div
        class="tt_btn_open"
        v-show="!isContactOpen"
        @click="isContactOpen = true"
      >
        <UiIcon name="plus" :size="16" />
      </div>

      <template v-if="isContactOpen">
        <a class="tt_img_fixed" target="_blank" :href="lineUrl">
          <img :src="lineQRImage" alt="LINE QR Code">
          <span class="tt_tx_line">LINE : {{ lineId }}</span>
        </a>
        <a class="tt_img_fixed fx_telegram" target="_blank" :href="telegramUrl">
          <img :src="telegramQRImage" alt="Telegram QR Code">
          <span class="tt_tx_telegram">
            <img src="https://ufanance12.com/wp-content/themes/ufanance.com/images/telegram.png" alt="Telegram">
            Telegram : {{ telegramId }}
          </span>
        </a>
      </template>
    </div>

    <div id="topbar2">
      <div class="tt_l tt_full">
        <button
          class="tt_btn_close2"
          v-show="isGamePanelOpen"
          @click="isGamePanelOpen = false"
          type="button"
          aria-label="close game panel"
        >
          <UiIcon name="close" :size="16" />
        </button>
        <button
          class="tt_btn_open2"
          v-show="!isGamePanelOpen"
          @click="isGamePanelOpen = true"
          type="button"
          aria-label="open game panel"
        >
          <UiIcon name="plus" :size="16" />
        </button>
      </div>

      <template v-if="isGamePanelOpen">
        <a
          v-for="provider in gameProviders"
          :key="provider.name"
          class="tt_l tt_img_fixed2"
          target="_blank"
          :href="provider.link"
          :title="provider.name"
        >
          <figure class="imghvr-fold-down">
            <img :src="provider.image" :alt="provider.name">
            <figcaption>
              <img :src="provider.image" :alt="provider.name">
            </figcaption>
          </figure>
        </a>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
interface GameProvider {
  name: string
  image: string
  link: string
}

const lineUrl = ref('https://line.me/ti/p/~@ufanancev4')
const lineId = ref('@ufanancev4')
const lineQRImage = ref('https://ufanance12.com/wp-content/uploads/2024/12/@ufanancev4.png')

const telegramUrl = ref('https://t.me/ufanancev2')
const telegramId = ref('@ufanancev2')
const telegramQRImage = ref('https://ufanance12.com/wp-content/uploads/2024/09/qr-code.png')

const isContactOpen = ref(true)
const isGamePanelOpen = ref(true)

const gameProviders = ref<GameProvider[]>([
  { name: 'UFASLOT', image: 'https://ufanance12.com/wp-content/uploads/2022/08/game01.png', link: '#' },
  { name: 'PG SLOT', image: 'https://ufanance12.com/wp-content/uploads/2022/08/game02.png', link: '#' },
  { name: 'JOKER', image: 'https://ufanance12.com/wp-content/uploads/2022/08/game03.png', link: '#' },
  { name: 'KINGMAKER', image: 'https://ufanance12.com/wp-content/uploads/2022/08/game04.png', link: '#' },
  { name: 'SLOTXO', image: 'https://ufanance12.com/wp-content/uploads/2022/08/game05.png', link: '#' },
  { name: 'JILI', image: 'https://ufanance12.com/wp-content/uploads/2022/08/game06.png', link: '#' },
  { name: 'PRAGMATIC', image: 'https://ufanance12.com/wp-content/uploads/2022/08/game07.png', link: '#' },
  { name: 'RED TIGER', image: 'https://ufanance12.com/wp-content/uploads/2022/08/game08.png', link: '#' },
  { name: 'SPADE GAMING', image: 'https://ufanance12.com/wp-content/uploads/2022/08/game09.png', link: '#' },
  { name: 'POCKET GAME', image: 'https://ufanance12.com/wp-content/uploads/2022/08/game10.png', link: '#' }
])
</script>
<style scoped>
#topbar,
#topbar2 {
  position: fixed;
  right: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

#topbar {
  top: 30%;
}

#topbar2 {
  top: 50%;
}

.tt_btn_close,
.tt_btn_open,
.tt_btn_close2,
.tt_btn_open2 {
  cursor: pointer;
  border: none;
  background: #f3c31a;
  color: #000;
  width: 36px;
  height: 36px;
  border-radius: 8px 0 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.tt_img_fixed,
.tt_img_fixed2 {
  display: block;
}

.tt_tx_telegram img {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}

.fx_telegram {
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  #topbar,
  #topbar2 {
    right: 5px;
  }
}
</style>
