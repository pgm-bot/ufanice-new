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