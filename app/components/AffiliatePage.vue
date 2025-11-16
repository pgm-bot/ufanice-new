<template>
    <div class="wrapper-c">
        <div class="tt_l tt_full p_gl">
            <div id="ct_from" class="tt_l tt_full title_page">
                <h1>ข้อมูลแนะนำเพื่อน</h1>
            </div>
            <div class="tt_l tt_full tt_content bg">
                <div class="tt_l tt_full body_c">
                    <div class="tt_l tt_full">
                        <div class="thaitheme_read">
                            <h1 class="entry-title"><span class="icon-bar"></span>แนะนำเพือน รับทันที 0.6% ของยอดได้เสียของคนแนะนำ</h1>

                            <div class="card-header-info" style="background: #479988;padding: 0px 10px 0px 10px; color: white">
                                แนะนำเพือน อัพเดทล่าสุด ท่านจะได้รับ 0.6% ยอดเทิร์นโอเวอร์ เมื่อผู้ที่สมัครผ่านลิ้งค์ของท่านเข้าเล่น <br>
                                ยอดเงินจะอัพเดทอัติโนมัติ เวลา 13.20น. ของทุกวัน
                            </div>

                            <div id="linkaff_" style="display: none;" class="form-control tt_fr aff">{{ affiliateLink }}</div>

                            <div class="tt_l tt_full fr_sec">
                                <label class="tt_l fr_tx2x">Link แนะนำ</label>
                                <input class="form-control tt_bk aff" readonly name="link1763273953" :value="affiliateLink" @click="selectAndCopy">
                            </div>

                            <a style="cursor: pointer;" class="btn btn-block btn-dark-green btn-lg btn-copy ml-0" @click="copyToClipboard">
                                <i class="far fa-copy"></i> คัดลอก link
                            </a>

                            <div class="tt_l tt_full fr_sec">
                                <label class="tt_l fr_tx2x">จำนวนเพื่อนที่ แนะนำ</label>
                                <span class="form-control tt_bk aff_c tt_l fr_tx2x" style="width: 70%; background: none; border: none;" readonly>{{ referralCount }}</span>
                            </div>

                            <div class="tt_l tt_full fr_sec">
                                <label class="tt_l fr_tx2x">จำนวนเครดิตแนะนำ</label>
                                <input class="form-control tt_bk tt_l fr_tx2x aff_am" style="width: 70%; background: none; border: none;" readonly :value="formatCurrency(affiliateCredit)">
                            </div>

                            <div>
                                <button class="tt_l tt_ful fr_submit_bk btn-copy" @click="transferCredit">โอนเงินเข้าเครติต</button>
                                <div class="tt_l tt_full fr_tx1">*ยอดขั้นต่ำ 500 บาท จึงจะโอนเข้าเครดิตได้</div>
                            </div>

                            <br>

                            <!-- Referral Members Table -->
                            <div class="tt_l tt_full fr_tx1">
                                <div class="table100 ver1 m-b-110" style="margin: auto; width: 90%; padding-top: 5px;">
                                    <div class="table100-body js-pscroll ps ps--active-y">
                                        <table>
                                            <tbody id="memaff">
                                                <tr class="row100 body">
                                                    <td class="cell100 column2x" style="text-align: center;">User</td>
                                                    <td class="cell100 column1x" style="text-align: center;">รายได้ของท่าน</td>
                                                </tr>
                                                <tr v-for="member in referralMembers" :key="member.id" class="row100 body">
                                                    <td class="cell100 column2x" style="text-align: center;">{{ member.username }}</td>
                                                    <td class="cell100 column1x" style="text-align: center;">{{ formatCurrency(member.income) }}</td>
                                                </tr>
                                                <tr v-if="referralMembers.length === 0">
                                                    <td colspan="2" style="text-align: center;">ไม่มีรายการ</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <!-- Share Buttons -->
                            <table style="width: 100%; border: none;">
                                <tbody>
                                    <tr>
                                        <td class="tt_l tt_full fr_tx1" style="width: 33%; border: none;">
                                            <div style="text-align: center">
                                                <a class="afflink1" :href="`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(affiliateLink)}`" style="text-decoration: none;" target="_blank">
                                                    <img src="/images/line-icon.png" style="max-width: 80%; width: 100px;">
                                                    <br>แนะนำผ่าน LINE
                                                </a>
                                            </div>
                                        </td>
                                        <td class="tt_l tt_full fr_tx1" style="width: 33%; border: none;">
                                            <div style="text-align: center">
                                                <a class="afflink2" :href="`fb-messenger://share/?link=${encodeURIComponent(affiliateLink)}`" style="text-decoration: none;" target="_blank">
                                                    <img src="/images/messenger-icon.png" style="max-width: 80%; width: 100px;">
                                                    <br>แนะนำผ่าน Messenger
                                                </a>
                                            </div>
                                        </td>
                                        <td class="tt_l tt_full fr_tx1" style="width: 33%; border: none;">
                                            <div style="text-align: center">
                                                <a class="afflink3" :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(affiliateLink)}`" style="text-decoration: none;" target="_blank">
                                                    <img src="/images/facebook-icon.png" style="max-width: 80%; width: 100px;">
                                                    <br>แนะนำผ่าน Facebook
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div style="text-align: center">
                                <img class="aligncenter wp-image-9796 size-full" src="/images/affiliate-banner.jpg" alt="ระบบแนะนำเพื่อนแบบขั้นขันได" width="1080" height="1080">
                                <p class="tt_l tt_full fr_tx1">
                                    <b class="tt_l tt_full fr_tx1">ลิ้งค์ช่วยแชร์รับ <span>0.6%</span> ฟรี ทุกยอดการแทง</b> (แค่ก๊อปปี้ลิ้งค์ไปแชร์ก็ได้เงินแล้ว) ยิ่งแชร์มากยิ่งได้มาก<br><br>
                                    ท่านสามารถนำลิ้งค์ด้านล่างนี้หรือนำป้ายแบนเนอร์ ไปแชร์ในช่องทางต่างๆ ไม่ว่าจะเป็น เว็บไชต์ส่วนตัว, Blog, Facebook หรือ Social Network อื่นๆ หากมีการสมัครสมาชิกโดยคลิกผ่านลิ้งค์ของท่านเข้ามา ลูกค้าที่สมัครเข้ามาก็จะอยู่ภายให้เครือข่ายของท่านทันที และหากลูกค้าภายใต้เครือข่ายของท่านมีการเดิมพันเข้ามา ทุกยอดการเดิมพัน ท่านจะได้รับส่วนแบ่งในการแนะนำ 0.6% ทันทีโดยไม่มีเงื่อนไข
                                    <br><br><u>ตัวอย่างเช่น...</u><br><br>

                                    -เพื่อนลำดับที่ 1 ท่านจะได้รับส่วนแบ่ง เริ่มต้นในขั้นแรก 0.6% <br>

                                    <u>ตัวอย่างเช่น..</u> ลูกค้าท่าน 1 คน แทง 1,000 บาท ท่านจะได้ 6 บาท (ท่านจะได้ทุกรายการแทงของลูกค้า)<br><br>

                                    -เพื่อนลำดับที่ 2 ท่านจะได้รับส่วนแบ่ง เริ่มต้นในขั้นแรก 0.06% <br>

                                    <u>ตัวอย่างเช่น..</u> ลูกค้าท่าน 1 คน แทง 10,000 บาท ท่านจะได้ 6 บาท (ท่านจะได้ทุกรายการแทงของลูกค้า)<br><br>

                                    สามารถทำรายได้เดือน 100,000 บาทง่ายๆเลยทีเดียว และรายได้ทุกบาททุกสตางค์ของท่านสามารถตรวจสอบได้ทุกขั้นตอน งานนี้แจกจริง จริงจ่าย ที่นี้ที่เดียวที่ให้คุณมากกว่าใคร ก๊อปปี้ลิ้งค์ด้านบนและข้อความด้านล่างนี้ นำไปแชร์ได้เลย
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface ReferralMember {
    id: number
    username: string
    income: number
}

const { showSuccess, showError } = useSweetAlert()

// TODO: Replace with actual user data from cookie/API
const affiliateLink = ref('https://www.affufanance.com/register.php?af=MTc2MjA3XzE3NjIwNw==')
const referralCount = ref(0)
const affiliateCredit = ref(0)
const referralMembers = ref<ReferralMember[]>([])

const formatCurrency = (amount: number) => {
    return amount.toLocaleString('th-TH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}

const selectAndCopy = (event: Event) => {
    const input = event.target as HTMLInputElement
    input.select()
    document.execCommand('copy')
}

const copyToClipboard = () => {
    if (!process.client) return

    const linkElement = document.getElementById('linkaff_') as HTMLInputElement
    if (linkElement) {
        const textArea = document.createElement('textarea')
        textArea.value = linkElement.textContent || ''
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        showSuccess('คัดลอกลิงก์สำเร็จ')
    }
}

const transferCredit = () => {
    if (affiliateCredit.value < 500) {
        showError('ยอดขั้นต่ำ 500 บาท จึงจะโอนเข้าเครดิตได้')
        return
    }

    // TODO: Implement actual transfer API call
    showSuccess('โอนเงินเข้าเครดิตสำเร็จ')
}

// TODO: Fetch affiliate data from API
onMounted(() => {
    // Simulate fetching data
    // referralCount.value = 0
    // affiliateCredit.value = 0
    // referralMembers.value = []
})
</script>
