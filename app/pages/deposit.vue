<template>
    <div class="page-template page-template-page page-template-deposit_viz3 page-template-pagedeposit_viz3-php page page-id-68">
        <HeadMobile></HeadMobile>
        <Header></Header>
        <FloatingGameMenu></FloatingGameMenu>
        <FloatingContactMenu></FloatingContactMenu>

        <DepositPage />

        <Footer></Footer>
        <FixedFooter></FixedFooter>
        <BackToTop></BackToTop>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'ฝากเงิน - UFANANCE',
    meta: [
        { name: 'description', content: 'ฝากเงินเข้าระบบ UFANANCE ง่ายๆ ด้วยระบบ QR Code และโอนผ่านธนาคาร' }
    ],
    link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
    ]
})
</script>
