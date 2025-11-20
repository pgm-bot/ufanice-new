<template>
  <div class="contentbody">
    <div id="section-content" class="container mt-0">
      <div class="bar-back">
        <nuxt-link to="../../member">
          <i class="fas fa-chevron-left" aria-hidden="true"></i> หน้าหลัก
        </nuxt-link>
      </div>
      <div
        class="p-2 w-100 bg-light main-content align-self-stretch"
        style="min-height: calc((100vh - 106px) - 90px);"
      >
        <div
          class="bgwhitealpha text-secondary shadow-sm rounded p-2 xtarget col-lotto d-flex flex-row justify-content-between mb-1 pb-0"
        >
          <div class="lotto-title">
            <h5 style="color:#343a40">
              <i class="fas fa-gift" aria-hidden="true"></i>
              คลิก..เพื่อเปิดไพ่ลุ้นรับโบนัสประจำวัน
            </h5>
          </div>
        </div>
        <div
          class="bgwhitealpha text-secondary shadow-sm rounded p-2 xtarget col-lotto d-flex flex-row justify-content-between mb-1 pb-0"
        >
          <div class="container box">
            <div class="row body_">
              <div class="col-6 col-sm-4 col-lg-2 p-0">
                <div class="flip-card" :class="getActiveClass(pick == 0)" @click="pickCard(0)">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="/card.jpg" alt="Avatar" />
                    </div>
                    <div class="flip-card-back">
                      <img v-if="result" :src="`/card_${result}.jpg`" alt="result" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 p-0">
                <div class="flip-card" :class="getActiveClass(pick == 1)" @click="pickCard(1)">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="/card.jpg" alt="Avatar" />
                    </div>
                    <div class="flip-card-back">
                      <img v-if="result" :src="`/card_${result}.jpg`" alt="result" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 p-0">
                <div class="flip-card" :class="getActiveClass(pick == 2)" @click="pickCard(2)">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="/card.jpg" alt="Avatar" />
                    </div>
                    <div class="flip-card-back">
                      <img v-if="result" :src="`/card_${result}.jpg`" alt="result" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 p-0">
                <div class="flip-card" :class="getActiveClass(pick == 3)" @click="pickCard(3)">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="/card.jpg" alt="Avatar" />
                      <!-- <img v-if="result" :src="`/card_${result}.jpg`" alt="result" /> -->
                    </div>
                    <div class="flip-card-back">
                      <img v-if="result" :src="`/card_${result}.jpg`" alt="result" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 p-0">
                <div class="flip-card" :class="getActiveClass(pick == 4)" @click="pickCard(4)">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="/card.jpg" alt="Avatar" />
                    </div>
                    <div class="flip-card-back">
                      <img v-if="result" :src="`/card_${result}.jpg`" alt="result" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 p-0">
                <div class="flip-card" :class="getActiveClass(pick == 5)" @click="pickCard(5)">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="/card.jpg" alt="Avatar" />
                    </div>
                    <div class="flip-card-back">
                      <img v-if="result" :src="`/card_${result}.jpg`" alt="result" />
                    </div>
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

