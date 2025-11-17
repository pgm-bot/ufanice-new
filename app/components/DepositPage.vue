<template>
    <div class="wrapper-c">
        <div class="tt_l tt_full p_gl">
            <div id="ct_from" class="tt_l tt_full title_page">
                <h1 style="text-align: center;"> ฝากเงิน </h1>
            </div>
            <div class="tt_l tt_full tt_content bg">
                <div class="tt_l tt_full body_c">
                    <div class="tt_l tt_full">
                        <div class="">  </div>

                        <div class="tt_l tt_full fr_login" style="text-align: center; color: white; font-family: thaisanslite_r1;">
                            <div style="text-align: center;">
                                <img
                                    class="amd2"
                                    @click="showSection('deposite_bank')"
                                    src="/images/pay-bank.png"
                                    style="cursor: pointer;width:35%;display:none"
                                    alt="โอนผ่านธนาคาร"
                                >
                                <img
                                    class="amd2"
                                    id="btn_bank_qr2"
                                    @click="showSection('deposite_wallet')"
                                    src="/images/pay-gateway.png"
                                    style="cursor: pointer;width:35%;display:none"
                                    alt="QR Code/Gateway"
                                >
                            </div>

                            <div class="fr_center amd" style="font-size: clamp(25px, 2.5vw, 30px); color: red; width: 70%;">
                                <div class="tt_l tt_full deposit-head"></div>

                                <!-- Bank Transfer Section -->
                                <div id="deposite_bank" v-show="currentSection === 'deposite_bank'">
                                    <div class="bank-box kbank-box">
                                        <div class="kbank-box">
                                            <img class="mw-100 bankimg" src="https://ufanance12.com/wp-content/themes/ufanance.com/images/kbank-logo.png" style="display: inline;" alt="Kbank">
                                        </div>
                                    </div>
                                    <div class="bank-acc-info">
                                        <div class="w50 bdr">
                                            <a style="color: black; clamp(25px, 2.5vw, 30px);">เลขบัญชี</a>
                                            <p id="bank_acc" class="bank_acc" style="color: #ffc239;">ระบบฝากปิดปรับปรุงชั่วคราว</p>
                                        </div>
                                        <div class="w50">
                                            <a style="color: black; clamp(25px, 2.5vw, 30px);">ชื่อบัญชี</a>
                                            <p id="bank_name" class="bank_name" style="color: #ffc239;">จะเปิดให้บริการเวลา 02.00 น.ค่ะ</p>
                                        </div>
                                    </div>
                                    <div class="bank-acc-info">
                                        <button class="btn-copy copyb" @click="copyToClipboard('.bank_acc')">
                                            <i class="fa fa-copy"></i> คัดลอกเลขบัญชี
                                        </button>
                                    </div>
                                </div>

                                <!-- QR Code/Wallet Section -->
                                <div id="deposite_wallet" v-show="currentSection === 'deposite_wallet'">
                                    <div class="bank-acc-qr">
                                        <div id="btn_bank_qr" class="btn_bank-qr" @click="openQRPopup">
                                            <i class="fa fa-qrcode"></i> <span>{{ qrButtonText }}</span>
                                        </div>
                                    </div>

                                    <div id="popup_qr" class="popup_qr" :class="{ show_qr: showQRPopup }">
                                        <div class="popup-content_qr">
                                            <div class="ct_bank_qr" :class="{ acc: showQRSuccess }">
                                                <div class="head_bank_qr"><span>{{ qrHeaderText }}</span></div>

                                                <!-- QR Input Form -->
                                                <div class="ct_from_qr" :class="{ acc: showQRSuccess }">
                                                    <div class="head_bank_qr_info m_top" style="font-size: clamp(20px, 2.5vw, 25px);">
                                                        กรุณากรอกจำนวนเงินที่ต้องการฝาก<br>
                                                        <span style="color:red">(หลังกดสร้างรายการระบบจะสุ่มยอดจำนวนเงินให้ โปรดโอนตามยอดที่ระบุเท่านั้น)</span>
                                                    </div>
                                                    <div class="ct_input_qr">
                                                        <input
                                                            id="input-qr"
                                                            v-model.number="depositAmount"
                                                            type="number"
                                                            placeholder="จำนวนเงิน (บาท)"
                                                            min="100"
                                                            max="1000000"
                                                            class="input-qr"
                                                            style="font-family: thaisanslite_r1; font-size: clamp(20px, 2.5vw, 25px);"
                                                        >
                                                    </div>
                                                    <div class="ct_sec_qr">
                                                        <span
                                                            v-for="amount in quickAmounts"
                                                            :key="amount"
                                                            :class="`badge pointer${amount} badge-primary`"
                                                            @click="selectQuickAmount(amount)"
                                                            style="cursor: pointer;"
                                                        >
                                                            {{ formatNumber(amount) }}
                                                        </span>
                                                    </div>

                                                    <div class="ct_sec_qr " style="margin-top: 0px;">
                                                        <p class="hv" style="font-family: thaisanslite_r1; font-size: 25px; cursor: pointer;">
                                                            <img src="/images/button.png" style="max-width: 8%;" alt="Info">
                                                            <a href="#" @click.prevent="toggleVideo"> วิธีการชำระเงินด้วย QR Code</a>
                                                        </p>
                                                    </div>

                                                    <!-- Video Tutorial -->
                                                    <div class="clip" :class="{ active: showVideo }">
                                                        <video width="100%" height="auto" ref="videoPlayer" controls>
                                                            <source src="https://cdend.com/c2FnYW1lc2FnYW1lc2FnYW1lc2FnYW1lc2FnYW1lc2FnYW1l/UFANANCEFinal.mp4" type="video/mp4">
                                                            Your browser does not support the video tag.
                                                        </video>
                                                        <b class="close" @click="closeVideo">X</b>
                                                    </div>

                                                    <button id="closePopup_qr" @click="closeQRPopup">x</button>
                                                </div>

                                                <!-- QR Success Display -->
                                                <div class="ct_qr_success" :class="{ acc: showQRSuccess }">
                                                    <div class="h_bank_qr_info" style="color:red"><span>{{ qrWarning1 }}</span></div>
                                                    <div class="h_bank_qr_info" style="color:red"><span>{{ qrWarning2 }}</span></div>
                                                    <div class="h_bank_qr_info">
                                                        <i class="fa fa-clock"></i>
                                                        <span id="countdown">{{ countdown }}</span>
                                                    </div>
                                                    <div class="qr_img">
                                                        <img id="qrimg" :src="qrImageUrl" alt="QR Code">
                                                        <div style="font-size: 25px;padding:5px;font-family: thaisanslite_r1;" id="wallet_tf" v-html="walletInfo"></div>
                                                    </div>
                                                    <div class="num_bank_qr">
                                                        <p>ต้องโอนตามยอดที่ระบุไว้เท่านั้น!</p>
                                                        จำนวน <span id="amount_2">{{ qrAmount }}</span> บาท
                                                    </div>
                                                    <div class="h_bank_qr_info" style="color:red">(QRCode,เลขบัญชี ใช้ฝากได้ครั้งเดียวเท่านั้น)</div>
                                                    <div class="h_bank_qr_info" style="color:red">ฝากด้วยบัญชีที่ลงทะเบียนไว้เท่านั้น</div>
                                                    <div class="ct_qr_dsc" style="background-color:#9bf99c;">
                                                        <div class="ct_qr_dsc_l"></div>
                                                        <div style="text-align: center;">
                                                            <a class="h_bank_qr_info" id="qrimg_link" href="#" @click.prevent="downloadQR">
                                                                <i class="fa fa-download"></i> บันทึก QRCode
                                                            </a>
                                                        </div>
                                                        <div class="ct_qr_dsc_r"></div>
                                                    </div>
                                                    <button id="closePopup_qr2" @click="closeQRPopup">x</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="danger-a" style="margin: 10px">
                                    <a class="smallText" style="color: #ffc239; font-size: clamp(18px, 2.5vw, 25px);">
                                        ชื่อบัญชีฝากต้องตรงกับบัญชีถอน ไม่เช่นนั้นจะถอนเงินไม่ได้
                                    </a>
                                    <a class="" style="color: #ffc239; font-size: clamp(18px, 2.5vw, 25px);">
                                        (ระบบจะจับคู่ยอดเงินเครดิตเข้าบัญชีท่านอัติโนมัติ)
                                    </a>
                                </div>

                                <div class="user-bank-info" style="margin: 10px">
                                    <h1 class="alertText" style="font-size: clamp(20px, 2.5vw, 25px); color: black;">
                                        ใช้บัญชีด้านล่างสำหรับฝากเงินเท่านั้น
                                    </h1>
                                    <table class="table" style="margin: 10px">
                                        <thead class="thead-light" style="font-family: thaisanslite_r1;">
                                            <tr>
                                                <th scope="col">ธนาคาร</th>
                                                <th scope="col">ชื่อบัญชี</th>
                                                <th scope="col">เลขบัญชี</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-secondary" style="font-family: thaisanslite_r1; font-size: clamp(15px, 2.5vw, 25px);">
                                                <td class="text-secondary banktype" style="padding: 5px;">ธนาคาร ไทยพาณิชย์ จำกัด (มหาชน)</td>
                                                <td class="text-secondary" id="name_acc" style="padding: 5px;">ภาคภูมิ สุขงาม</td>
                                                <td class="text-secondary" id="account" style="padding: 5px;">2482605355</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="depositList">
                                    <div class="w50">
                                        <a class="timerange" style="font-family: thaisanslite_r1;">
                                            <i class="fa fa-check" aria-hidden="true"></i> ฟรีค่าทำเนียมการโอนเงินทุกธนาคาร
                                        </a>
                                    </div>
                                    <div class="w50">
                                        <a class="feefree" style="font-family: thaisanslite_r1;">
                                            <i class="fa fa-times" aria-hidden="true"></i> ห้ามโอนเงินในช่วงเวลา 23.00-23.59
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const currentSection = ref<'deposite_bank' | 'deposite_wallet'>('deposite_bank')
const depositAmount = ref<number | null>(null)
const countdown = ref(120)
const showQRPopup = ref(false)
const showQRSuccess = ref(false)
const showVideo = ref(false)
const qrImageUrl = ref('../../img/load.gif')
const qrAmount = ref('0')
const walletInfo = ref('')
const videoPlayer = ref<HTMLVideoElement | null>(null)

