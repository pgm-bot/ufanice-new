<template>
  <div class="wrapper-c">
    <div class="tt_l tt_full p_gl">
      <div id="ct_from" class="tt_l tt_full title_page">
        <h1>ข้อมูลบัญชี</h1>
      </div>

      <div class="tt_l tt_full tt_content bg">
        <div class="tt_l tt_full">
          <div class="tt_l tt_full">
            <div class="thaitheme_read">

              <!-- Loading State -->
              <div v-if="isLoading" class="loading-container">
                <i class="fas fa-spinner fa-spin"></i>
                <p>กำลังโหลดข้อมูล...</p>
              </div>

              <!-- Transaction Tables -->
              <div v-else>
                <!-- Pagination -->
                <div class="page_" v-if="totalPages > 1">
                  <a
                    v-for="page in totalPages"
                    :key="page"
                    @click.prevent="currentPage = page"
                    :class="{ active: currentPage === page }"
                    href="#"
                  >
                    {{ page }}
                  </a>
                </div>

                <!-- Deposits Table -->
                <table class="statements">
                  <thead>
                    <tr>
                      <th>Datetime</th>
                      <th>Deposit</th>
                      <th>Detail</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="summary-row">
                      <td>รวมทั้งหมด</td>
                      <td>{{ formatCurrency(totalDeposit) }}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr v-if="deposits.length === 0">
                      <td colspan="4" class="no-data">ไม่มีรายการฝากเงิน</td>
                    </tr>
                    <tr v-for="item in paginatedDeposits" :key="item.id" class="data-row">
                      <td>{{ formatDateTime(item.datetime) }}</td>
                      <td class="amount">{{ formatCurrency(item.amount) }}</td>
                      <td>{{ item.detail }}</td>
                      <td>
                        <span :class="['status-badge', getStatusClass(item.status)]">
                          {{ item.status }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- Bonus Table -->
                <table class="statements">
                  <thead>
                    <tr>
                      <th colspan="4" class="section-header">รายการ โบนัส</th>
                    </tr>
                    <tr>
                      <th>Datetime</th>
                      <th>Amount</th>
                      <th colspan="2">รายการ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="summary-row">
                      <td>รวมทั้งหมด</td>
                      <td>{{ formatCurrency(totalBonus) }}</td>
                      <td colspan="2"></td>
                    </tr>
                    <tr v-if="bonuses.length === 0">
                      <td colspan="4" class="no-data">ไม่มีรายการโบนัส</td>
                    </tr>
                    <tr v-for="item in bonuses" :key="item.id" class="data-row">
                      <td>{{ formatDateTime(item.datetime) }}</td>
                      <td class="amount">{{ formatCurrency(item.amount) }}</td>
                      <td colspan="2">{{ item.detail }}</td>
                    </tr>
                  </tbody>
                </table>

                <!-- Refund/Cashback Table -->
                <table class="statements">
                  <thead>
                    <tr>
                      <th colspan="4" class="section-header">รายการ คืนเครดิต</th>
                    </tr>
                    <tr>
                      <th>Datetime</th>
                      <th>Amount</th>
                      <th colspan="2">Member</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="summary-row">
                      <td>รวมทั้งหมด</td>
                      <td>{{ formatCurrency(totalRefund) }}</td>
                      <td colspan="2"></td>
                    </tr>
                    <tr v-if="refunds.length === 0">
                      <td colspan="4" class="no-data">ไม่มีรายการคืนเครดิต</td>
                    </tr>
                    <tr v-for="item in refunds" :key="item.id" class="data-row">
                      <td>{{ formatDateTime(item.datetime) }}</td>
                      <td class="amount">{{ formatCurrency(item.amount) }}</td>
                      <td colspan="2">{{ item.member }}</td>
                    </tr>
                  </tbody>
                </table>

                <!-- Referral Table -->
                <table class="statements">
                  <thead>
                    <tr>
                      <th colspan="4" class="section-header">รายการ แนะนำเพื่อน</th>
                    </tr>
                    <tr>
                      <th>Datetime</th>
                      <th>Amount</th>
                      <th colspan="2">Member</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="summary-row">
                      <td>รวมทั้งหมด</td>
                      <td>{{ formatCurrency(totalReferral) }}</td>
                      <td colspan="2"></td>
                    </tr>
                    <tr v-if="referrals.length === 0">
                      <td colspan="4" class="no-data">ไม่มีรายการแนะนำเพื่อน</td>
                    </tr>
                    <tr v-for="item in referrals" :key="item.id" class="data-row">
                      <td>{{ formatDateTime(item.datetime) }}</td>
                      <td class="amount">{{ formatCurrency(item.amount) }}</td>
                      <td colspan="2">{{ item.member }}</td>
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
interface DepositTransaction {
  id: number
  datetime: string
  amount: number
  detail: string
  status: string
}

interface BonusTransaction {
  id: number
  datetime: string
  amount: number
  detail: string
}

interface RefundTransaction {
  id: number
  datetime: string
  amount: number
  member: string
}

interface ReferralTransaction {
  id: number
  datetime: string
  amount: number
  member: string
}

// Reactive state
const isLoading = ref(true)
const currentPage = ref(1)
const itemsPerPage = ref(10)

const deposits = ref<DepositTransaction[]>([])
const bonuses = ref<BonusTransaction[]>([])
const refunds = ref<RefundTransaction[]>([])
const referrals = ref<ReferralTransaction[]>([])

// Computed totals
const totalDeposit = computed(() => {
  return deposits.value.reduce((sum, item) => sum + item.amount, 0)
})

const totalBonus = computed(() => {
  return bonuses.value.reduce((sum, item) => sum + item.amount, 0)
})

const totalRefund = computed(() => {
  return refunds.value.reduce((sum, item) => sum + item.amount, 0)
})

const totalReferral = computed(() => {
  return referrals.value.reduce((sum, item) => sum + item.amount, 0)
})

// Pagination
const totalPages = computed(() => {
  return Math.ceil(deposits.value.length / itemsPerPage.value)
})

const paginatedDeposits = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return deposits.value.slice(start, end)
})

