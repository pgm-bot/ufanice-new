<template>
  <div>
    <HeadMobile />
    <Header />

    <div class="wrapper-c article-page">
      <div class="tt_l tt_full p_gl">
        <div class="tt_l tt_full title_page">
          <h1>{{ article?.title }}</h1>
        </div>

        <div class="tt_l tt_full tt_content bg">
          <div class="thaitheme_read" v-html="article?.content"></div>
        </div>
      </div>
    </div>

    <Footer />
    <FixedFooter />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { articles as articlesData } from "~/data/articles"
import type { Article } from "~/data/articles"

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const article = computed<Article | undefined>(() => articlesData.find(a => a.slug === slug.value))

useHead({
  title: article.value?.title || 'บทความ',
  meta: [
    { name: 'description', content: article.value?.title || 'อ่านบทความจาก UFANANCE' }
  ]
})
</script>
