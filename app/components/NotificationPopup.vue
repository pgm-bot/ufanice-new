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
/* Custom SweetAlert2 styling */
.swal2-container {
    z-index: 99999999 !important;
}

.swal2-popup {
    font-family: thaisanslite_r1, 'ThaiSansLite', sans-serif !important;
}

.swal2-title {
    font-size: 24px !important;
    font-weight: bold !important;
    color: #000 !important;
}

.swal2-content {
    font-size: 16px !important;
    color: #333 !important;
}

.swal2-image {
    max-width: 100% !important;
    margin: 15px auto !important;
}

.swal2-confirm {
    font-family: thaisanslite_r1, 'ThaiSansLite', sans-serif !important;
    font-size: 18px !important;
    padding: 10px 30px !important;
}

/* Progress Steps Styling */
.swal2-progress-steps {
    margin-bottom: 20px !important;
}

.swal2-progress-step {
    background: #ddd !important;
    color: #666 !important;
    font-size: 14px !important;
    padding: 8px 12px !important;
    border-radius: 50% !important;
}

.swal2-active-progress-step {
    background: #3085d6 !important;
    color: #fff !important;
}

.swal2-progress-step-line {
    background: #ddd !important;
    width: 40px !important;
    height: 2px !important;
}

/* Responsive */
@media screen and (max-width: 768px) {
    .swal2-popup {
        width: 90% !important;
        padding: 20px !important;
    }

    .swal2-title {
        font-size: 20px !important;
    }

    .swal2-content {
        font-size: 14px !important;
    }

    .swal2-confirm {
        font-size: 16px !important;
        padding: 8px 20px !important;
    }

    .swal2-progress-step {
        font-size: 12px !important;
        padding: 6px 10px !important;
    }

    .swal2-progress-step-line {
        width: 30px !important;
    }
}

@media screen and (max-width: 480px) {
    .swal2-popup {
        width: 95% !important;
        padding: 15px !important;
    }

    .swal2-title {
        font-size: 18px !important;
    }

    .swal2-content {
        font-size: 13px !important;
    }

    .swal2-image {
        max-width: 90% !important;
    }
}
</style>
