<template>
  <div class="overlay"></div>
</template>

<script setup lang="ts">
// purely decorative layer to match original markup
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