// Format currency
const formatCurrency = (amount: number): string => {
  return amount.toLocaleString('th-TH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

// Format datetime
const formatDateTime = (datetime: string): string => {
  const date = new Date(datetime)
  return date.toLocaleString('th-TH', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Get status class for styling
const getStatusClass = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'สำเร็จ':
    case 'success':
      return 'status-success'
    case 'รอดำเนินการ':
    case 'pending':
      return 'status-pending'
    case 'ยกเลิก':
    case 'cancelled':
      return 'status-cancelled'
    default:
      return 'status-default'
  }
}

// Fetch transaction data
const fetchTransactions = async () => {
  isLoading.value = true

  try {
    // TODO: Replace with actual API calls
    const [depositsRes, bonusesRes, refundsRes, referralsRes] = await Promise.all([
      fetch('/api/transactions/deposits'),
      fetch('/api/transactions/bonuses'),
      fetch('/api/transactions/refunds'),
      fetch('/api/transactions/referrals')
    ])

    if (depositsRes.ok) {
      deposits.value = await depositsRes.json()
    }
    if (bonusesRes.ok) {
      bonuses.value = await bonusesRes.json()
    }
    if (refundsRes.ok) {
      refunds.value = await refundsRes.json()
    }
    if (referralsRes.ok) {
      referrals.value = await referralsRes.json()
    }
  } catch (error) {
    console.error('Failed to fetch transactions:', error)

    // Mock data for development
    deposits.value = []
    bonuses.value = []
    refunds.value = []
    referrals.value = []
  } finally {
    isLoading.value = false
  }
}

// Fetch data on component mount
onMounted(async () => {
  await fetchTransactions()
})
</script>

<style scoped>
/* Page Layout */
.wrapper-c {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.p_gl {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Title */
.title_page {
  background: linear-gradient(90deg, #f3c31a 0%, #ffd700 100%);
  padding: 20px;
  text-align: center;
}

.title_page h1 {
  margin: 0;
  color: #1e3c72;
  font-size: 2rem;
  font-weight: bold;
}

/* Content Area */
.tt_content {
  padding: 30px 20px;
}

.thaitheme_read {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

/* Loading */
.loading-container {
  text-align: center;
  padding: 60px 20px;
  color: #1e3c72;
}

.loading-container i {
  font-size: 3rem;
  margin-bottom: 15px;
  color: #f3c31a;
}

.loading-container p {
  font-size: 1.2rem;
  font-weight: 500;
}

/* Pagination */
.page_ {
  text-align: right;
  margin-bottom: 20px;
}

.page_ a {
  display: inline-block;
  margin: 0 5px;
  padding: 8px 15px;
  font-size: 18px;
  font-weight: bold;
  color: #1e3c72;
  background: #f0f0f0;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
}

.page_ a:hover {
  background: #f3c31a;
  color: white;
}

.page_ a.active {
  background: #1e3c72;
  color: white;
}

/* Table Styles */
.statements {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  margin-bottom: 30px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.statements th,
.statements td {
  padding: 12px 15px;
  text-align: center;
  border: 1px solid #ddd;
}

.statements th {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  font-weight: bold;
  font-size: 1rem;
}

.statements .section-header {
  background: linear-gradient(90deg, #f3c31a 0%, #ffd700 100%);
  color: #1e3c72;
  font-size: 1.1rem;
  padding: 15px;
}

.statements .summary-row {
  background: #f8f9fa;
  font-weight: bold;
}

.statements .summary-row td {
  color: #1e3c72;
  font-size: 1.05rem;
}

.statements .data-row:hover {
  background: #f0f8ff;
}

.statements .amount {
  color: #28a745;
  font-weight: 600;
}

.statements .no-data {
  padding: 40px;
  color: #999;
  font-style: italic;
}

/* Status Badges */
.status-badge {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.status-success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status-pending {
  background: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.status-cancelled {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.status-default {
  background: #e2e3e5;
  color: #383d41;
  border: 1px solid #d6d8db;
}

/* Responsive Design */
@media (max-width: 768px) {
  .wrapper-c {
    padding: 10px;
  }

  .tt_content {
    padding: 20px 10px;
  }

  .thaitheme_read {
    padding: 15px 10px;
  }

  .title_page h1 {
    font-size: 1.5rem;
  }

  .statements {
    font-size: 0.85rem;
  }

  .statements th,
  .statements td {
    padding: 8px 6px;
  }

  .page_ a {
    font-size: 16px;
    padding: 6px 12px;
    margin: 0 3px;
  }

  .status-badge {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
}

@media (max-width: 480px) {
  .title_page h1 {
    font-size: 1.3rem;
  }

  .statements {
    font-size: 0.75rem;
  }

  .statements th,
  .statements td {
    padding: 6px 4px;
  }

  .statements .section-header {
    font-size: 0.95rem;
  }

  .page_ {
    text-align: center;
  }

  /* Stack table cells on very small screens */
  .statements tbody tr {
    display: block;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .statements tbody td {
    display: block;
    text-align: right;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #eee;
  }

  .statements tbody td:last-child {
    border-bottom: none;
  }

  .statements tbody td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    color: #1e3c72;
  }

  .statements .summary-row,
  .statements .no-data {
    display: table-row;
  }

  .statements .summary-row td,
  .statements .no-data {
    display: table-cell;
  }
}
</style>
