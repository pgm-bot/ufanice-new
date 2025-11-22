<template>
    <div
        v-if="props.visible"
        class="swal-overlay swal-overlay--show-modal"
        tabindex="-1"
        @click.self="handleClose"
    >
        <div class="swal-modal" role="dialog" aria-modal="true">
            <div class="swal-title">{{ promoDetail?.title || 'เงื่อนไขกิจกรรม' }}</div>
            <div class="swal-text">
                <div v-if="promoDetail" v-html="promoDetail.content"></div>
                <div v-else style="text-align: center;">กำลังโหลดข้อมูล...</div>
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
interface PromoDetail {
    id: number
    title: string
    content: string
}

const props = defineProps<{
    visible: boolean
    promoId?: number
}>()

const emit = defineEmits<{ close: [] }>()

const promoDetail = ref<PromoDetail | null>(null)

const handleClose = () => {
    emit('close')
}

const loadPromoDetail = async (id: number) => {
    try {
        const response = await fetch('/api/promotion-details.json')
        const result = await response.json()
        if (result.status === 200 && result.data && result.data[id]) {
            promoDetail.value = result.data[id]
        }
    } catch (error) {
        console.error('Failed to load promotion details:', error)
    }
}

watch(() => props.promoId, (newId) => {
    if (newId && props.visible) {
        loadPromoDetail(newId)
    }
}, { immediate: true })

watch(() => props.visible, (isVisible) => {
    if (isVisible && props.promoId) {
        loadPromoDetail(props.promoId)
    }
})
</script>

<style scoped>
.swal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999999999;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
    padding: 20px;
    overflow-y: auto;
}

.swal-overlay--show-modal {
    opacity: 1;
    pointer-events: auto;
}

.swal-modal {
    width: 478px;
    max-width: 90%;
    max-height: calc(100vh - 40px);
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    transform: scale(0.8);
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: auto;
}

.swal-overlay--show-modal .swal-modal {
    opacity: 1;
    transform: scale(1);
}

.swal-title {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    padding: 24px 24px 10px;
    color: rgba(0, 0, 0, 0.65);
    flex-shrink: 0;
}

.swal-text {
    font-size: 16px;
    padding: 10px 24px 24px;
    text-align: center;
    color: rgba(0, 0, 0, 0.64);
    line-height: 1.4;
    overflow-y: auto;
    flex: 1;
    min-height: 0;
}

.swal-footer {
    background-color: #f8f8f8;
    border-top: 1px solid #e9e9e9;
    overflow: hidden;
    flex-shrink: 0;
}

.swal-button-container {
    margin: 0;
    padding: 10px;
    text-align: center;
}

.swal-button {
    background-color: #3085d6;
    color: #fff;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 24px;
    margin: 0;
    cursor: pointer;
    transition: background-color 0.2s;
}

.swal-button:hover {
    background-color: #2670ba;
}

.swal-button:active {
    background-color: #1f5a96;
}

.swal-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(48, 133, 214, 0.3);
}

.swal-button__loader {
    display: none;
}

@media (max-width: 576px) {
    .swal-modal {
        width: 90%;
        max-width: 90%;
    }

    .swal-title {
        font-size: 18px;
        padding: 20px 16px 10px;
    }

    .swal-text {
        font-size: 14px;
        padding: 10px 16px 20px;
    }
}
</style>
