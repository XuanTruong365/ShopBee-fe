<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import slideImage1 from "@/assets/images/slide-image-1.webp";
import slideImage2 from "@/assets/images/slide-image-2.webp";
import slideImage3 from "@/assets/images/slide-image-3.webp";
import { Next, Prev } from "@/assets/icons.js";

const images = ref([slideImage1, slideImage2, slideImage3]);
const currentIndex = ref(0);
const interval = ref(null);
let timeoutRestart = null;

// Chuyển ảnh
const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// Auto play
const startSlideShow = () => {
    interval.value = setInterval(() => {
        nextImage();
    }, 5000);
};

const stopSlideShow = () => {
    clearInterval(interval.value);
};

// Khi người dùng thao tác
const userInteraction = () => {
    stopSlideShow();
    clearTimeout(timeoutRestart);
    timeoutRestart = setTimeout(() => {
        startSlideShow();
    }, 8000); // tự khởi động lại sau 8s không thao tác
};

onMounted(() => {
    startSlideShow();
});

onUnmounted(() => {
    stopSlideShow();
    clearTimeout(timeoutRestart);
});
</script>

<template>
    <div class="image-slider" @mouseenter="stopSlideShow" @mouseleave="startSlideShow">
        <div class="image-container">
            <img :src="images[currentIndex]" alt="Slide Image" />
        </div>

        <!-- Controls -->
        <div class="btn-slide prev" @click="() => { prevImage(); userInteraction(); }">
            <span v-html="Prev"></span>
        </div>
        <div class="btn-slide next" @click="() => { nextImage(); userInteraction(); }">
            <span v-html="Next"></span>
        </div>

        <!-- Dot navigation -->
        <div class="dots-container">
      <span
          v-for="(image, index) in images"
          :key="index"
          class="dot"
          :class="{ active: currentIndex === index }"
          @click="() => { currentIndex = index; userInteraction(); }"
      ></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.image-slider {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-color: #f9f9f9;

    @media (max-width: 768px) {
        //aspect-ratio: 4 / 3;
      .btn-slide {
        display: none !important;
      }
    }

    .image-container {
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
    }

    .btn-slide {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;
        background-color: rgba(0, 0, 0, 0.4);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 10;
        transition: background-color 0.3s ease;

        span {
            width: 16px;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.6);
        }

        &.prev {
            left: 10px;
        }

        &.next {
            right: 10px;
        }
    }

    .dots-container {
        position: absolute;
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 10;
    }

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        transition: all 0.3s ease;

        &.active {
            background-color: white;
        }

        &:hover {
            background-color: rgba(255, 255, 255, 0.8);
        }
    }
}
</style>
