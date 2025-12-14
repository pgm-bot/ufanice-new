<template>
  <div>
    <Header></Header>
    <HeadMobile></HeadMobile>

    <div class="wrapper-c">
      <div class="tt_l tt_full p_gl">
        <!-- Page Title -->
        <div id="ct_from" class="tt_l tt_full title_page">
          <h1>รางวัลประจำเดือน</h1>
        </div>

        <!-- Content Area -->
        <div class="tt_l tt_full tt_content bg">
          <div class="thaitheme_read">

            <!-- Main Description -->
            <p class="main-description">
              <strong>แจกรางวัลประจำเดือน</strong>&nbsp;ทางทีมงานจะมีการแจกรางวัลประจำเดือนสำหรับลูกค้าที่
              มียอดการรับเงินคืนสูงสุดประจำเดือน และ ยอดแนะนำเพื่อนสูงสุดประจำเดือน
              ทางทีมงานมีรางวัลตอบแทนทั้งเงินสดและทองคำมูลค่านับล้านต่อเดือน
              ทุกวันที่ 1 จะดึงรายชื่อและ พนักงานจะติดต่อกลับหาลูกค้าเพื่อขอที่อยู่ส่งรางวัล
            </p>

            <!-- Subtitle -->
            <p class="has-text-align-center subtitle">
              <strong>..เลือกรับรางวัลประจำเดือนได้เลย..&nbsp;</strong>
            </p>

            <p>&nbsp;</p>

            <!-- Reward Banners -->
            <div class="reward-banners">
              <!-- Top Affiliate Banner -->
              <NuxtLink to="/topaff" class="reward-banner-link">
                <img
                  class="reward-banner"
                  src="https://ufanance12.com/wp-content/uploads/2023/06/11.jpg"
                  alt="รางวัลนักชวนเพื่อน"
                  width="680"
                  height="210"
                  loading="lazy"
                >
              </NuxtLink>

              <!-- Top Deposit Banner -->
              <NuxtLink to="/topdepo" class="reward-banner-link">
                <img
                  class="reward-banner"
                  src="https://ufanance12.com/wp-content/uploads/2023/06/10.jpg"
                  alt="รางวัลยอดฝากสูงสุด"
                  width="680"
                  height="210"
                  loading="lazy"
                >
              </NuxtLink>

              <!-- KJ-D Event Banner -->
              <NuxtLink to="/kj-d#ct_from" class="reward-banner-link">
                <img
                  class="reward-banner"
                  src="https://ufanance12.com/ev1010.png"
                  alt="Event พิเศษ"
                  width="680"
                  height="210"
                  loading="lazy"
                >
              </NuxtLink>
            </div>

            <p>&nbsp;</p>

            <!-- Additional Info -->
            <p class="info-text">
              (แจกรางวัลนักชวนเพื่อน ที่ยอดชวนเยอะที่สุด 30 อันดับประจำเดือน)
            </p>

            <!-- Schedule Info -->
            <p class="schedule-info">
              <strong>"จะประกาศรางวัลทุกวันที่ 1 ของทุกเดือน และ ทีมงานจะติดต่อลูกค้าและส่งของรางวัลให้ผู้โชคดีไม่เกินวันที่ 5 ของเดือน"</strong>
            </p>

            <!-- Highlight Cards -->
            <div class="highlight-cards">
              <div class="highlight-card">
                <div class="card-icon">
                  <i class="fas fa-trophy"></i>
                </div>
                <h3>รางวัลมูลค่านับล้าน</h3>
                <p>เงินสดและทองคำมูลค่านับล้านต่อเดือน</p>
              </div>

              <div class="highlight-card">
                <div class="card-icon">
                  <i class="fas fa-calendar-alt"></i>
                </div>
                <h3>ประกาศทุกวันที่ 1</h3>
                <p>ดึงรายชื่อและประกาศผู้โชคดีทุกต้นเดือน</p>
              </div>

              <div class="highlight-card">
                <div class="card-icon">
                  <i class="fas fa-shipping-fast"></i>
                </div>
                <h3>ส่งรางวัลไม่เกินวันที่ 5</h3>
                <p>ทีมงานจะติดต่อและจัดส่งรางวัลถึงที่</p>
              </div>
            </div>

            <!-- Reward Categories -->
            <div class="reward-categories">
              <h2 class="section-title">หมวดรางวัล</h2>

              <div class="category-grid">
                <div class="category-card">
                  <div class="category-number">1</div>
                  <h3>ยอดการรับเงินคืนสูงสุด</h3>
                  <p>สำหรับสมาชิกที่มียอดรับเงินคืนสะสมสูงสุดประจำเดือน</p>
                  <NuxtLink to="/topdepo" class="category-link">
                    ดูอันดับ <i class="fas fa-arrow-right"></i>
                  </NuxtLink>
                </div>

                <div class="category-card">
                  <div class="category-number">2</div>
                  <h3>ยอดแนะนำเพื่อนสูงสุด</h3>
                  <p>สำหรับสมาชิกที่แนะนำเพื่อนได้มากที่สุดประจำเดือน</p>
                  <NuxtLink to="/topaff" class="category-link">
                    ดูอันดับ <i class="fas fa-arrow-right"></i>
                  </NuxtLink>
                </div>
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
// Set page metadata
useHead({
  title: 'รางวัลประจำเดือน - UFANICE',
  meta: [
    {
      name: 'description',
      content: 'แจกรางวัลประจำเดือน เงินสดและทองคำมูลค่านับล้าน สำหรับลูกค้าที่มียอดสูงสุด UFANICE'
    },
    {
      property: 'og:title',
      content: 'รางวัลประจำเดือน - UFANICE'
    },
    {
      property: 'og:description',
      content: 'แจกรางวัลประจำเดือน เงินสดและทองคำมูลค่านับล้าน'
    }
  ]
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
  padding: 30px;
  max-width: 900px;
  margin: 0 auto;
}

/* Text Styles */
.main-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  text-align: left;
  margin-bottom: 25px;
}