const quickAmounts = [100, 150, 200, 250, 300, 350, 400, 450, 500, 1000, 2000, 3000]

const qrButtonText = ref('คัดลอกเลขบัญชีฝาก')
const qrHeaderText = ref('คัดลอกเลขบัญชีฝาก')
const qrWarning1 = ref('สร้างรายการฝากใหม่ก่อนฝากทุกครั้ง')
const qrWarning2 = ref('กรุณาคัดลอกเลขบัญชีฝากภายในเวลาที่กำหนดเท่านั้น')

let countdownInterval: NodeJS.Timeout | null = null

const showSection = (section: 'deposite_bank' | 'deposite_wallet') => {
    currentSection.value = section
}

const formatNumber = (num: number): string => {
    return num.toLocaleString('th-TH')
}

const selectQuickAmount = (amount: number) => {
    depositAmount.value = amount
}

const openQRPopup = () => {
    showQRPopup.value = true
    depositAmount.value = null
    showQRSuccess.value = false
    qrImageUrl.value = '../../img/load.gif'
}

const closeQRPopup = () => {
    showQRPopup.value = false
    showQRSuccess.value = false
    if (countdownInterval) {
        clearInterval(countdownInterval)
    }
}

const toggleVideo = () => {
    showVideo.value = !showVideo.value
    if (showVideo.value && videoPlayer.value) {
        videoPlayer.value.play()
        videoPlayer.value.currentTime = 0
    }
}

