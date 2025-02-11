<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import slideImage1 from "@/assets/images/slide-image-1.webp"
import slideImage2 from "@/assets/images/slide-image-2.webp"
import slideImage3 from "@/assets/images/slide-image-3.webp"
import {Next, Prev} from "@/assets/icons.js";


const images = ref([
    slideImage1, slideImage2, slideImage3
]);

const currentIndex = ref(0);
const interval = ref(null);

// Hàm để chuyển sang hình ảnh tiếp theo
const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// Hàm để chuyển về hình ảnh trước đó
const prevImage = () => {
    currentIndex.value =
        (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// Hàm để khởi động slide tự động sau 3 giây
const startSlideShow = () => {
    interval.value = setInterval(() => {
        nextImage();
    }, 5000);
};

// Hàm để dừng slide tự động
const stopSlideShow = () => {
    clearInterval(interval.value);
};

onMounted(() => {
    startSlideShow();
});

onUnmounted(() => {
    stopSlideShow();
});
</script>

<template>
    <div class="image-slider">
        <div class="image-container">
            <img :src="images[currentIndex]" alt="Slide Image" />
        </div>
        <div class="btn-slide prev" @click="prevImage">
            <span class="d-flex align-items-center justify-content-center" v-html="Next"></span>
        </div>
        <div class="btn-slide next" @click="nextImage">
            <span class="d-flex align-items-center justify-content-center" v-html="Prev"></span>
        </div>
        <div class="dots-container">
          <span
              v-for="(image, index) in images"
              :key="index"
              class="dot"
              :class="{ active: currentIndex === index }"
              @click="currentIndex = index"
          ></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.image-slider {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .btn-slide {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        border-radius: 50%;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: rgba(0, 0, 0, 0.7);
        }

        &.prev {
            left: 10px;
        }

        &.next {
            right: 10px;
        }

        span {
            width: 16px;
        }
    }

    .dots-container {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 10px;
    }

    .dot {
        width: 12px;
        height: 12px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &.active {
            background-color: rgba(255, 255, 255, 1);
        }

        &:hover {
            background-color: rgba(255, 255, 255, 0.8);
        }
    }
}
</style>
