<template>
  <div id="app">
    
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Set page metadata
useHead({
  title: 'คาสิโนออนไลน์ สมัครเล่นบาคาร่าออนไลน์ สล็อตออนไลน์ - UFANANCE',
  meta: [
    { name: 'description', content: 'UFANANCE คาสิโนออนไลน์' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0b0e11' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<style>
@import './assets/css/global.css';
@import './assets/css/framework.css';
@import './assets/css/imagehover.min.css';
@media screen and (max-width: 800px) {
    body {
        background-image: none !important;
    }
}
body {
    background-color: #0b0e11;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    background-image: url(https://ufanance12.com/wp-content/uploads/2022/06/web-background-image.png);
    background-size: cover;
}
</style>