const closeVideo = () => {
    showVideo.value = false
    if (videoPlayer.value) {
        videoPlayer.value.pause()
        videoPlayer.value.currentTime = 0
    }
}

const copyToClipboard = async (selector: string) => {
    const element = document.querySelector(selector)
    if (element) {
        const text = element.textContent || ''
        try {
            await navigator.clipboard.writeText(text)
            alert('คัดลอกเรียบร้อยแล้ว')
        } catch (err) {
            console.error('Failed to copy:', err)
            alert('ไม่สามารถคัดลอกได้')
        }
    }
}

const generateQR = async () => {
    if (!depositAmount.value || depositAmount.value < 100) {
        alert('กรุณากรอกจำนวนเงินขั้นต่ำ 100 บาท')
        return
    }

    qrButtonText.value = 'สแกน QRCode ฝาก'
    qrHeaderText.value = 'สแกน QRCode ฝาก'
    qrWarning1.value = 'สร้าง QRCode ใหม่ก่อนฝากทุกครั้ง'
    qrWarning2.value = 'กรุณาสแกนฝากภายในเวลาที่กำหนดเท่านั้น'

    walletInfo.value = ''
    showQRSuccess.value = true
    countdown.value = 120

    // Start countdown
    if (countdownInterval) {
        clearInterval(countdownInterval)
    }

    countdownInterval = setInterval(() => {
        if (countdown.value <= 0) {
            if (countdownInterval) clearInterval(countdownInterval)
            countdown.value = 0
        } else {
            countdown.value--
        }
    }, 1000)

    // TODO: Call API to generate QR code
    // Simulating API call
    setTimeout(() => {
        const amount = depositAmount.value?.toFixed(2) || '0'
        qrAmount.value = amount
        alert(`กรุณาโอนยอด ${amount} บาท เท่านั้น`)

        // For now, show placeholder
        // In production, replace with actual QR code from API
        qrImageUrl.value = '../../img/load.gif'
    }, 500)
}

