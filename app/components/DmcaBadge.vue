<template>
  <div class="dmca-wrapper">
    <a
      href="https://www.dmca.com/Protection/Status.aspx?ID=3a8e0298-8797-4f0e-9293-86c86a7d82de&refurl=https://ufanance12.com/"
      title="DMCA.com Protection Status"
      class="dmca-badge"
    >
      <img
        src="https://images.dmca.com/Badges/dmca_copyright_protected150b.png?ID=3a8e0298-8797-4f0e-9293-86c86a7d82de"
        alt="DMCA.com Protection Status"
      >
    </a>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://images.dmca.com/Badges/DMCABadgeHelper.min.js',
      defer: true
    }
  ]
})
</script>

<style scoped>
.dmca-wrapper {
  text-align: right;
  padding: 15px 20px 0;
}

.dmca-badge img {
  height: 40px;
  width: auto;
}
</style>
