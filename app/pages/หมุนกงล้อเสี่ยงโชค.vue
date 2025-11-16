<template>
    <div class="page-template page-template-page page-template-spin-wheel page-template-pagespinwheel-php page page-id-92">
        <HeadMobile></HeadMobile>
        <Header></Header>
        <FloatingGameMenu></FloatingGameMenu>
        <FloatingContactMenu></FloatingContactMenu>

        <SpinWheelPage />

        <Footer></Footer>
        <FixedFooter></FixedFooter>
        <BackToTop></BackToTop>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'หมุนกงล้อเสี่ยงโชค - UFANANCE',
    meta: [
        { name: 'description', content: 'หมุนกงล้อเสี่ยงโชค ลุ้นรับโบนัสทุกวัน ยอดเสีย 1,000 บาท รับสิทธิ์ปั่นกงล้อ 1 ครั้ง UFANANCE' }
    ],
    link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
    ]
})
</script>
