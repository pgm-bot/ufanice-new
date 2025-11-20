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
              ปั่นกงล้อลุ้นรับทอง 1 บาท ได้ทุกวัน
            </h5>
          </div>
        </div>
        <div
          class="bgwhitealpha text-secondary shadow-sm rounded p-0 xtarget col-lotto d-flex flex-row justify-content-between mb-1 pb-0"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 text-center canvas-container">
                <canvas
                  id="canvas"
                  width="652"
                  height="708"
                  data-responsiveminwidth="652"
                  data-responsivescaleheight="true"
                  data-responsivemargin="50"
                  class="background_spin"
                  @click="spin"
                >
                  <p style="{color: white}" align="center">
                    Sorry, your browser doesn't support canvas. Please try
                    another.
                  </p>
                </canvas>
              </div>
            </div>

            <div class="col-12 pl-0 pr-0 text-center">
              <div
                class="account-table table-content table-responsive"
                style="max-width:800px;margin:auto"
              >
                <table class="table">
                  <thead>
                    <tr>
                      <td style="text-align: center" colspan="3" class="boxTd">รายการรับรางวัลล่าสุด</td>
                    </tr>
                    <tr>
                      <td style="min-width:70px" class="boxTd">USER</td>
                      <td style="min-width:50px" class="boxTd">จำนวน</td>
                      <td style="min-width:170px" class="boxTd">วันที่</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="d in data" :key="d.id">
                      <td>{{d.username}}</td>
                      <td>{{d.money}}</td>
                      <td>{{d.transDate}}</td>
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

