<template>
    <!-- Component นี้ไม่แสดง DOM แต่จะแสดง SweetAlert2 popup -->
</template>

<script setup lang="ts">
import 'sweetalert2/dist/sweetalert2.min.css'

const props = defineProps<{
    autoShow?: boolean
    delay?: number
}>()

const { showUrlChangeNotification } = useSweetAlert()

onMounted(() => {
    if (process.client && props.autoShow !== false) {
        // แสดง notification หลังจาก delay (default 500ms)
        setTimeout(() => {
            showUrlChangeNotification()
        }, props.delay || 500)
    }
})

// Export methods สำหรับเรียกใช้จากภายนอก
defineExpose({
    show: showUrlChangeNotification
})
</script>
<style>
.swal2-container {
  z-index: 99999999999;
}
</style>