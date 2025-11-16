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

<style scoped>
/* ========================================
   Floating Contact Menu - จาก css.css
   ======================================== */

/* 1. Main Container */
#topbar {
    position: fixed;
    width: 165px;
    z-index: 999999999;
    right: 10px;
    top: 65px;
    padding: 10px 0px 0px 0px;
    -webkit-transition: all 0.5s ease-in-out 0s;
    -o-transition: all 0.5s ease-in-out 0s;
    -moz-transition: all 0.5s ease-in-out 0s;
    transition: all 0.5s ease-in-out 0s;
}

/* 2. Toggle Buttons */
.tt_btn_open,
.tt_btn_close {
    float: right;
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

.tt_btn_open:hover,
.tt_btn_close:hover {
    background-color: #f3c31a;
    color: #000;
}

.tt_btn_close .fa,
.tt_btn_open .fa {
    font-size: 16px;
    line-height: 26px;
}

/* 3. Toggle States */
#topbar.tt_open .tt_img_fixed {
    display: none;
}

.tt_open .tt_btn_close,
.tt_btn_open {
    display: none;
}

.tt_open .tt_btn_open {
    display: block;
}

/* 4. Contact Links */
.tt_img_fixed {
    float: left;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
}

.tt_img_fixed img {
    width: 100%;
    display: block;
}

.tt_img_fixed:hover {
    opacity: 0.9;
    transform: translateY(-2px);
}

/* 5. LINE Text Label */
.tt_tx_line {
    float: left;
    width: 100%;
    font-size: 13px;
    color: #fff;
    text-align: center;
    margin: 0px 0px 0px 0px;
    padding: 5px 0px 5px 0px;
    background-color: #57c42e;
    font-weight: 600;
}

/* 6. Telegram Specific */
.fx_telegram {
    margin: 10px 0px 0px 0px;
}

.tt_tx_telegram {
    float: left;
    width: 100%;
    font-size: 13px;
    color: #000;
    text-align: center;
    margin: 0px 0px 0px 0px;
    padding: 7px 3px 7px 3px;
    background-color: #b1e2f7;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.tt_tx_telegram img {
    width: 25px;
    height: auto;
}

/* 7. Utility */
.float-left {
    float: left;
}

.float-right {
    float: right;
}

/* ========================================
   Responsive Design
   ======================================== */

@media screen and (max-width: 1024px) {
    #topbar {
        width: 150px;
        right: 8px;
    }
}

@media screen and (max-width: 768px) {
    #topbar {
        width: 140px;
        right: 5px;
        top: 60px;
    }

    .tt_btn_open,
    .tt_btn_close {
        width: 22px;
        height: 22px;
    }

    .tt_btn_close .fa,
    .tt_btn_open .fa {
        font-size: 14px;
        line-height: 22px;
    }

    .tt_tx_line,
    .tt_tx_telegram {
        font-size: 11px;
        padding: 4px 2px;
    }

    .tt_tx_telegram img {
        width: 20px;
    }
}

@media screen and (max-width: 480px) {
    #topbar {
        width: 120px;
        right: 3px;
        top: 55px;
    }

    .tt_btn_open,
    .tt_btn_close {
        width: 20px;
        height: 20px;
    }

    .tt_btn_close .fa,
    .tt_btn_open .fa {
        font-size: 12px;
        line-height: 20px;
    }

    .tt_tx_line,
    .tt_tx_telegram {
        font-size: 10px;
        padding: 3px 1px;
    }

    .tt_tx_telegram img {
        width: 18px;
    }
}

/* Hide on very small screens */
@media screen and (max-width: 360px) {
    #topbar {
        display: none;
    }
}
</style>
