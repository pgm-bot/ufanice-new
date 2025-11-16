<template>
  <div class="tt_l tt_full bg_4">
    <div class="wrapper-c">
      <h2 class="tt_l tt_full h_slot">
        <a :title="sectionTitleValue" :href="sectionLinkValue">
          {{ sectionTitleValue }}
        </a>
      </h2>
      <div class="tt_l tt_full arhx"></div>

      <div class="tt_l tt_full btmc">
        <article
          v-for="(article, index) in articlesValue"
          :key="`article-${index}`"
          class="tt_l post-l3x Parent zoomIn animated"
          :class="{ last: (index + 1) % 2 === 0 }"
        >
          <NuxtLink :to="article.link" :title="article.title">
            <div class="tt_img">
              <img
                :alt="article.title"
                width="250"
                height="150"
                :src="article.image"
              >
            </div>
            <div class="tt_dsc">
              <h3>{{ article.title }}</h3>
              <p>{{ article.excerpt }}</p>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { articles as articlesData } from '~/data/articles'

interface ArticleCardItem {
  image: string
  link: string
  title: string
  excerpt: string
}

interface Props {
  sectionTitle?: string
  sectionLink?: string
  articles?: ArticleCardItem[]
}

const FALLBACK_IMAGE = 'https://ufanance12.com/wp-content/uploads/2022/09/messageImage_1663164560401-1.jpg'

const defaultArticles = articlesData.slice(0, 4).map(article => ({
  image: article.coverImage || FALLBACK_IMAGE,
  link: `/article/${article.slug}`,
  title: article.title,
  excerpt: article.excerpt || 'อ่านบทความจาก UFANANCE'
}))

const props = defineProps<Props>()

const sectionTitleValue = computed(() => props.sectionTitle ?? 'บทความ UFABET')
const sectionLinkValue = computed(() => props.sectionLink ?? '/article/casino-online')
const articlesValue = computed(() => props.articles ?? defaultArticles)
</script>

<style scoped>
.bg_4 {
  background: linear-gradient(180deg, #1a1d24 0%, #0b0e11 100%);
  padding: 60px 0;
}

.wrapper-c {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.h_slot {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
}

.h_slot a {
  color: #f3c31a;
  text-decoration: none;
  transition: all 0.3s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.h_slot a:hover {
  color: #fbd41a;
  text-shadow: 0 0 10px rgba(243, 195, 26, 0.5);
}

.arhx {
    margin: 10px 0px 10px 0px;
    height: 2px;
    background: linear-gradient(90deg, rgba(156, 103, 39, 0), rgba(225, 164, 19, 0.5) 32%, #f1c413 49%, rgba(240, 163, 15, 0.5) 65%, rgba(253, 246, 174, 0));
}

.btmc {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.post-l3x {
  background: #1a1d24;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.post-l3x:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(243, 195, 26, 0.3);
}

.post-l3x a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tt_img {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.tt_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.post-l3x:hover .tt_img img {
  transform: scale(1.1);
}

.tt_dsc {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tt_dsc h3 {
  font-size: 18px;
  font-weight: 700;
  color: #f3c31a;
  margin: 0 0 15px 0;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.post-l3x:hover .tt_dsc h3 {
  color: #fbd41a;
}

.tt_dsc p {
  font-size: 14px;
  line-height: 1.6;
  color: #ccc;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Responsive */
@media screen and (max-width: 1024px) {
  .btmc {
    gap: 20px;
  }

  .tt_img {
    height: 180px;
  }

  .tt_dsc h3 {
    font-size: 16px;
  }

  .tt_dsc p {
    font-size: 13px;
    -webkit-line-clamp: 3;
  }
}

@media screen and (max-width: 800px) {
  .h_slot {
    font-size: 24px;
  }

  .btmc {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .post-l3x {
    max-width: 100%;
  }

  .tt_img {
    height: 200px;
  }
}

@media screen and (max-width: 480px) {
  .h_slot {
    font-size: 20px;
  }

  .tt_img {
    height: 150px;
  }

  .tt_dsc {
    padding: 15px;
  }

  .tt_dsc h3 {
    font-size: 15px;
  }

  .tt_dsc p {
    font-size: 12px;
  }
}
</style>
