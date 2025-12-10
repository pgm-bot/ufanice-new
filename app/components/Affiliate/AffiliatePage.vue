<template>
  <div class="affiliate-page">
    <!-- หัวข้อหลัก -->
    <h1 class="affiliate-title">ข้อมูลแนะนำเพื่อน</h1>

    <!-- รูปแบนเนอร์โปรแนะนำเพื่อน -->
   

    <!-- Tabs 4 หัวข้อ -->
    <div class="affiliate-tabs">
      <button
        class="affiliate-tab"
        :class="{ active: activeTab === 'overview' }"
        @click="changeTab('overview')"
      >
        ภาพรวม
      </button>

      <button
        class="affiliate-tab"
        :class="{ active: activeTab === 'registered' }"
        @click="changeTab('registered')"
      >
        ยูสที่สมัคร
      </button>

      <button
        class="affiliate-tab"
        :class="{ active: activeTab === 'monthly' }"
        @click="changeTab('monthly')"
      >
        รายได้เดือนนี้
      </button>

      <button
        class="affiliate-tab"
        :class="{ active: activeTab === 'withdraw' }"
        @click="changeTab('withdraw')"
      >
        ถอนรายได้
      </button>
    </div>

    <!-- เนื้อหาด้านในแต่ละแท็บ -->
    <div class="affiliate-content-card">
      <AffiliateOverview v-if="activeTab === 'overview'" />
      <AffiliateRegistered v-else-if="activeTab === 'registered'" />
      <AffiliateMonthly v-else-if="activeTab === 'monthly'" />
      <AffiliateWithdraw v-else-if="activeTab === 'withdraw'" />
      <div v-else class="affiliate-empty">
        ไม่พบข้อมูล
      </div>
    </div>
     <div class="affiliate-hero">
      <!-- เปลี่ยน path รูปตามโปรเจ็กต์ของมารวยได้เลย -->
      <img
        src="/img/allpage/01.jpg"
        alt="แนะนำเพื่อน รับ 0.6% ทุกยอดเดิมพัน"
      >
    </div>

    <!-- กล่อง Link แนะนำ & ปุ่มคัดลอก -->
    <div class="affiliate-link-card">
      <p class="affiliate-link-title">
        แนะนำเพื่อน รับทันที <span class="highlight">0.6%</span> ของยอดเดิมพันเสียของคนที่คุณแนะนำ
      </p>
      <p class="affiliate-link-sub">
        ยอดเงินจะอัปเดตอัตโนมัติทุกวัน เวลา 13.20 น.
      </p>

      <div class="affiliate-link-row">
        <label class="affiliate-link-label">ลิงก์แนะนำ</label>
        <input
          class="affiliate-link-input"
          type="text"
          :value="referralLinkToShow"
          readonly
          @click="$event.target.select()"
        >
        <button type="button" class="affiliate-link-copy" @click="copyLink">
          คัดลอกลิงก์
        </button>
      </div>

      <p class="affiliate-link-note">
        * ยอดขั้นต่ำ <strong>500 บาท</strong> จึงจะโอนเข้าเครดิตได้
      </p>
    </div>

    <!-- กล่องคำอธิบายโปร 0.6% -->
    <div class="affiliate-desc-card">
      <h2 class="affiliate-desc-title">
        ลิงก์ช่วยแชร์รับ <span class="highlight">0.6%</span> ฟรี
      </h2>
      <p class="affiliate-desc-sub">
        (แค่ก๊อปปี้ลิงก์ไปแชร์ก็ได้เงินแล้ว) ยิ่งแชร์มากยิ่งได้มาก
      </p>

      <p class="affiliate-desc-text">
        ท่านสามารถนำลิงก์ด้านล่างนี้หรือนำป้ายแบนเนอร์ไปแชร์ในช่องทางต่างๆ ไม่ว่าจะเป็น
        เว็บไซต์ส่วนตัว, Blog, Facebook หรือ Social Network อื่นๆ หากมีการสมัครสมาชิกโดย
        คลิกผ่านลิงก์ของท่านเข้ามา ลูกค้าที่สมัครเข้ามาก็จะอยู่ภายใต้เครือข่ายของท่านทันที
        และหากลูกค้าภายใต้เครือข่ายของท่านมีการเดิมพันเข้ามา ทุกยอดการเดิมพัน
        ท่านจะได้รับส่วนแบ่งในการแนะนำ <strong>0.6%</strong> ทันทีโดยไม่มีเงื่อนไข
      </p>

      <h3 class="affiliate-desc-head">ตัวอย่างเช่น…</h3>

      <div class="affiliate-example">
        <h4>เพื่อนลำดับที่ 1</h4>
        <p>
          ท่านจะได้รับส่วนแบ่งเริ่มต้นในขั้นแรก <strong>0.6%</strong> ตัวอย่างเช่น<br>
          - ลูกค้าท่าน 1 คน แทง 1,000 บาท ท่านจะได้ 6 บาท
          (ท่านจะได้ทุกรายการแทงของลูกค้า)
        </p>
      </div>

      <div class="affiliate-example">
        <h4>เพื่อนลำดับที่ 2</h4>
        <p>
          ท่านจะได้รับส่วนแบ่งเริ่มต้นในขั้นแรก <strong>0.06%</strong> ตัวอย่างเช่น<br>
          - ลูกค้าท่าน 1 คน แทง 10,000 บาท ท่านจะได้ 6 บาท
          (ท่านจะได้ทุกรายการแทงของลูกค้า)
        </p>
      </div>

      <p class="affiliate-desc-text">
        สามารถทำรายได้เดือนละหลักแสนได้ง่ายๆ และรายได้ทุกบาททุกสตางค์ของท่านสามารถตรวจสอบได้ทุกขั้นตอน
        งานนี้แจกจริง จ่ายจริง ที่นี่ที่เดียวที่ให้คุณมากกว่าใคร
        ก๊อปปี้ลิงก์และข้อความด้านบนนี้ นำไปแชร์ได้เลย
      </p>

      <p class="affiliate-desc-note">
        หมายเหตุ: รายได้การช่วยแชร์ช่วยแนะนำของท่านสามารถแจ้งถอนได้ทุกเวลา
        หากมียอดรายได้มากกว่า <strong>500 บาทขึ้นไป</strong>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import AffiliateOverview from '~/components/Affiliate/AffiliateOverview.vue'