<script>
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  scrollToTop: false,
  data() {
    return {
      wheel: null,
      wheelPower: 0,
      wheelSpinning: false,
      audio: null,
      lock: false,
      game: {
        status: 1, // 1 = enabled, 0 = disabled
        msg: "เกมหมุนกงล้อพร้อมใช้งาน",
      },
      data: [
        // Mock data - TODO: Replace with API call
        // {
        //   username: "UFA12345",
        //   money: "1000",
        //   transDate: "2024-11-20 20:38:13"
        // },
      ],
    };
  },
  async mounted() {
    // Load Winwheel.js library
    await this.loadWinwheelScript();

    // Load data from JSON files
    try {
      const [res, res2] = await Promise.all([
        fetch('/api/spin/last-summary.json').then(r => r.json()),
        fetch('/api/game/status.json').then(r => r.json()),
      ]);

      if (res.status == 200) {
        this.data = res.data;
      }
      if (res2.status == 200 && res2.data[11]) {
        this.game = res2.data[11];
      }
    } catch (error) {
      console.error('Failed to load spin data:', error);
    }

    this.audio = new Audio("/kids-music.mp3");

    // Wait for Winwheel to be available
    if (typeof window.Winwheel === 'undefined') {
      console.error('Winwheel not loaded');
      return;
    }

    this.wheel = new window.Winwheel({
      canvasId: "canvas",
      drawMode: "image",
      outerRadius: 212, // Set outer radius so wheel fits inside the background.
      innerRadius: 75, // Make wheel hollow so segments don't go all way to center.
      textFontSize: 24, // Set default font size for the segments.
      textOrientation: "vertical", // Make text vertial so goes down from the outside of wheel.
      textAlignment: "outer", // Align text to outside of wheel.
      numSegments: 10, // Specify number of segments.
      //   responsive: true,
      segments: [
        { fillStyle: "#ee1c24", text: "50 บาท" },
        { fillStyle: "#3cb878", text: "100 บาท" },
        { fillStyle: "#f6989d", text: "150 บาท" },
        { fillStyle: "#00aef0", text: "200 บาท" },
        { fillStyle: "#f26522", text: "5 บาท" },
        { fillStyle: "#e70697", text: "300 บาท" },
        { fillStyle: "#fff200", text: "500 บาท" },
        { fillStyle: "#f6989d", text: "1000 บาท" },
        { fillStyle: "#ee1c24", text: "2000 บาท" },
        { fillStyle: "#3cb878", text: "ทอง 1 บาท" },
      ],
      animation: {
        type: "spinToStop",
        duration: 10, // Duration in seconds.
        spins: 1, // Default number of complete spins.
        callbackFinished: this.alertPrize,
        // callbackSound: this.playSound, // Function to call when the tick sound is to be triggered.
        soundTrigger: "pin", // Specify pins are to trigger the sound, the other option is 'segment'.
      },
    });
    let firstImg = new Image();
    firstImg.onload = function () {
      this.wheel.wheelImage = firstImg;
      this.wheel.draw();
    }.bind(this);

    firstImg.src = "/wheel_transparent.png";
  },
  methods: {
    loadWinwheelScript() {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        if (typeof window.Winwheel !== 'undefined') {
          resolve();
          return;
        }

        // Load TweenMax first (required by Winwheel)
        const loadTweenMax = new Promise((resolveTween, rejectTween) => {
          if (typeof window.TweenMax !== 'undefined') {
            resolveTween();
            return;
          }
          const tweenScript = document.createElement('script');
          tweenScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js';
          tweenScript.async = true;
          tweenScript.onload = () => resolveTween();
          tweenScript.onerror = () => rejectTween(new Error('Failed to load TweenMax.js'));
          document.head.appendChild(tweenScript);
        });

        // Then load Winwheel
        loadTweenMax.then(() => {
          const script = document.createElement('script');
          script.src = '/Winwheel.min.js';
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Failed to load Winwheel.js'));
          document.head.appendChild(script);
        }).catch(reject);
      });
    },
    alertPrize(indicatedSegment) {
      this.wheelSpinning = false;
      this.audio.pause();
      this.audio.currentTime = 0;
      Swal.fire(
        "ยินดีด้วย !",
        `คุณได้รับรางวัล ${indicatedSegment.text} ไว้มาหมุนใหม่นะคะ`,
        "success"
      );
    },
    // playSound() {
    //   this.audio.pause();
    //   this.audio.currentTime = 0;
    //   this.audio.play();
    // },
    async spin() {
      if (this.game.status) {
        if (this.lock) {
          return;
        }
        Swal.fire({
          title: "ยอมรับข้อตกลง",
          width: 400,
          html:
            "<div style='font-size:16px;margin-top:10px;text-align:left;'>- แนะนำลูกค้าที่เล่นหวยค้างไว จะต้องรอผลออกก่อน ค่อยเปิดไพ่ ไม่งั้นจะถอนไม่ได้ค่ะ</div>" +
            "<div style='font-size:16px;color:red;margin-top:15px;margin-bottom:10px;text-align:left;'>- ถ้าหากคุณหมุนกงล้อ คุณจะต้องทำเทิร์น 4 เท่า <br>ของโบนัสที่เปิดได้ถึงจะสามารถถอนเงินได้ค่ะ </div>",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ยอมรับ",
          cancelButtonText: "ไม่",
        }).then(async (result) => {
          if (result.value) {
            this.lock = true;
            this.wheel.animation.spins = 10;
            // Ensure that spinning can't be clicked again while already running.
            if (this.wheelSpinning == false) {
              this.wheel.rotationAngle = 0;
              this.wheel.draw();

              // Load spin results and pick random one
              try {
                const resultsData = await fetch('/api/spin/results.json').then(r => r.json());
                const randomIndex = Math.floor(Math.random() * resultsData.results.length);
                const selectedResult = resultsData.results[randomIndex];

                const res = {
                  status: 200,
                  data: selectedResult
                };

                this.lock = false;

                if (res.status != 200) {
                  Swal.fire("ผิดพลาด!", res.data, "error");
                  return;
                } else if (res.data.status == -1) {
                  Swal.fire("ผิดพลาด!", res.data.msg, "error");
                  return;
                }

                this.audio.play();
                this.audio.volume = 0.6;

                this.wheel.animation.stopAngle = this.wheel.getRandomForSegment(
                  res.data.result
                );

                // Based on the power level selected adjust the number of spins for the wheel
                if (this.wheelPower == 1) {
                  this.wheel.animation.spins = 3;
                } else if (this.wheelPower == 2) {
                  this.wheel.animation.spins = 6;
                } else if (this.wheelPower == 3) {
                  this.wheel.animation.spins = 10;
                }

                this.wheel.startAnimation();
                this.wheelSpinning = true;
              } catch (error) {
                this.lock = false;
                console.error('Spin error:', error);
                Swal.fire("ผิดพลาด!", "ไม่สามารถหมุนกงล้อได้ กรุณาลองใหม่", "error");
              }
            }
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
/* td.the_wheel {
  background-image: url(~assets/wheel.png);
  background-position: center;
  background-repeat: none;
} */
.boxTd {
  background: #c69608;
  color: white !important;
}
/* table td {
  padding: 0.3rem;
} */
canvas {
  width: 100%;
  max-width: 652px;
  height: auto;
}

.canvas-container {
  margin-top: -60px;
  padding: 0px;
}
.background_spin {
  background-image: url('/wheel.png');
  background-size: cover;
  background-position: center 6px;
  background-repeat: no-repeat;
}
@media (max-width: 576px) {
  .canvas-container{
    margin-top: -30px;
  }
  .background_spin {
    background-position: center 6px;
  }
}
</style>
