<template>
    <div id="topbar" :class="{ tt_open: !isOpen }">
        <div class="tt_btn_close" @click="toggleMenu">
            <i class="fa fa-times"></i>
        </div>
        <div class="tt_btn_open" @click="toggleMenu">
            <i class="fa fa-plus"></i>
        </div>

        <!-- LINE Contact -->
        <a v-if="contactInfo?.line" class="tt_img_fixed" target="_blank" :href="contactInfo.line.url">
            <img :src="contactInfo.line.qrImage" alt="LINE QR Code">
            <span class="tt_tx_line">LINE : {{ contactInfo.line.username }}</span>
        </a>

        <!-- Telegram Contact -->
        <a v-if="contactInfo?.telegram" class="tt_img_fixed fx_telegram" target="_blank" :href="contactInfo.telegram.url">
            <img :src="contactInfo.telegram.qrImage" alt="Telegram QR Code">
            <span class="tt_tx_telegram">
                <img :src="contactInfo.telegram.icon" alt="Telegram Icon">
                Telegram : {{ contactInfo.telegram.username }}
            </span>
        </a>
    </div>
</template>

<script setup lang="ts">
interface ContactInfo {
    line?: {
        url: string
        qrImage: string
        username: string
    }
    telegram?: {
        url: string
        qrImage: string
        icon: string
        username: string
    }
}

interface Props {
    contactInfo?: ContactInfo
}

const props = defineProps<Props>()

const isOpen = ref(true)
const contactInfo = computed(() => props.contactInfo)

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
