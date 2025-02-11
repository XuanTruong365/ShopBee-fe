<script setup>
import { defineProps } from "vue";

defineProps({
    banners: {
        type: Array,
        required: true,
    },
    height: {
        type: String,
        default: "206px",
    },
    width: {
        type: String,
        default: "30%",
    },
});
</script>

<template>
    <div
            class="promotion-list d-flex flex-row gap-3 justify-content-between w-100"
            :style="{ height }"
    >
        <div
                class="promotion-banner-item"
                v-for="(banner, index) in banners"
                :key="index"
                :style="{ width }"
        >
            <a :href="banner.link" target="_blank" rel="noopener noreferrer">
                <img :src="banner.image" alt="Banner Image" class="img-card w-100 h-100" />
            </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
.promotion-list {
  margin: 20px 0;

  .promotion-banner-item {
    cursor: pointer;
    border-radius: 10px;

    .img-card {
      border-radius: 10px;
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: ease 0.5s;
    }
  }
}
</style>
