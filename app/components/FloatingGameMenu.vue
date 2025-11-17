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

const isOpen = ref(true)

const games: GameItem[] = [
    {
        name: 'Game 01',
        image: 'https://ufanance12.com/wp-content/uploads/2022/08/game01.png',
        url: ''
    },
    {
        name: 'Game 02',
        image: 'https://ufanance12.com/wp-content/uploads/2022/08/game02.png',
        url: ''
    },
    {
        name: 'Game 03',
        image: 'https://ufanance12.com/wp-content/uploads/2022/08/game03.png',
        url: ''
    },
    {
        name: 'Game 04',
        image: 'https://ufanance12.com/wp-content/uploads/2022/08/game04.png',
        url: ''
    },
    {
        name: 'Game 05',
        image: 'https://ufanance12.com/wp-content/uploads/2022/08/game05.png',
        url: ''
    },
    {
        name: 'Game 06',
        image: 'https://ufanance12.com/wp-content/uploads/2022/08/game06.png',
        url: ''
    },
    {
        name: 'Game 07',
        image: 'https://ufanance12.com/wp-content/uploads/2022/08/game07.png',
        url: ''
    },
    {
        name: 'Game 08',
        image: 'https://ufanance12.com/wp-content/uploads/2022/08/game08.png',
        url: ''
    },
    {
        name: 'Game 09',
        image: 'https://ufanance12.com/wp-content/uploads/2022/08/game09.png',
        url: ''
    },
    {
        name: 'Game 10',
        image: 'https://ufanance12.com/wp-content/uploads/2022/08/game10.png',
        url: ''
    }
]

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
