<template>
    <div class="wrapper">
        <div class="tt_l tt_full tt_content bg">
            <div class="tt_l tt_lc__" style="width: 100%;">
                <div class="tt_l tt_full title_page">
                    <h1>ประกาศรายชื่อผู้ที่ทำยอดรับเงินคืนเยอะสุด</h1>
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
                                    ประกาศรายชื่อผู้ที่ทำยอดรับเงินคืนเยอะสุด ประจำเดือน {{ getMonthName(selectedMonth) }} จะได้รับรางวัลดังต่อไปนี้ค่ะ
                                </span>
                                <br>

                                <div class="tt_l tt_full fr_tx2x"
                                     style="font-size: clamp(18px, 2.5vw, 25px); height: auto; padding: 5px; border: 1px solid #ccc;">
                                    <span>ผู้ที่ทำยอดรับเงินคืนเยอะสุด ประจำเดือน </span>
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

                                <font color="white"> </font>
                                <br>

                                <table id="example" class="table table-striped table-bordered tt_l tt_full fr_tx2x"
                                       style="width:100%">
                                    <thead>
                                        <tr style="font-size: clamp(15px, 2.5vw, 25px);">
                                            <th style="border-left: 1px solid #ccc; border-right: 1px solid #ccc;">ลำดับที่</th>
                                            <th style="border-left: 1px solid #ccc; border-right: 1px solid #ccc;">ยูสเซอร์</th>
                                            <th style="border-left: 1px solid #ccc; border-right: 1px solid #ccc;">ยอดรวม</th>
                                            <th style="border-left: 1px solid #ccc; border-right: 1px solid #ccc;">รางวัลที่ได้รับ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="winner in topDeposits" :key="winner.rank" style="text-align: center;">
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
interface TopDeposit {
    rank: number
    username: string
    amount: number
    reward: string
}

const selectedMonth = ref('10')

// TODO: Replace with actual API call
const topDeposits = ref<TopDeposit[]>([
    { rank: 1, username: 'ufnblnc171228', amount: 606749, reward: 'ทองคำ 1 บาท' },
    { rank: 2, username: 'ufnblnc57395', amount: 179315, reward: 'ทองคำ 50 สตางค์' },
    { rank: 3, username: 'ufnblnc168616', amount: 134981, reward: 'ทองคำ 25 สตางค์' },
    { rank: 4, username: 'ufnblnc161999', amount: 101322, reward: 'เครดิต 2000' },
    { rank: 5, username: 'ufnblnc167041', amount: 90002, reward: 'เครดิต 2000' },
    { rank: 6, username: 'ufnblnc167365', amount: 85038, reward: 'เครดิต 2000' },
    { rank: 7, username: 'ufnblnc122364', amount: 68065, reward: 'เครดิต 2000' },
    { rank: 8, username: 'ufnblnc109826', amount: 56286, reward: 'เครดิต 2000' },
    { rank: 9, username: 'ufnblnc73706', amount: 45494, reward: 'เครดิต 2000' },
    { rank: 10, username: 'ufnblnc46268', amount: 40935, reward: 'เครดิต 2000' },
    { rank: 11, username: 'ufnblnc24391', amount: 34413, reward: 'เครดิต 1500' },
    { rank: 12, username: 'ufnblnc15882', amount: 33504, reward: 'เครดิต 1500' },
    { rank: 13, username: 'ufnblnc165828', amount: 31781, reward: 'เครดิต 1500' },
    { rank: 14, username: 'ufnblnc36090', amount: 26151, reward: 'เครดิต 1500' },
    { rank: 15, username: 'ufnblnc169683', amount: 22833, reward: 'เครดิต 1500' },
    { rank: 16, username: 'ufnblnc166025', amount: 21788, reward: 'เครดิต 1500' },
    { rank: 17, username: 'ufnblnc115489', amount: 21057, reward: 'เครดิต 1500' },
    { rank: 18, username: 'ufnblnc40027', amount: 20972, reward: 'เครดิต 1500' },
    { rank: 19, username: 'ufnblnc168368', amount: 20283, reward: 'เครดิต 1500' },
    { rank: 20, username: 'ufnblnc153593', amount: 19399, reward: 'เครดิต 1500' },
    { rank: 21, username: 'ufnblnc168404', amount: 19004, reward: 'เครดิต 1000' },
    { rank: 22, username: 'ufnblnc137179', amount: 18773, reward: 'เครดิต 1000' },
    { rank: 23, username: 'ufnblnc103106', amount: 18722, reward: 'เครดิต 1000' },
    { rank: 24, username: 'ufnblnc80473', amount: 16760, reward: 'เครดิต 1000' },
    { rank: 25, username: 'ufnblnc95877', amount: 15891, reward: 'เครดิต 1000' },
    { rank: 26, username: 'ufnblnc160501', amount: 15391, reward: 'เครดิต 1000' },
    { rank: 27, username: 'ufnblnc16445', amount: 15037, reward: 'เครดิต 1000' },
    { rank: 28, username: 'ufnblnc52417', amount: 14508, reward: 'เครดิต 1000' },
    { rank: 29, username: 'ufnblnc125647', amount: 13331, reward: 'เครดิต 1000' },
    { rank: 30, username: 'ufnblnc20510', amount: 12297, reward: 'เครดิต 1000' },
    { rank: 31, username: 'ufnblnc160380', amount: 12282, reward: 'เครดิต 1000' },
    { rank: 32, username: 'ufnblnc48777', amount: 11565, reward: 'เครดิต 1000' },
    { rank: 33, username: 'ufnblnc168606', amount: 11313, reward: 'เครดิต 1000' },
    { rank: 34, username: 'ufnblnc151859', amount: 11007, reward: 'เครดิต 1000' },
    { rank: 35, username: 'ufnblnc56447', amount: 10754, reward: 'เครดิต 1000' },
    { rank: 36, username: 'ufnblnc154881', amount: 10727, reward: 'เครดิต 1000' },
    { rank: 37, username: 'ufnblnc12646', amount: 10479, reward: 'เครดิต 1000' },
    { rank: 38, username: 'ufnblnc145126', amount: 10066, reward: 'เครดิต 1000' },
    { rank: 39, username: 'ufnblnc13698', amount: 9787, reward: 'เครดิต 1000' },
    { rank: 40, username: 'ufnblnc35768', amount: 9281, reward: 'เครดิต 1000' },
    { rank: 41, username: 'ufnblnc112867', amount: 8986, reward: 'เครดิต 1000' },
    { rank: 42, username: 'ufnblnc47987', amount: 8859, reward: 'เครดิต 1000' },
    { rank: 43, username: 'ufnblnc47315', amount: 8817, reward: 'เครดิต 1000' },
    { rank: 44, username: 'ufnblnc74982', amount: 8668, reward: 'เครดิต 1000' },
    { rank: 45, username: 'ufnblnc52977', amount: 8612, reward: 'เครดิต 1000' },
    { rank: 46, username: 'ufnblnc90074', amount: 8581, reward: 'เครดิต 1000' },
    { rank: 47, username: 'ufnblnc5781', amount: 8496, reward: 'เครดิต 1000' },
    { rank: 48, username: 'ufnblnc107941', amount: 8112, reward: 'เครดิต 1000' },
    { rank: 49, username: 'ufnblnc75001', amount: 7841, reward: 'เครดิต 1000' },
    { rank: 50, username: 'ufnblnc132161', amount: 7803, reward: 'เครดิต 1000' }
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
