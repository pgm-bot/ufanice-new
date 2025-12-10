<template>
  <div class="deposit-page">
    <h1 class="deposit-title">ฝากเงิน</h1>

    <p class="deposit-subtitle">
      ช่องทางที่เลือก:
      <strong>{{ methodLabel }}</strong>
    </p>

    <!-- Tabs เปลี่ยนช่องทาง -->
    <div class="deposit-method-tabs">
      <button
        class="deposit-tab"
        :class="{ active: activeMethod === 'crypto' }"
        @click="changeMethod('crypto')"
      >Crypto</button>

      <button
        class="deposit-tab"
        :class="{ active: activeMethod === 'bank' }"
        @click="changeMethod('bank')"
      >SCB / โอนผ่านธนาคาร</button>

      <button
        class="deposit-tab"
        :class="{ active: activeMethod === 'qr' }"
        @click="changeMethod('qr')"
      >THAI QR</button>

      <button
        class="deposit-tab"
        :class="{ active: activeMethod === 'wallet' }"
        @click="changeMethod('wallet')"
      >TrueMoney Wallet</button>
    </div>

    <!-- Component ตามช่องทาง -->
    <div class="deposit-content">
      <DepositWallet v-if="activeMethod === 'wallet'" />
      <DepositBank v-else-if="activeMethod === 'bank'" />

     <DepositCrypto v-else-if="activeMethod === 'crypto'" />

      <DepositQr v-else-if="activeMethod === 'qr'" class="deposit-mock"/>
       
      

      <div v-else class="deposit-mock">
        <h2>ไม่พบช่องทางที่เลือก</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DepositWallet from '~/components/Deposit/DepositWallet.vue'
import DepositBank from '~/components/Deposit/DepositBank.vue'
import DepositCrypto from '~/components/Deposit/DepositCrypto.vue'
import DepositQr from '~/components/Deposit/DepositQr.vue'

type DepositMethod = 'bank' | 'qr' | 'wallet' | 'crypto'

const route = useRoute()
const router = useRouter()

// อ่าน method จาก query
const getMethodFromQuery = (queryMethod: unknown): DepositMethod => {
  const m = String(queryMethod || '')
  if (['bank', 'qr', 'wallet', 'crypto'].includes(m)) {
    return m as DepositMethod
  }
  return 'bank'
}

const activeMethod = ref<DepositMethod>(
  getMethodFromQuery(route.query.method)
)

// Label ช่องทาง
const methodLabel = computed(() => {
  switch (activeMethod.value) {
    case 'wallet': return 'TrueMoney Wallet'
    case 'qr': return 'THAI QR'
    case 'crypto': return 'CryptoCurrency'
    default: return 'โอนผ่านธนาคาร'
  }
})

// เปลี่ยนช่องทาง + อัปเดต URL
const changeMethod = (method: DepositMethod) => {
  if (activeMethod.value === method) return

  activeMethod.value = method

  router.replace({
    path: '/deposit',
    query: { method }
  })
}
</script>

<style scoped>
.deposit-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 15px 40px;
  color: #fff;
  font-family: 'ThaiSansLite', 'thaisanslite_r1', 'thaisanslite', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.deposit-title {
  font-size: 28px;
  margin-bottom: 8px;
  font-weight: bold;
}

.deposit-subtitle {
  font-size: 18px;
  margin-bottom: 20px;
  color: #ccc;
}

.deposit-method-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.deposit-tab {
  border: none;
  padding: 8px 12px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-weight: bold;
  font-family: 'ThaiSansLite', 'thaisanslite_r1', 'thaisanslite', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.deposit-tab.active {
  background: #ffc400;
  color: #000;
}

.deposit-content {
  /* background: #111; */
  border-radius: 6px;
  /* padding: 16px 14px 20px; */
  /* border: 1px solid #333; */
}

.deposit-mock h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.deposit-mock p {
  font-size: 16px;
  color: #ccc;
  margin-bottom: 10px;
}

.deposit-mock ul {
  padding-left: 20px;
  font-size: 16px;
}

.deposit-mock li {
  margin: 4px 0;
}
</style>
