<template>
    <div class="page-template page-template-page page-template-deposit_viz3 page-template-pagedeposit_viz3-php page page-id-68">
        <HeadMobile></HeadMobile>
        <Header></Header>
        <FloatingGameMenu :games="floatingGames"></FloatingGameMenu>
        <FloatingContactMenu :contactInfo="contactInfo"></FloatingContactMenu>

        <DepositPage />

        <Footer></Footer>
        <FixedFooter></FixedFooter>
        <BackToTop></BackToTop>
    </div>
</template>

<script setup lang="ts">
interface FloatingGameItem {
    name: string
    image: string
    url: string
}

interface ContactInfo {
    line?: {
        url: string
        qrImage: string
        username: string
    }
    telegram?: {
        url: string
        qrImage: string
        icon: string
        username: string
    }
}

const floatingGames = ref<FloatingGameItem[]>([])
const contactInfo = ref<ContactInfo>({})

const fetchFloatingGames = async () => {
    try {
        const response = await fetch('/api/floating-games.json')
        if (response.ok) {
            const data = await response.json()
            floatingGames.value = data
        } else {
            console.error('Failed to fetch floating games data')
        }
    } catch (error) {
        console.error('Error fetching floating games:', error)
    }
}

const fetchContactInfo = async () => {
    try {
        const response = await fetch('/api/contact-info.json')
        if (response.ok) {
            const data = await response.json()
            contactInfo.value = data
        } else {
            console.error('Failed to fetch contact info data')
        }
    } catch (error) {
        console.error('Error fetching contact info:', error)
    }
}

onMounted(async () => {
    await Promise.all([fetchFloatingGames(), fetchContactInfo()])
})

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
