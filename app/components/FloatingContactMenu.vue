<template>
    <div id="topbar" :class="{ tt_open: !isOpen }">
        <div class="tt_btn_close" @click="toggleMenu">
            <i class="fa fa-times"></i>
        </div>
        <div class="tt_btn_open" @click="toggleMenu">
            <i class="fa fa-plus"></i>
        </div>

        <!-- LINE Contact -->
        <a class="tt_img_fixed" target="_blank" href="https://line.me/ti/p/~@ufanancev4">
            <img src="https://ufanance12.com/wp-content/uploads/2024/12/@ufanancev4.png" alt="LINE QR Code">
            <span class="tt_tx_line">LINE : @ufanancev4</span>
        </a>

        <!-- Telegram Contact -->
        <a class="tt_img_fixed fx_telegram" target="_blank" href="https://t.me/ufanancev2">
            <img src="https://ufanance12.com/wp-content/uploads/2024/09/qr-code.png" alt="Telegram QR Code">
            <span class="tt_tx_telegram">
                <img src="https://ufanance12.com/wp-content/themes/ufanance.com/images/telegram.png" alt="Telegram Icon">
                Telegram : @ufanancev2
            </span>
        </a>
    </div>
</template>

<script setup lang="ts">
const isOpen = ref(true)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

// Auto-hide on mobile devices
onMounted(() => {
    if (process.client) {
        const checkMobile = () => {
            if (window.innerWidth <= 768) {
                isOpen.value = false
            }
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)

        onUnmounted(() => {
            window.removeEventListener('resize', checkMobile)
        })
    }
})
</script>