<script>
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  scrollToTop: false,
  data() {
    return {
      game: {
        status: 1, // 1 = enabled, 0 = disabled
        msg: "เกมเปิดไพ่พร้อมใช้งาน",
      },
      pick: -1,
      result: null,
      lock: false,
    };
  },
  async mounted() {
    // Load game status from JSON
    try {
      const res = await fetch('/api/game/status.json').then(r => r.json());
      if (res.status == 200 && res.data[10]) {
        this.game = res.data[10];
      }
    } catch (error) {
      console.error('Failed to load card game status:', error);
    }
  },
  methods: {
    getActiveClass(isCurrentPick) {
      return isCurrentPick ? "active" : "";
    },
    pickCard(p) {
      // this.game.status = true;
      // alert(this.game.status);
      if (this.game.status) {
        if (this.lock) {
          return;
        }
        Swal.fire({
          title: "ยอมรับข้อตกลง",
          width: 400,
          html:
            "<div style='font-size:16px;margin-top:10px;text-align:left;'>- แนะนำลูกค้าที่เล่นหวยค้างไว จะต้องรอผลออกก่อน ค่อยเปิดไพ่ ไม่งั้นจะถอนไม่ได้ค่ะ</div>" +
            "<div style='font-size:16px;color:red;margin-top:15px;margin-bottom:10px;text-align:left;'>- ถ้าหากคุณเปิดไพ่ คุณจะต้องทำเทิร์น 4 เท่า <br>ของโบนัสที่เปิดได้ถึงจะสามารถถอนเงินได้ค่ะ </div>",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ยอมรับ",
          cancelButtonText: "ไม่",
        }).then((result) => {
          if (result.value) {
            this.lock = true;
            Swal.fire({
              title: "โปรดรอ",
              html: "กำลังโหลดข้อมูล",
              allowOutsideClick: false,
              didOpen: async () => {
                Swal.showLoading();
                setTimeout(async () => {
                  try {
                    // Load card results and pick random one
                    const resultsData = await fetch('/api/card/results.json').then(r => r.json());
                    const randomIndex = Math.floor(Math.random() * resultsData.results.length);
                    const selectedResult = resultsData.results[randomIndex];

                    const res = {
                      status: 200,
                      data: selectedResult
                    };

                    this.lock = false;
                    if (res.status == 200) {
                      if (res.data.status == 1) {
                        this.result = res.data.result;
                        this.pick = p;
                        setTimeout(() => {
                          Swal.fire({
                            title: res.data.title,
                            text: `เปิดได้ไพ่ ${res.data.result} ${res.data.msg}`,
                            icon: "success",
                            showCancelButton: false,
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "ตกลง",
                          }).then((result) => {
                            this.$router.push("/card");
                          });
                        }, 1000);
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "ผิดพลาด",
                          text: res.data.msg,
                        }).then(() => {
                          this.$router.push("/card");
                        });
                      }
                    } else {
                      Swal.fire({
                        icon: "error",
                        title: "ผิดพลาด",
                        text: "ไม่สามารถเปิดไพ่ได้",
                      }).then(() => {
                        this.$router.push("/card");
                      });
                    }
                  } catch (error) {
                    this.lock = false;
                    console.error('Card pick error:', error);
                    Swal.fire({
                      icon: "error",
                      title: "ผิดพลาด",
                      text: "ไม่สามารถเปิดไพ่ได้ กรุณาลองใหม่",
                    });
                  }
                }, 500);
              },
            });
          }
        });
      } else {
        Swal.fire({
          type: "info",
          title: "ไม่สำเร็จ กรุณาลองใหม่",
          text: this.game.msg,
        });
      }
    },
  },
};
</script>

<style scoped>
/* Card Container Styles */
.bgwhitealpha {
  background: rgba(255, 255, 255, 0.9);
  margin-bottom: 10px;
  border: rgba(255, 255, 255, 1) 2px solid;
}

.lotto-title h4,
.lotto-title h5 {
  font-family: inherit !important;
  color: #343a40;
  line-height: 1;
  margin-bottom: 0;
}

.container.box {
  padding: 15px;
}

.body_ {
  background-size: 100% 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.body_ > div {
  flex: 0 0 auto;
  min-width: 0;
}

/* Flip Card Styles */
.flip-card {
  height: 278px;
  perspective: 1000px;
  margin-top: 15px;
  margin-bottom: 15px;
  /* cursor: pointer;
  transition: all 0.2s ease-in-out; */
}

/* .flip-card:hover {
  filter: brightness(150%);
  transform: scale(1.1);
} */

.flip-card-inner {
  position: relative;
  width: 100%;
  text-align: center;
  /* transition: transform 0.6s; */
  transform-style: preserve-3d;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.flip-card-inner:hover {
  filter: brightness(150%);
  transform: scale(1.1);
}

.flip-card-inner img {
  height: 250px;
}

/* .flip-card .flip-card-inner {
  transform: rotateY(180deg);
} */

.active .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  color: black;
}

.flip-card-back {
  color: white;
  transform: rotateY(180deg);
}

.body_ {
  /* background-color: black; */
  background-size: 100% 100%;
  margin-top: 20px;
  /* padding-top: 20px;
  padding-bottom: 20px; */
}

@media (max-width: 1200px) {
  .flip-card-inner img {
    height: 200px;
  }
}

@media (max-width: 991px) {
  .box {
    padding: 0px;
  }
  .flip-card {
    height: 300px;
  }
  .flip-card-inner img {
    height: 300px;
  }
  /* ให้ไพ่อยู่ในแถวเดียวแต่เล็กลง */
  .body_ > div {
    flex: 0 0 33.333%;
    max-width: 33.333%;
  }
}

@media (max-width: 767px) {
  .flip-card {
    height: 220px;
  }
  .flip-card-inner img {
    height: 220px;
  }
  /* ให้ไพ่ 2 ใบต่อแถวบน mobile */
  .body_ {
    flex-wrap: wrap;
  }
  .body_ > div {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 576px) {
  .txx {
    font-size: 18px;
  }
  .flip-card {
    height: 250px;
  }
  .flip-card-inner img {
    height: 250px;
  }
}

/* สำหรับหน้าจอใหญ่ - ให้ไพ่อยู่ในแถวเดียว 6 ใบ */
@media (min-width: 992px) {
  .body_ {
    flex-wrap: nowrap;
  }
  .body_ > div {
    flex: 0 0 16.666%;
    max-width: 16.666%;
  }
}
</style>
