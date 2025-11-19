<template>
    <div id="topbar2" :class="{ tt_open2: !isOpen }">
        <div class="tt_l tt_full">
            <div class="tt_btn_close2" @click="toggleMenu">
                <i class="fa fa-times"></i>
            </div>
            <div class="tt_btn_open2" @click="toggleMenu">
                <i class="fa fa-plus"></i>
            </div>
        </div>

        <a v-for="(game, index) in games" :key="index" class="tt_l tt_img_fixed2" target="_blank" :href="game.url">
            <figure class="imghvr-fold-down">
                <img :src="game.image" :alt="game.name">
                <figcaption>
                    <img :src="game.image" :alt="game.name">
                </figcaption>
            </figure>
        </a>
    </div>
</template>

<script setup lang="ts">
interface GameItem {
    name: string
    image: string
    url: string
}

interface Props {
    games?: GameItem[]
}

const props = withDefaults(defineProps<Props>(), {
    games: () => []
})

const isOpen = ref(true)
const games = computed(() => props.games)

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
