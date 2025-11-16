<template>
    <div class="page-template page-template-page page-template-monthly-reward page-template-pagemonthlyreward-php page page-id-90">
        <HeadMobile></HeadMobile>
        <Header></Header>
        <FloatingGameMenu></FloatingGameMenu>
        <FloatingContactMenu></FloatingContactMenu>

        <MonthlyRewardPage />

        <Footer></Footer>
        <FixedFooter></FixedFooter>
        <BackToTop></BackToTop>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'รางวัลประจำเดือน - UFANANCE',
    meta: [
        { name: 'description', content: 'รางวัลประจำเดือน แจกรางวัลลูกค้าที่มียอดรับเงินคืนสูงสุด และยอดแนะนำเพื่อนสูงสุด UFANANCE' }
    ],
    link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
    ]
})
</script>
