<script setup>
import { ref, computed } from 'vue';
import slideImage1 from "@/assets/images/slide-image-1.webp";
import slideImage2 from "@/assets/images/slide-image-2.webp";
import slideImage3 from "@/assets/images/slide-image-3.webp";
import { Next, Prev } from "@/assets/icons.js";

// Danh sách ảnh
const images = ref([
    slideImage1, slideImage2, slideImage3, slideImage1, slideImage2, slideImage3, slideImage2
]);

// Vị trí ảnh hiện tại
const currentImageIndex = ref(0);

// Số ảnh hiển thị trong slider
const visibleImagesCount = images.value.length - 1;

// Hàm để chuyển sang hình ảnh tiếp theo
const nextImage = () => {
    if (currentImageIndex.value < images.value.length - visibleImagesCount) {
        currentImageIndex.value++;
    }
};

// Hàm để chuyển về hình ảnh trước đó
const prevImage = () => {
    if (currentImageIndex.value > 0) {
        currentImageIndex.value--;
    }
};

// Tính toán ẩn hiện nút next và prev
const isNextDisabled = computed(() => currentImageIndex.value >= images.value.length - visibleImagesCount);
const isPrevDisabled = computed(() => currentImageIndex.value <= 0);
</script>

<template>
    <div class="position-relative">
        <div class="image-slider d-flex align-items-center">
            <div
                class="image-container d-flex"
                :style="{ transform: `translateX(-${currentImageIndex * 218}px)` }"
            >
                <div v-for="(item, index) in images" :key="index" class="image-item">
                    <img :src="item" alt="Slide Image" />
                </div>
            </div>
        </div>
        <div class="btn-slide next" @click="nextImage" v-if="!isNextDisabled">
            <span class="d-flex align-items-center justify-content-center" v-html="Prev"></span>
        </div>
        <div class="btn-slide prev" @click="prevImage" v-if="!isPrevDisabled">
            <span class="d-flex align-items-center justify-content-center" v-html="Next"></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.image-slider {
    overflow: hidden;
    width: 100%;
    .image-container {
        display: flex;
        transition: transform 0.5s ease-in-out;

        .image-item {
            margin-right: 13px;
            img {
                width: 205px;
                height: 95px;
                object-fit: cover;
                border-radius: 10px;
            }
        }
    }
}
.btn-slide {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background-color: rgba(192, 232, 252, 0.8);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        width: 10px;
    }

    &.next {
        right: -14px;
    }

    &.prev {
        left: -14px;
    }

    &:hover {
        background-color: rgba(192, 232, 252, 1);
    }
}
</style>
