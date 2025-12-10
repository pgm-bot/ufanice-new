<template>
  <div class="crypto-wrapper">

    <h2 class="crypto-title">Crypto Deposit (Pay2Coin)</h2>

    <!-- Input Row -->
    <div class="crypto-box">
      <div class="column">
        <input
          type="number"
          v-model.number="amountCoin"
          placeholder="จำนวนเหรียญ USDT"
          @input="calculate"
          class="input-field"
        />
      </div>

      <div class="divider"></div>

      <div class="column select-coin">
        <div class="select-display" @click="toggleDropdown">
          <img :src="selected.image" class="coin-img" />
          <span>{{ selected.text }}</span>
          <span class="arrow">▼</span>
        </div>

        <div v-if="dropdown" class="dropdown">
          <div
            v-for="(item, i) in coinList"
            :key="i"
            class="dropdown-item"
            @click="select(item)"
          >
            <img :src="item.image" class="coin-img" />
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- THB Row -->
    <div class="crypto-box">
      <div class="column">
        <input
          type="text"
          :value="amountTHBDisplay"
          disabled
          class="input-field"
        />
      </div>

      <div class="divider"></div>

      <div class="column select-coin">
        <div class="select-display disabled">
          <img src="/img/Bank/thailand.webp" class="coin-img" />
          <span>THB</span>
        </div>
      </div>
    </div>

    <!-- Rate -->
    <div class="rate-panel">
      <div>Exchange Rate</div>
      <div class="rate-number">{{ selected.rate }} THB</div>
    </div>

    <!-- Submit -->
    <div class="submit-area">
      <button class="btn-submit" @click="submit">
        ยืนยันการทำรายการ
      </button>
    </div>

    <!-- Instruction -->
    <div class="instruction">
      <h3>วิธีฝากเงิน Crypto by Pay2coin</h3>
      <p>
        1. ใส่ยอด USDT ขั้นต่ำ 10 เหรียญ<br />
        2. ระบบจะพาไปหน้าสแกน QR<br />
        3. เมื่อยืนยันบน Blockchain แล้ว เครดิตจะเข้าบัญชีอัตโนมัติ
      </p>

      <p class="warning">
        * โปรดตรวจสอบ Address ก่อนโอน<br />
        * หากเคยฝากเงินบาทมาก่อน ต้อง KYC ก่อนถอนเป็น Crypto
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
const amountCoin = ref<number | null>(null)
const dropdown = ref(false)

const coinList = [
  {
    text: 'USDT (TRC20)',
    coin: 'usdt_trc20',
    image: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    rate: 35.2
  },
  {
    text: 'USDT (ERC20)',
    coin: 'usdt_erc20',
    image: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    rate: 35.0
  }
]

const selected = ref(coinList[0])

const amountTHBDisplay = computed(() => {
  if (!amountCoin.value || amountCoin.value <= 0) return '0.00'
  return (amountCoin.value * selected.value.rate).toFixed(2)
})

const toggleDropdown = () => {
  dropdown.value = !dropdown.value
}

const select = (item: any) => {
  selected.value = item
  dropdown.value = false
}

const calculate = () => {
  // nothing extra now — mockup
}

const submit = () => {
  if (!amountCoin.value || amountCoin.value < 10) {
    alert('กรุณากรอกจำนวนเหรียญขั้นต่ำ 10 USDT')
    return
  }
  alert(`(Mockup) กำลังสร้างหน้าชำระเงินสำหรับ ${amountCoin.value} USDT`)
}
</script>

<style scoped>
.crypto-wrapper {
  background: rgba(0,0,0,0.6);
  padding: 24px;
  border-radius: 10px;
  color: #fff;
}

.crypto-title {
  text-align: center;
  font-size: 26px;
  margin-bottom: 20px;
  font-weight: bold;
}

.crypto-box {
  display: flex;
  gap: 10px;
  padding: 12px;
  border: 1px solid #555;
  border-radius: 8px;
  margin-bottom: 14px;
  align-items: center;
}

.column {
  flex: 1;
}

.input-field {
  width: 100%;
  padding: 10px;
  background: #111;
  border: 1px solid #444;
  border-radius: 6px;
  color: #fff;
}

.divider {
  width: 2px;
  background: #555;
  height: 40px;
}

.select-coin {
  position: relative;
}

.select-display {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #222;
  padding: 10px;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
}

.select-display.disabled {
  cursor: default;
}

.coin-img {
  width: 22px;
  height: 22px;
}

.arrow {
  margin-left: auto;
  font-size: 12px;
}

.dropdown {
  position: absolute;
  top: 47px;
  left: 0;
  background: #333;
  width: 200px;
  border-radius: 6px;
  padding: 6px;
  z-index: 10;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px;
  cursor: pointer;
  font-size: 18px;
}

.dropdown-item:hover {
  background: #555;
}

.rate-panel {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 14px;
}

.rate-number {
  color: #ffd200;
}

.btn-submit {
  width: 100%;
  background: linear-gradient(to bottom, #fffed5, #fee402, #dc972c);
  border: none;
  padding: 12px;
  font-size: 18px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  color: #000;
  font-family: 'ThaiSansLite', 'thaisanslite_r1', 'thaisanslite', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.instruction {
  margin-top: 30px;
  font-size: 18px;
}

.instruction h3 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}

.warning {
  color: #ff8080;
  margin-top: 14px;
}
</style>
