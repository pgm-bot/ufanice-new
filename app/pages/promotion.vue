<template>
      <Header></Header>
      <HeadMobile></HeadMobile>
      <div class="wrapper-c">
        <div class="tt_l tt_full p_gl">
          <div id="ct_from" class="tt_l tt_full title_page">
          <h1>โปรโมชั่น</h1>
        </div>
  <div class="tt_l tt_full tt_content bg">
    <div class="thaitheme_read">
      <p style="max-width: 680px; margin-inline: auto;">
         <img src="/img/promotion/tournament/promote/12.jpg"
              alt="UFANICE โปรโมชั่นจัดเต็ม" width="980">
       </p>
   
       <hr>
   
       <!-- โปร 1: สมาชิกใหม่รับโบนัส 50% -->

        <div v-for="item in result.data" :key="item.id">
          <p style="text-align: center">
         <img :src="`/img/promotion/${item.bonus_id}.png`" 
              alt="สมาชิกใหม่รับโบนัส 50%" width="680" height="210">
       </p>
       <p style="text-align: center" v-html="item.bonus_info" />
       <p style="text-align: center" v-html="item.bonus_red_info" />
       <p v-html="item.bonus_red_info" />
    
   
       <hr>
        </div>

   
       <!-- โปร 2: ฝากครั้งแรกของวันรับโบนัส 10% -->
       <p style="text-align: center">
         <img src="/img/promotion/2.jpg"
              alt="ฝากครั้งแรกของวันรับโบนัส 10%" width="680" height="210">
       </p>
       <p style="text-align: center">
         <strong>โปรโมชั่น<br>โบนัสคาสิโนออนไลน์ – ฝากครั้งแรกของวันรับโบนัส 10%</strong><br>
         รับโบนัสสูงสุดไม่เกิน 1000 บาท เดิมพันกีฬา ทำเทิร์น 10 เท่า เล่นคาสิโน ทำเทิร์น 20 เท่า<br>
         * หากทีมงานตรวจสอบว่ามีการรับโบนัสเพื่อแทงสวน ทางทีมงานจะไม่ทำรายการถอนให้ทุกกรณี<br>
         ** หากรับโบนัสอยู่จะไม่สามารถเล่นเกมที่ซื้อ Freespin ได้ทุกเกม<br>
         *** โปรโมชั่นนี้จะไม่นับยอดเทิร์นตัวเกมประเภทยิงปลา<br>
         ==&gt; <strong><a href="/login_/#target">รับโบนัส</a></strong> &lt;==
       </p>
   
       <hr>
   
       <!-- โปร 3: โบนัสวันเกิด -->
       <p style="text-align: center">
         <img src="/img/promotion/promotion_1.jpg"
              alt="โบนัสวันเกิด" width="680" height="210">
       </p>
       <p style="text-align: center">
         <strong>โปรโมชั่น<br>โบนัสคาสิโนออนไลน์ – โบนัสวันเกิด</strong><br>
         โบนัสวันเกิด รับไปเลยค่ะ 500 เครติดฟรีๆ เพียงแค่นำบัตรประชาชนของท่านมาแสดงตรงกับวันเกิด<br>
         1. ต้องเป็นลูกค้าประจำที่มีรายการเล่นอย่างน้อย 3 วันขึ้นไปต่ออาทิตย์<br>
         2. มียอดเดิมพัน ได้ / เสีย รวมกันให้ได้ 1,000 บาท (ต้องภายในวันเกิดเท่านั้น)<br>
         3. ต้องมีการเปิดยูสมาอย่างน้อย 15 วัน<br>
         ==&gt; <strong><a href="https://line.me/ti/p/~@UFANICE" target="_blank">รับโบนัส</a></strong> &lt;==
       </p>
   
       <hr>
   
       <!-- โปร 4: แทงถูกหรือผิดติดกัน 10 ตารวด -->
       <p style="text-align: center">
         <img src="/img/promotion/promotion_2.jpg"
              alt="แทงถูกหรือแทงผิดติดกัน 10 ตารวด" width="680" height="210">
       </p>
       <p style="text-align: center">
         <strong>โปรโมชั่น<br>โบนัสคาสิโนออนไลน์ – แทงถูกหรือแทงผิดติดกัน 10 ตารวด</strong><br>
         เงื่อนไขกิจกรรม ชนะ/แพ้ 10 ตาติดกันรวด โดยไม่มีเกมส์เสมอคั่น<br>
         ในเกมส์บาคาร่าที่เดิมพันแบบ Banker/Player เท่านั้น<br>
         รับทันทีรางวัลตอบแทนเท่ายอดสูงสุดที่แทงใน 10 ตานั้น แต่ไม่เกิน 5,000 บาท<br>
         ติดต่อรับรางวัลได้ 1 ครั้งต่อวัน ภายในวันที่มีรายการเล่น<br>
         ==&gt; <strong><a href="https://line.me/ti/p/~@UFANICE" target="_blank">รับโบนัส</a></strong> &lt;==
       </p>
   
       <hr>
   
       <!-- โปร 5: รับเครดิตเงินคืน 0.3% -->
       <p style="text-align: center">
         <img src="/img/promotion/promotion_3.jpg"
              alt="รับเครดิตเงินคืน 0.3%" width="680" height="210">
       </p>
       <p style="text-align: center">
         <strong>โปรโมชั่น<br>โบนัสคาสิโนออนไลน์ – รับเครดิตเงินคืน</strong><br>
         รับโบนัสทันที 0.3% ของยอดเดิมพัน ยิ่งเล่นเยอะยิ่งได้คืนเยอะ!!!<br>
         ==&gt; <strong><a href="/return/">รับโบนัส</a></strong> &lt;==
       </p>
   
       <hr>
   
       <!-- โปร 6: แนะนำเพื่อน -->
       <p style="text-align: center">
         <img src="/img/promotion/promotion_4.jpg"
              alt="แนะนำเพื่อนมาร่วมสนุกกับเรา" width="680" height="210">
       </p>
       <p style="text-align: center">
         <strong>โปรโมชั่น<br>โบนัสคาสิโนออนไลน์ – แนะนำเพื่อนมาร่วมสนุกกับเรา</strong><br>
         แนะนำเพื่อนมาร่วมสนุกกับเรา รับโบนัสทันที 0.6% ของยอดเดิมพันของเพื่อน<br>
         ชวนครั้งเดียวรับได้ตลอดชีวิต!!!<br>
         ==&gt; <strong><a href="/affiliate">รับโบนัส</a></strong> &lt;==
       </p>
   
       <hr>
   
       <!-- โปร 7: เปิดไพ่ชิงเงินล้าน -->
       <p style="text-align: center">
         <img src="/img/promotion/promotion_5.jpg"
              alt="เปิดไพ่ชิงเงินล้าน" width="680" height="210">
       </p>
       <p style="text-align: center">
         <strong>โปรโมชั่น<br>โบนัสคาสิโนออนไลน์ – เปิดไพ่ชิงเงินล้าน</strong><br>
         เปิดไพ่เสี่ยงโชค ลุ้นเงินล้านทุกวัน แจกเงินทุกวันสูงสุดวันละ 5,000,000 บาท<br>
         กดรับได้วันละครั้งเท่านั้น!<br>
         ==&gt; <strong><a href="/เปิดไพ่รับเงินแจกล้าน/">รับโบนัส</a></strong> &lt;==
       </p>
   
       <hr>
   
       <!-- โปร 8: ปั่นกงล้อเสี่ยงโชค -->
       <p style="text-align: center">
         <img src="/img/promotion/promotion_6.jpg"
              alt="ปั่นกงล้อเสี่ยงโชค" width="680" height="210">
       </p>
       <p style="text-align: center">
         <strong>โปรโมชั่น<br>โบนัสคาสิโนออนไลน์ – ปั่นกงล้อเสี่ยงโชค</strong><br>
         ปั่นกงล้อเสี่ยงโชค ลุ้นเงินลุ้นทองทุกวัน เพียงแค่คุณมียอดเสียต่อวัน 1000 บาทขึ้นไป<br>
         สามารถหมุนกงล้อได้ทันที ยิ่งเสียเยอะรางวัลก็จะได้ตาม<br>
         กดรับได้วันละครั้งเท่านั้น!<br>
         ==&gt; <strong><a href="/หมุนกงล้อเสี่ยงโชค/">รับโบนัส</a></strong> &lt;==
       </p>
    </div>
  </div>
  </div>
  </div>
  <Footer></Footer>
  <FixedFooter></FixedFooter>
  <BackToTop></BackToTop>
  </template>

  <script setup lang="ts">
  const api = useApi()
  useHead({
    title: 'โปรโมชั่น - UFANICE',
    meta: [
      { name: 'description', content: 'โปรโมชั่นของ UFANICE' }
    ]
  })
  //  const promotionPost = await $fetch<{ status: number; message: string; data: any }>('/api/bonus/showbonus', {
  //           method: 'GET',
  //       })
  const result = await api.get<{ status: number; message: string; data: any }>(`/api/v1/bonus/showbonus`)


        // console.log(promotionPost)
  </script>