const downloadQR = async () => {
    const img = document.getElementById('qrimg') as HTMLImageElement
    if (!img || !img.src || img.src.includes('load.gif')) {
        alert('กรุณาสร้าง QR Code ก่อน')
        return
    }

    try {
        const response = await fetch(img.src)
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.download = 'qrcode.png'
        a.href = url
        a.style.display = 'none'
        document.body.appendChild(a)
        a.click()
        setTimeout(() => {
            URL.revokeObjectURL(url)
            a.remove()
        }, 1000)
    } catch (err) {
        console.error('Failed to download QR code:', err)
        alert('ไม่สามารถดาวน์โหลด QR Code ได้')
    }
}

// Watch for when user clicks generate button
watch(() => depositAmount.value, (newVal) => {
    if (newVal && newVal >= 100 && showQRPopup.value && !showQRSuccess.value) {
        // User can manually trigger QR generation by clicking a button
        // For now, we'll auto-generate when amount changes
    }
})

onMounted(() => {
    // Add event listener for QR generation button if needed
    const btnBankQr = document.getElementById('btn_bank_qr')
    if (btnBankQr) {
        btnBankQr.addEventListener('click', () => {
            if (depositAmount.value && depositAmount.value >= 100) {
                generateQR()
            }
        })
    }
})

onUnmounted(() => {
    if (countdownInterval) {
        clearInterval(countdownInterval)
    }
})
</script>
<style scoped>
.kbank-box {
    background-color: #4d2b82;
    background-color: #257b4b;
}
</style>