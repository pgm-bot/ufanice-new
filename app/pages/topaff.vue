<template>
  <div>
    <Header></Header>
    <HeadMobile></HeadMobile>

    <div class="wrapper">
      <div class="tt_l tt_full tt_content bg">
        <div class="tt_l tt_lc__">
          <!-- Page Title -->
          <div class="tt_l tt_full title_page">
            <h1>ประกาศรายชื่อนักแนะนำเพื่อน</h1>
          </div>

          <div class="tt_l tt_full">
            <!-- Content Area -->
            <div class="tt_l tt_full fr_login">
              <div class="fr_center">
                <!-- Info Text -->
                <div class="tt_l tt_full fr_h1">
                  *ทีมงานจะติดต่อผู้โชคดีกลับไป และ ส่งของรางวัลให้ไม่เกินวันที่ 5 ของเดือนค่ะ
                </div>

                <center>
                  <!-- Header Text -->
                  <span class="ct-headline tt_l tt_full fr_tx2x header-text">
                    ประกาศรายชื่อนักแนะนำเพื่อน ประจำเดือน {{ currentMonthName }} {{ currentYear }} จะได้รับรางวัลดังต่อไปนี้ค่ะ
                  </span>
                  <br>

                  <!-- Month Selector -->
                  <div class="tt_l tt_full fr_tx2x month-selector">
                    <span>นักแนะนำเพื่อน.. ประจำเดือน </span>
                    <select v-model="selectedMonth" @change="fetchRankings" class="month-select">
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

                  <!-- Rankings Table -->
                  <table id="example" class="table table-striped table-bordered tt_l tt_full fr_tx2x ranking-table">
                    <thead>
                      <tr>
                        <th>ลำดับที่</th>
                        <th>ยูสเซอร์</th>
                        <th>ยอดแนะนำ</th>
                        <th>รางวัลที่ได้รับ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="isLoading">
                        <td colspan="4" class="loading-cell">
                          <i class="fas fa-spinner fa-spin"></i> กำลังโหลดข้อมูล...
                        </td>
                      </tr>
                      <tr v-else-if="rankings.length === 0">
                        <td colspan="4" class="no-data">ยังไม่มีข้อมูลสำหรับเดือนนี้</td>
                      </tr>
                      <tr
                        v-else
                        v-for="(item, index) in rankings"
                        :key="item.rank"
                        class="data-row"
                        :class="{ 'top-rank': index < 3 }"
                      >
                        <td>{{ item.rank }}</td>
                        <td>{{ item.username }}</td>
                        <td class="amount">{{ formatNumber(item.referralAmount) }}</td>
                        <td class="reward">{{ item.reward }}</td>
                      </tr>
                    </tbody>
                  </table>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
    <FixedFooter></FixedFooter>
  </div>
</template>

<script setup lang="ts">
interface RankingItem {
  rank: number
  username: string
  referralAmount: number
  reward: string
}

// Reactive state
const selectedMonth = ref('10') // ตุลาคม
const isLoading = ref(false)
const rankings = ref<RankingItem[]>([])

