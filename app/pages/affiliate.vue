<template>
  <div>
    <Header />
    <HeadMobile />

    <!-- ให้ AffiliatePage จัดการทุกอย่างเอง -->
    <AffiliatePage />

    <Footer />
    <FixedFooter />
  </div>
</template>

<script setup lang="ts">
import AffiliatePage from '~/components/Affiliate/AffiliatePage.vue'

useHead({
  title: 'แนะนำเพื่อน - UFANICE',
  meta: [
    {
      name: 'description',
      content:
        'แนะนำเพื่อนรับ 0.6% ของยอดเทิร์นโอเวอร์ทุกยอดการแทง UFANICE'
    }
  ]
})
</script>

<style  scoped>

  body {
  font-family: 'thaisanslite_r1', sans-serif;
  font-size: 16px; /* เพิ่มฐานตัวหนังสือ */
  line-height: 1.55;
  color: #000;
}

/* ขยายตัวหนังสือที่เล็กเกินไป */
small,
.text-xs,
.text-xxs,
label,
th,
td {
  font-size: 15px !important;
}

/* รายการที่ต้องเน้นให้ใหญ่ขึ้น */
input,
button,
select {
  font-size: 16px !important;
}

h1 {
  font-size: 26px;
  font-weight: bold;
}

h2 {
  font-size: 22px;
  font-weight: bold;
}

h3 {
  font-size: 18px;
  font-weight: bold;
}

/* ข้อความรายละเอียดที่ชอบทำเล็ก */
.description,
.note,
.text-muted {
  font-size: 15px !important;
}


</style>
