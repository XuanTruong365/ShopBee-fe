<script setup>

import SlideImage from "@/components/slideImage.vue";
import BrandDemo from "@/components/brandDemo.vue";
import PlashSale from "@/components/PlashSale.vue";
</script>

<template>
<div class="content-container w-100">
  <slide-image />
  <div class="brand-container">
      <brand-demo />
      <PlashSale />
  </div>
</div>
</template>

<style lang="scss" scoped>
.content-container {
  .brand-container {
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    padding: 20px 0;
  }
}
</style>