import AffiliateRegistered from '~/components/Affiliate/AffiliateRegistered.vue'
import AffiliateMonthly from '~/components/Affiliate/AffiliateMonthly.vue'
import AffiliateWithdraw from '~/components/Affiliate/AffiliateWithdraw.vue'

type TabKey = 'overview' | 'registered' | 'monthly' | 'withdraw'

const props = defineProps<{
  referralLink?: string
}>()

const route = useRoute()
const router = useRouter()

const getTabFromQuery = (queryTab: unknown): TabKey => {
  const t = String(queryTab || '')
  if (['overview', 'registered', 'monthly', 'withdraw'].includes(t)) {
    return t as TabKey
  }
  return 'overview'
}

const activeTab = ref<TabKey>(getTabFromQuery(route.query.tab))

const referralLinkToShow = computed(() => {
  return props.referralLink || 'https://example.com/register/XXXXXXXX'
})

const copyLink = async () => {
  if (!process.client) return
  try {
    await navigator.clipboard.writeText(referralLinkToShow.value)
    alert('คัดลอกลิงก์สำเร็จ')
  } catch (e) {
    alert('คัดลอกไม่สำเร็จ กรุณาคัดลอกเองอีกครั้ง')
  }
}

const changeTab = (tab: TabKey) => {
  if (activeTab.value === tab) return
  activeTab.value = tab

  router.replace({
    path: route.path,
    query: {
      ...route.query,
      tab
    }
  })
}
</script>

<style scoped>
.affiliate-page {
  max-width: 980px;
  margin: 0 auto;
  padding: 24px 16px 40px;
  font-family: 'thaisanslite_r1', sans-serif;
  color: #222;
  background-color: #ffffff;
}

/* หัวข้อหลัก */
.affiliate-title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 18px;
}

/* รูปแบนเนอร์ */
.affiliate-hero {
  margin-bottom: 18px;
}

.affiliate-hero img {
  display: block;
  width: 100%;
  
  object-fit: cover;
  border-radius: 6px;
}

/* กล่องลิงก์ */
.affiliate-link-card {
  background: #fff8d1;
  border: 1px solid #ffd54f;
  border-radius: 6px;
  padding: 18px 16px 20px;
  margin-bottom: 22px;
  font-size: 16px;
}

.highlight {
  color: #e53935;
  font-weight: 700;
}

.affiliate-link-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
}

.affiliate-link-sub {
  font-size: 16px;
  margin-bottom: 12px;
}

.affiliate-link-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
}

.affiliate-link-label {
  font-size: 16px;
  min-width: 72px;
}

.affiliate-link-input {
  flex: 1;
  min-width: 220px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 10px;
  font-size: 14px;
}

.affiliate-link-copy {
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  cursor: pointer;
  background: #ffc400;
  font-size: 14px;
  font-weight: 600;
   font-family: 'thaisanslite_r1', sans-serif;
}

.affiliate-link-copy:hover {
  filter: brightness(0.97);
}

.affiliate-link-note {
  font-size: 15px;
  margin-top: 4px;
}

/* กล่องคำอธิบายโปร */
.affiliate-desc-card {
  border-radius: 6px;
  border: 1px solid #ffe082;
  background: #fffdf2;
  padding: 18px 16px 20px;
  margin-bottom: 22px;
  font-size: 15px;
  line-height: 1.8;
}

.affiliate-desc-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 4px;
}

.affiliate-desc-sub {
  font-size: 18px;
  margin-bottom: 10px;
}

.affiliate-desc-text {
  margin-bottom: 10px;
    font-size: 16px;
}

.affiliate-desc-head {
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0 6px;
}

.affiliate-example {
  margin-bottom: 10px;
}

.affiliate-example h4 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
}

.affiliate-example p {
  margin: 0;
}

.affiliate-desc-note {
  margin-top: 8px;
  font-size: 16px;
}

/* Tabs */
.affiliate-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.affiliate-tab {
  border: 1px solid #ffd54f;
  background: #ffffff;
  color: #222;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  min-width: 120px;
  font-family: 'thaisanslite_r1', sans-serif;
  font-weight: bold;
}

.affiliate-tab.active {
  background: #ffc400;
  color: #000;
}

/* เนื้อหาด้านใน */
.affiliate-content-card {
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  background: #ffffff;
  padding: 20px 18px 22px;
  font-size: 16px;
}

.affiliate-empty {
  font-size: 16px;
}

/* Responsive */
@media (max-width: 640px) {
  .affiliate-page {
    padding: 18px 10px 24px;
  }

  .affiliate-title {
    font-size: 24px;
  }

  .affiliate-link-title {
    font-size: 18px;
  }

  .affiliate-desc-card {
    font-size: 14px;
  }

  .affiliate-tab {
    font-size: 15px;
    padding: 6px 10px;
  }
}
</style>
