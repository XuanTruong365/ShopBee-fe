<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import slideImage1 from "@/assets/images/slide-image-1.webp";
import slideImage2 from "@/assets/images/slide-image-2.webp";
import slideImage3 from "@/assets/images/slide-image-3.webp";
import { Next, Prev } from "@/assets/icons.js";

// Danh sách ảnh
const images = ref([
    slideImage1, slideImage2, slideImage3, slideImage1, slideImage2, slideImage3, slideImage2
]);

const currentImageIndex = ref(0);
const itemWidth = ref(205); // Kích thước ảnh mặc định (desktop)
const visibleCount = ref(4); // Số ảnh hiển thị mặc định

// Responsive handler
const updateResponsive = () => {
    const width = window.innerWidth;
    if (width < 576) {
        itemWidth.value = 100;
        visibleCount.value = 1;
    } else if (width < 768) {
        itemWidth.value = 140;
        visibleCount.value = 2;
    } else if (width < 992) {
        itemWidth.value = 180;
        visibleCount.value = 3;
    } else {
        itemWidth.value = 205;
        visibleCount.value = 4;
    }
};

onMounted(() => {
    updateResponsive();
    window.addEventListener("resize", updateResponsive);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateResponsive);
});

// Tính toán ảnh cuộn tối đa
const maxScroll = computed(() => images.value.length - visibleCount.value);

// Nút next/prev
const nextImage = () => {
    if (currentImageIndex.value < maxScroll.value) {
        currentImageIndex.value++;
    }
};

const prevImage = () => {
    if (currentImageIndex.value > 0) {
        currentImageIndex.value--;
    }
};

const isNextDisabled = computed(() => currentImageIndex.value >= maxScroll.value);
const isPrevDisabled = computed(() => currentImageIndex.value <= 0);
</script>

<template>
    <div class="slide-wrapper position-relative">
        <div class="image-slider d-flex align-items-center">
            <div
                class="image-container d-flex"
                :style="{ transform: `translateX(-${currentImageIndex * (itemWidth + 13)}px)` }"
            >
                <div
                    v-for="(item, index) in images"
                    :key="index"
                    class="image-item"
                    :style="{ width: `${itemWidth}px`, height: `${itemWidth * 0.46}px` }"
                >
                    <img :src="item" alt="Slide Image" />
                </div>
            </div>
        </div>

        <!-- Nút prev -->
        <button class="btn-slide prev" @click="prevImage" :disabled="isPrevDisabled">
            <span v-html="Prev"></span>
        </button>

        <!-- Nút next -->
        <button class="btn-slide next" @click="nextImage" :disabled="isNextDisabled">
            <span v-html="Next"></span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.slide-wrapper {
    width: 100%;
    //overflow: hidden;
    position: relative;
}

.image-slider {
    overflow: hidden;
    width: 100%;

    .image-container {
        display: flex;
        transition: transform 0.4s ease-in-out;

        .image-item {
            margin-right: 13px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
                display: block;
            }
        }
    }
}

.btn-slide {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    background-color: rgba(0, 0, 0, 0.4);
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    z-index: 10;

    span {
        width: 16px;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    &.prev {
        left: -17px;
    }

    &.next {
        right: -18px;
    }
}
</style>