.main-description strong {
  color: #1e3c72;
  font-size: 1.2rem;
}

.has-text-align-center {
  text-align: center;
}

.subtitle {
  font-size: 1.3rem;
  color: #f3c31a;
  margin: 20px 0;
  font-weight: bold;
}

/* Reward Banners */
.reward-banners {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
}

.reward-banner-link {
  display: block;
  text-align: center;
  transition: all 0.3s;
}

.reward-banner-link:hover {
  transform: translateY(-5px);
  filter: brightness(1.05);
}

.reward-banner {
  max-width: 100%;
  width: 680px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
}

.reward-banner:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

/* Info Text */
.info-text {
  color: #666;
  font-size: 1rem;
  text-align: center;
  margin: 20px 0;
}

.schedule-info {
  background: linear-gradient(135deg, #f3c31a 0%, #ffd700 100%);
  color: #1e3c72;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.05rem;
  margin: 30px 0;
  box-shadow: 0 4px 12px rgba(243, 195, 26, 0.3);
}

/* Highlight Cards */
.highlight-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 40px 0;
}

.highlight-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  border: 2px solid transparent;
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-color: #f3c31a;
}

.card-icon {
  font-size: 3rem;
  color: #f3c31a;
  margin-bottom: 15px;
}

.highlight-card h3 {
  color: #1e3c72;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.highlight-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Reward Categories */
.reward-categories {
  margin-top: 50px;
}

.section-title {
  color: #1e3c72;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #f3c31a 0%, #ffd700 100%);
  border-radius: 2px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.category-card {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  border-radius: 15px;
  padding: 30px;
  color: white;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(30, 60, 114, 0.3);
}

.category-number {
  position: absolute;
  top: -20px;
  right: 20px;
  font-size: 8rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.1);
  line-height: 1;
}

.category-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
}

.category-card p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  opacity: 0.9;
  position: relative;
  z-index: 1;
}

.category-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #f3c31a;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;
  position: relative;
  z-index: 1;
}

.category-link:hover {
  gap: 12px;
  color: #ffd700;
}

.category-link i {
  transition: transform 0.3s;
}

.category-link:hover i {
  transform: translateX(5px);
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
    padding: 20px 15px;
  }

  .title_page h1 {
    font-size: 1.5rem;
  }

  .main-description {
    font-size: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .highlight-cards {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .category-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .category-number {
    font-size: 6rem;
    top: -10px;
    right: 10px;
  }

  .reward-banner {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .title_page h1 {
    font-size: 1.3rem;
  }

  .thaitheme_read {
    padding: 15px 10px;
  }

  .main-description {
    font-size: 0.95rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .highlight-card {
    padding: 20px 15px;
  }

  .card-icon {
    font-size: 2.5rem;
  }

  .highlight-card h3 {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .category-card {
    padding: 25px 20px;
  }

  .category-card h3 {
    font-size: 1.2rem;
  }

  .category-number {
    font-size: 5rem;
  }
}

/* Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.thaitheme_read > * {
  animation: fadeInUp 0.6s ease-out;
}

.reward-banner-link:nth-child(1) {
  animation-delay: 0.1s;
}

.reward-banner-link:nth-child(2) {
  animation-delay: 0.2s;
}

.reward-banner-link:nth-child(3) {
  animation-delay: 0.3s;
}
</style>
