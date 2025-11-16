<template>
    <div
        v-if="props.visible"
        class="swal-overlay swal-overlay--show-modal"
        tabindex="-1"
        @click.self="handleClose"
    >
        <div class="swal-modal" role="dialog" aria-modal="true">
            <div class="swal-title">เงื่อนไขกิจกรรม!!</div>
            <div class="swal-text">
                <center>
                    เพียงเดิมพันค่ายเกมไหนก็ได้ จัดลำดับโดยลูกค้าที่มี PnL สูงที่สุด รับรางวัลฟรีๆไปเลย!!
                    <br /><br />
                    *PnL คือ ยอดสุทธิ = ยอดถอนรวมในวันกิจกรรม - ยอดฝากรวมในวันกิจกรรม - ยอดเครดิตคงเหลือก่อนร่วมกิจกรรม
                    <br /><br />
                    ตัวอย่างเช่น
                    <br />
                    ฝาก 1,000 บาท ถอน 20,000 บาท<br />การคำนวน PnL 20,000-1,000 = 19,000 คะแนน
                    <br /><br />
                    เงื่อนไข MVP คือเดิมพันมากกว่า 50,000 บาท และได้ PNL เป็น 10 เท่า คนแรกรับรางวัลไปเลย!
                    <br /><br />
                    <a style="color: red;">
                        *บริษัทขอสงวนสิทธ์ในการเปลี่ยนแปลงเงื่อนไข ยกเลิกได้ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า ทีมงานแอดมินขอเป็นกำลังใจให้นักเดิมพันทุกท่านโชคดีในการแข่งขันนะคะ
                    </a>
                </center>
            </div>
            <div class="swal-footer">
                <div class="swal-button-container">
                    <button class="swal-button swal-button--confirm" @click="handleClose">OK</button>
                    <div class="swal-button__loader">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{ close: [] }>()

const handleClose = () => {
    emit('close')
}
</script>
