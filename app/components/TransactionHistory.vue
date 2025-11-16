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
                            <div class="page_" style="text-align: right;">
                                <!-- Pagination will go here if needed -->
                            </div>

                            <table style="width: 100%" class="statements">
                                <tbody>
                                    <!-- รายการฝากเงิน -->
                                    <tr>
                                        <th>Datetime</th>
                                        <th>Deposit</th>
                                        <th>Detail</th>
                                        <th>Status</th>
                                    </tr>
                                    <tr style="text-align: center;">
                                        <td>รวมทั้งหมด</td>
                                        <td>{{ formatCurrency(totalDeposit) }}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr v-for="deposit in deposits" :key="deposit.id" style="text-align: center;">
                                        <td>{{ formatDateTime(deposit.datetime) }}</td>
                                        <td>{{ formatCurrency(deposit.amount) }}</td>
                                        <td>{{ deposit.detail }}</td>
                                        <td>{{ deposit.status }}</td>
                                    </tr>

                                    <!-- รายการโบนัส -->
                                    <tr>
                                        <th colspan="4">รายการ โบนัส</th>
                                    </tr>
                                    <tr>
                                        <th>Datetime</th>
                                        <th>Amount</th>
                                        <th colspan="2">รายการ</th>
                                    </tr>
                                    <tr v-for="bonus in bonuses" :key="bonus.id" style="text-align: center;">
                                        <td>{{ formatDateTime(bonus.datetime) }}</td>
                                        <td>{{ formatCurrency(bonus.amount) }}</td>
                                        <td colspan="2">{{ bonus.detail }}</td>
                                    </tr>
                                    <tr v-if="bonuses.length === 0" style="text-align: center;">
                                        <td colspan="4">ไม่มีรายการ</td>
                                    </tr>

                                    <!-- รายการคืนเครดิต -->
                                    <tr>
                                        <th colspan="4">รายการ คืนเครดิต</th>
                                    </tr>
                                    <tr>
                                        <th>Datetime</th>
                                        <th>Amount</th>
                                        <th colspan="2">Member</th>
                                    </tr>
                                    <tr v-for="cashback in cashbacks" :key="cashback.id" style="text-align: center;">
                                        <td>{{ formatDateTime(cashback.datetime) }}</td>
                                        <td>{{ formatCurrency(cashback.amount) }}</td>
                                        <td colspan="2">{{ cashback.member }}</td>
                                    </tr>
                                    <tr v-if="cashbacks.length === 0" style="text-align: center;">
                                        <td colspan="4">ไม่มีรายการ</td>
                                    </tr>

                                    <!-- รายการแนะนำเพื่อน -->
                                    <tr>
                                        <th colspan="4">รายการ แนะนำเพื่อน</th>
                                    </tr>
                                    <tr>
                                        <th>Datetime</th>
                                        <th>Amount</th>
                                        <th colspan="2">Member</th>
                                    </tr>
                                    <tr v-for="referral in referrals" :key="referral.id" style="text-align: center;">
                                        <td>{{ formatDateTime(referral.datetime) }}</td>
                                        <td>{{ formatCurrency(referral.amount) }}</td>
                                        <td colspan="2">{{ referral.member }}</td>
                                    </tr>
                                    <tr v-if="referrals.length === 0" style="text-align: center;">
                                        <td colspan="4">ไม่มีรายการ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Transaction {
    id: number
    datetime: string
    amount: number
    detail?: string
    status?: string
    member?: string
}

// TODO: Replace with actual API data
const deposits = ref<Transaction[]>([])
const bonuses = ref<Transaction[]>([])
const cashbacks = ref<Transaction[]>([])
const referrals = ref<Transaction[]>([])

const totalDeposit = computed(() => {
    return deposits.value.reduce((sum, item) => sum + item.amount, 0)
})

const formatCurrency = (amount: number) => {
    return amount.toLocaleString('th-TH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}

const formatDateTime = (datetime: string) => {
    const date = new Date(datetime)
    return date.toLocaleString('th-TH', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    })
}

// TODO: Fetch transaction data from API
onMounted(() => {
    // Simulate fetching data
    // deposits.value = []
    // bonuses.value = []
    // cashbacks.value = []
    // referrals.value = []
})
</script>
<style scoped>
/* Add your custom styles here */
.statements, .statements th, .statements td {
    border-spacing: 0px !important;
    border: 1px solid !important;
    border-collapse: collapse !important;
}
</style>