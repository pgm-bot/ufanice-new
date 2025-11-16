<template>
    <div class="wrapper">
        <div class="tt_l tt_full tt_content bg">
            <div class="tt_l tt_lc__" style="width: 100%;">
                <div class="tt_l tt_full title_page">
                    <h1>ประกาศรายชื่อนักแนะนำเพื่อน</h1>
                </div>
                <div class="tt_l tt_full">
                    <div class="thaitheme_read" style="display: none;">
                        <h1 style="text-align: center;">
                            <span style="color: #ff6600;"><strong>" จะเปิดให้บริการสิ้นเดือนนี้ค่ะ "</strong></span>
                        </h1>
                        <hr>
                        <p>&nbsp;</p>
                    </div>

                    <div class="tt_l tt_full fr_login" style="padding-top: 0;">
                        <div class="fr_center" style="width: 99%;">
                            <div class="tt_l tt_full fr_h1">
                                *ทีมงานจะติดต่อผู้โชคดีกลับไป และ ส่งของรางวัลให้ไม่เกินวันที่ 5 ของเดือนค่ะ
                            </div>

                            <div style="text-align: center">
                                <span id="headline-36-160" class="ct-headline tt_l tt_full fr_tx2x"
                                      style="font-size: clamp(18px, 2.5vw, 25px); height: auto; padding: 5px; border: 1px solid #ccc;">
                                    ประกาศรายชื่อนักแนะนำเพื่อน ประจำเดือน {{ getMonthName(selectedMonth) }} 2025 จะได้รับรางวัลดังต่อไปนี้ค่ะ
                                </span>
                                <br>

                                <div class="tt_l tt_full fr_tx2x"
                                     style="font-size: clamp(20px, 2.5vw, 25px); height: auto; padding: 5px; border: 1px solid #ccc;">
                                    <span>นักแนะนำเพื่อน.. ประจำเดือน </span>
                                    <select v-model="selectedMonth" @change="changeMonth"
                                            style="font-size: clamp(15px, 2.5vw, 25px); font-family: thaisanslite_r1;">
                                        <option value="01">มกราคม</option>
                                        <option value="02">กุมภาพันธ์</option>
                                        <option value="03">มีนาคม</option>
                                        <option value="04">เมษายน</option>
                                        <option value="05">พฤษภาคม</option>
                                        <option value="06">มิถุนายน</option>
                                        <option value="07">กรกฎาคม</option>
                                        <option value="08">สิงหาคม</option>
                                        <option value="09">กันยายน</option>
                                        <option value="10">ตุลาคม</option>
                                        <option value="11">พฤศจิกายน</option>
                                        <option value="12">ธันวาคม</option>
                                    </select>
                                </div>
                                <br>

                                <table id="example" class="table table-striped table-bordered tt_l tt_full fr_tx2x"
                                       style="width:100%">
                                    <thead>
                                        <tr style="font-size: clamp(15px, 2.5vw, 25px);">
                                            <th style="border-left: 1px solid #ccc; border-right: 1px solid #ccc;">ลำดับที่</th>
                                            <th style="border-left: 1px solid #ccc; border-right: 1px solid #ccc;">ยูสเซอร์</th>
                                            <th style="border-left: 1px solid #ccc; border-right: 1px solid #ccc;">ยอดแนะนำ</th>
                                            <th style="border-left: 1px solid #ccc; border-right: 1px solid #ccc;">รางวัลที่ได้รับ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="winner in topAffiliates" :key="winner.rank" style="text-align: center;">
                                            <td>{{ winner.rank }}</td>
                                            <td>{{ winner.username }}</td>
                                            <td>{{ formatNumber(winner.amount) }}</td>
                                            <td>{{ winner.reward }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface TopAffiliate {
    rank: number
    username: string
    amount: number
    reward: string
}

const selectedMonth = ref('10')

// TODO: Replace with actual API call
const topAffiliates = ref<TopAffiliate[]>([
    { rank: 1, username: 'ufnblnc165664', amount: 276104, reward: 'ทองคำ 1 บาท' },
    { rank: 2, username: 'ufnblnc161998', amount: 202704, reward: 'ทองคำ 50 สตางค์' },
    { rank: 3, username: 'ufnblnc49454', amount: 171912, reward: 'ทองคำ 25 สตางค์' },
    { rank: 4, username: 'ufnblnc156806', amount: 44093, reward: 'เครดิต 2000' },
    { rank: 5, username: 'ufnblnc114647', amount: 39058, reward: 'เครดิต 2000' },
    { rank: 6, username: 'ufnblnc17577', amount: 34091, reward: 'เครดิต 2000' },
    { rank: 7, username: 'ufnblnc138043', amount: 31403, reward: 'เครดิต 2000' },
    { rank: 8, username: 'ufnblnc1659', amount: 31398, reward: 'เครดิต 2000' },
    { rank: 9, username: 'ufnblnc159997', amount: 29306, reward: 'เครดิต 2000' },
    { rank: 10, username: 'ufnblnc29469', amount: 27173, reward: 'เครดิต 2000' },
    { rank: 11, username: 'ufnblnc74973', amount: 23384, reward: 'เครดิต 1500' },
    { rank: 12, username: 'ufnblnc44304', amount: 21794, reward: 'เครดิต 1500' },
    { rank: 13, username: 'ufnblnc4012', amount: 19961, reward: 'เครดิต 1500' },
    { rank: 14, username: 'ufnblnc6170', amount: 18522, reward: 'เครดิต 1500' },
    { rank: 15, username: 'ufnblnc125718', amount: 16752, reward: 'เครดิต 1500' },
    { rank: 16, username: 'ufnblnc143282', amount: 11880, reward: 'เครดิต 1500' },
    { rank: 17, username: 'ufnblnc31365', amount: 11314, reward: 'เครดิต 1500' },
    { rank: 18, username: 'ufnblnc112278', amount: 10464, reward: 'เครดิต 1500' },
    { rank: 19, username: 'ufnblnc5547', amount: 9687, reward: 'เครดิต 1500' },
    { rank: 20, username: 'ufnblnc77839', amount: 9466, reward: 'เครดิต 1500' },
    { rank: 21, username: 'ufnblnc59529', amount: 9027, reward: 'เครดิต 1000' },
    { rank: 22, username: 'ufnblnc136973', amount: 8731, reward: 'เครดิต 1000' },
    { rank: 23, username: 'ufnblnc79098', amount: 8643, reward: 'เครดิต 1000' },
    { rank: 24, username: 'ufnblnc22184', amount: 7705, reward: 'เครดิต 1000' },
    { rank: 25, username: 'ufnblnc145847', amount: 7407, reward: 'เครดิต 1000' },
    { rank: 26, username: 'ufnblnc70834', amount: 7341, reward: 'เครดิต 1000' },
    { rank: 27, username: 'ufnblnc3670', amount: 6841, reward: 'เครดิต 1000' },
    { rank: 28, username: 'ufnblnc140233', amount: 6731, reward: 'เครดิต 1000' },
    { rank: 29, username: 'ufnblnc72792', amount: 6500, reward: 'เครดิต 1000' },
    { rank: 30, username: 'ufnblnc125328', amount: 6437, reward: 'เครดิต 1000' }
])

const getMonthName = (month: string): string => {
    const months: { [key: string]: string } = {
        '01': 'มกราคม',
        '02': 'กุมภาพันธ์',
        '03': 'มีนาคม',
        '04': 'เมษายน',
        '05': 'พฤษภาคม',
        '06': 'มิถุนายน',
        '07': 'กรกฎาคม',
        '08': 'สิงหาคม',
        '09': 'กันยายน',
        '10': 'ตุลาคม',
        '11': 'พฤศจิกายน',
        '12': 'ธันวาคม'
    }
    return months[month] || 'ตุลาคม'
}

const formatNumber = (num: number): string => {
    return num.toLocaleString('th-TH')
}

const changeMonth = () => {
    // TODO: Implement API call to fetch data for selected month
    console.log('Selected month:', selectedMonth.value)
}
</script>

<style scoped>
.fr_tx2x {
    width: 100%;
}

table tr td {
    vertical-align: middle;
    font-weight: normal;
}
</style>
