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

<style scoped>
/* ========================================
   Floating Game Menu - จาก css.css
   ======================================== */

/* 1. Main Container */
#topbar2 {
    position: fixed;
    top: 65px;
    left: 5px;
    width: 195px;
    z-index: 999999999999;
    padding: 10px 0px 0px 0px;
    -webkit-transition: all 0.5s ease-in-out 0s;
    -o-transition: all 0.5s ease-in-out 0s;
    -moz-transition: all 0.5s ease-in-out 0s;
    transition: all 0.5s ease-in-out 0s;
}

/* 2. Game Icons Links */
#topbar2 a {
    float: left;
    width: 46%;
    margin-right: 5px;
    margin-bottom: 3px;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.5s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

#topbar2 a:hover {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transform: scale(1.05);
}

/* 3. Control Buttons */
.tt_btn_open2,
.tt_btn_close2 {
    float: left;
    width: 25px;
    height: 25px;
    background-color: #333;
    margin: 0px 0px 10px 0px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.tt_btn_open2:hover,
.tt_btn_close2:hover {
    background-color: #f3c31a;
    color: #000;
}

.tt_btn_close2 .fa,
.tt_btn_open2 .fa {
    font-size: 16px;
    line-height: 26px;
}

/* 4. Toggle States */
#topbar2.tt_open2 .tt_img_fixed2,
.tt_open2 .tt_btn_close2,
.tt_btn_open2 {
    display: none;
    position: relative;
}

.tt_open2 .tt_btn_open2 {
    display: block;
}

/* 5. Hover Effect - imghvr-fold-down */
figure.imghvr-fold-down {
    position: relative;
    overflow: hidden;
    margin: 0;
    width: 100%;
    background: #000;
}

figure.imghvr-fold-down img {
    max-width: 100%;
    display: block;
    position: relative;
}

figure.imghvr-fold-down figcaption {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.35s ease;
    transform: rotateX(-90deg);
    transform-origin: 50% 0%;
}

figure.imghvr-fold-down figcaption img {
    max-width: 80%;
    height: auto;
    filter: brightness(1.2);
}

figure.imghvr-fold-down:hover figcaption {
    opacity: 1;
    transform: rotateX(0deg);
}

figure.imghvr-fold-down:hover img {
    opacity: 0.5;
}

/* 6. Utility */
.tt_l {
    float: left;
}

.tt_full {
    width: 100%;
}

/* ========================================
   Responsive Design
   ======================================== */

@media screen and (max-width: 1024px) {
    #topbar2 {
        width: 180px;
    }

    #topbar2 a {
        width: 47%;
    }
}

@media screen and (max-width: 768px) {
    #topbar2 {
        width: 160px;
        top: 60px;
        left: 3px;
    }

    #topbar2 a {
        width: 48%;
        margin-right: 2px;
        margin-bottom: 2px;
    }

    .tt_btn_open2,
    .tt_btn_close2 {
        width: 22px;
        height: 22px;
    }

    .tt_btn_close2 .fa,
    .tt_btn_open2 .fa {
        font-size: 14px;
        line-height: 22px;
    }
}

@media screen and (max-width: 480px) {
    #topbar2 {
        width: 140px;
        top: 55px;
        left: 2px;
        padding: 5px 0 0 0;
    }

    #topbar2 a {
        width: 48%;
    }

    .tt_btn_open2,
    .tt_btn_close2 {
        width: 20px;
        height: 20px;
    }

    .tt_btn_close2 .fa,
    .tt_btn_open2 .fa {
        font-size: 12px;
        line-height: 20px;
    }
}

/* Hide on very small screens */
@media screen and (max-width: 360px) {
    #topbar2 {
        display: none;
    }
}
</style>