// Month names in Thai
const monthNames: { [key: string]: string } = {
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

const currentMonthName = computed(() => monthNames[selectedMonth.value])
const currentYear = computed(() => new Date().getFullYear() + 543) // พ.ศ.

// Format number with comma
const formatNumber = (num: number): string => {
  return num.toLocaleString('th-TH')
}

// Fetch rankings data
const fetchRankings = async () => {
  isLoading.value = true

  try {
    // TODO: Replace with actual API call
    const response = await fetch(`/api/rankings/affiliate?month=${selectedMonth.value}`)

    if (response.ok) {
      rankings.value = await response.json()
    } else {
      // Use mock data
      rankings.value = getMockData()
    }
  } catch (error) {
    console.error('Failed to fetch rankings:', error)
    rankings.value = getMockData()
  } finally {
    isLoading.value = false
  }
}

// Mock data
const getMockData = (): RankingItem[] => {
  return [
    { rank: 1, username: 'ufnblnc165664', referralAmount: 276104, reward: 'ทองคำ 1 บาท' },
    { rank: 2, username: 'ufnblnc161998', referralAmount: 202704, reward: 'ทองคำ 50 สตางค์' },
    { rank: 3, username: 'ufnblnc49454', referralAmount: 171912, reward: 'ทองคำ 25 สตางค์' },
    { rank: 4, username: 'ufnblnc156806', referralAmount: 44093, reward: 'เครดิต 2000' },
    { rank: 5, username: 'ufnblnc114647', referralAmount: 39058, reward: 'เครดิต 2000' },
    { rank: 6, username: 'ufnblnc17577', referralAmount: 34091, reward: 'เครดิต 2000' },
    { rank: 7, username: 'ufnblnc138043', referralAmount: 31403, reward: 'เครดิต 2000' },
    { rank: 8, username: 'ufnblnc1659', referralAmount: 31398, reward: 'เครดิต 2000' },
    { rank: 9, username: 'ufnblnc159997', referralAmount: 29306, reward: 'เครดิต 2000' },
    { rank: 10, username: 'ufnblnc29469', referralAmount: 27173, reward: 'เครดิต 2000' },
    { rank: 11, username: 'ufnblnc74973', referralAmount: 23384, reward: 'เครดิต 1500' },
    { rank: 12, username: 'ufnblnc44304', referralAmount: 21794, reward: 'เครดิต 1500' },
    { rank: 13, username: 'ufnblnc4012', referralAmount: 19961, reward: 'เครดิต 1500' },
    { rank: 14, username: 'ufnblnc6170', referralAmount: 18522, reward: 'เครดิต 1500' },
    { rank: 15, username: 'ufnblnc125718', referralAmount: 16752, reward: 'เครดิต 1500' },
    { rank: 16, username: 'ufnblnc143282', referralAmount: 11880, reward: 'เครดิต 1500' },
    { rank: 17, username: 'ufnblnc31365', referralAmount: 11314, reward: 'เครดิต 1500' },
    { rank: 18, username: 'ufnblnc112278', referralAmount: 10464, reward: 'เครดิต 1500' },
    { rank: 19, username: 'ufnblnc5547', referralAmount: 9687, reward: 'เครดิต 1500' },
    { rank: 20, username: 'ufnblnc77839', referralAmount: 9466, reward: 'เครดิต 1500' },
    { rank: 21, username: 'ufnblnc59529', referralAmount: 9027, reward: 'เครดิต 1000' },
    { rank: 22, username: 'ufnblnc136973', referralAmount: 8731, reward: 'เครดิต 1000' },
    { rank: 23, username: 'ufnblnc79098', referralAmount: 8643, reward: 'เครดิต 1000' },
    { rank: 24, username: 'ufnblnc22184', referralAmount: 7705, reward: 'เครดิต 1000' },
    { rank: 25, username: 'ufnblnc145847', referralAmount: 7407, reward: 'เครดิต 1000' },
    { rank: 26, username: 'ufnblnc70834', referralAmount: 7341, reward: 'เครดิต 1000' },
    { rank: 27, username: 'ufnblnc3670', referralAmount: 6841, reward: 'เครดิต 1000' },
    { rank: 28, username: 'ufnblnc140233', referralAmount: 6731, reward: 'เครดิต 1000' },
    { rank: 29, username: 'ufnblnc72792', referralAmount: 6500, reward: 'เครดิต 1000' },
    { rank: 30, username: 'ufnblnc125328', referralAmount: 6437, reward: 'เครดิต 1000' }
  ]
}

// Fetch data on component mount
onMounted(async () => {
  await fetchRankings()
})

// Set page metadata
useHead({
  title: 'อันดับนักแนะนำเพื่อน - UFANICE',
  meta: [
    { name: 'description', content: 'ประกาศรายชื่อนักแนะนำเพื่อนประจำเดือน รับรางวัลทองคำและเครดิต UFANICE' }
  ]
})
</script>

<style scoped>
/* Wrapper */
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.tt_content {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  border-radius: 10px;
  padding: 0;
  overflow: hidden;
}

.tt_lc__ {
  width: 100%;
}

/* Title */
.title_page {
  background: linear-gradient(90deg, #f3c31a 0%, #ffd700 100%);
  padding: 20px;
  text-align: center;
  margin-bottom: 0;
}

.title_page h1 {
  margin: 0;
  color: #1e3c72;
  font-size: 2rem;
  font-weight: bold;
}

/* Content */
.fr_login {
  padding: 30px 20px;
  background: rgba(255, 255, 255, 0.95);
}

.fr_center {
  width: 99%;
  max-width: 1000px;
  margin: 0 auto;
}

.fr_h1 {
  color: #1e3c72;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 25px;
  text-align: center;
  padding: 15px;
  background: #fff3cd;
  border-radius: 8px;
  border-left: 4px solid #f3c31a;
}

/* Header Text */
.header-text {
  font-size: clamp(18px, 2.5vw, 25px);
  height: auto !important;
  width: 100% !important;
  padding: 15px !important;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: white;
  display: block;
  margin: 20px 0;
  font-weight: 600;
  color: #1e3c72;
  line-height: 1.6 !important;
  text-align: center;
  word-wrap: break-word;
  white-space: normal;
  border-bottom: 1px solid #ccc !important;
  border-right: 1px solid #ccc !important;
}

/* Month Selector */
.month-selector {
  font-size: clamp(20px, 2.5vw, 25px);
  height: auto !important;
  width: 100% !important;
  padding: 15px !important;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: white;
  margin: 20px 0;
  font-weight: 600;
  color: #333;
  line-height: 1.6 !important;
  text-align: center;
  border-bottom: 1px solid #ccc !important;
  border-right: 1px solid #ccc !important;
}

.month-select {
  font-size: clamp(15px, 2.5vw, 25px);
  font-family: thaisanslite_r1, sans-serif;
  padding: 8px 15px;
  border: 2px solid #1e3c72;
  border-radius: 5px;
  background: white;
  cursor: pointer;
  margin-left: 10px;
}

.month-select:focus {
  outline: none;
  border-color: #f3c31a;
}

/* Table */
.ranking-table {
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.ranking-table thead tr {
  font-size: clamp(15px, 2.5vw, 25px);
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
}

.ranking-table th {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px 10px;
  font-weight: bold;
}

.ranking-table tbody tr {
  text-align: center;
  transition: all 0.3s;
}

.ranking-table tbody tr:hover {
  background: #f0f8ff;
  transform: scale(1.01);
}

.ranking-table tbody td {
  padding: 12px 10px;
  border: 1px solid #ddd;
}

/* Top Ranks Highlight */
.top-rank {
  background: linear-gradient(135deg, #fff9e6 0%, #fff3cd 100%);
  font-weight: 600;
}

.top-rank:hover {
  background: linear-gradient(135deg, #fff3cd 0%, #ffe69c 100%);
}

.top-rank td:first-child {
  color: #f3c31a;
  font-weight: bold;
  font-size: 1.2rem;
}

/* Amount Column */
.amount {
  color: #28a745;
  font-weight: 600;
}

/* Reward Column */
.reward {
  color: #dc3545;
  font-weight: 600;
}

/* Loading & No Data */
.loading-cell,
.no-data {
  padding: 40px;
  text-align: center;
  color: #999;
  font-style: italic;
}

.loading-cell i {
  color: #f3c31a;
  font-size: 1.5rem;
  margin-right: 10px;
}

/* Responsive */
@media (max-width: 768px) {
  .wrapper {
    padding: 10px;
  }

  .fr_login {
    padding: 20px 10px;
  }

  .title_page h1 {
    font-size: 1.5rem;
  }

  .fr_h1 {
    font-size: 1rem;
    padding: 12px;
  }

  .ranking-table {
    font-size: 0.85rem;
  }

  .ranking-table th,
  .ranking-table td {
    padding: 10px 6px;
  }

  .month-selector {
    font-size: clamp(16px, 2.5vw, 20px);
    padding: 12px;
  }

  .month-select {
    font-size: clamp(14px, 2.5vw, 18px);
    padding: 6px 10px;
    margin-left: 5px;
  }
}

@media (max-width: 480px) {
  .title_page h1 {
    font-size: 1.3rem;
  }

  .ranking-table {
    font-size: 0.75rem;
  }

  .ranking-table th,
  .ranking-table td {
    padding: 8px 4px;
  }

  .header-text {
    font-size: clamp(14px, 2vw, 18px);
    padding: 10px !important;
    width: 100% !important;
    height: auto !important;
    line-height: 1.5 !important;
  }

  .month-selector {
    font-size: clamp(14px, 2vw, 18px);
    width: 100% !important;
    height: auto !important;
    padding: 12px 10px !important;
  }
}
</style>
