<script setup>
import { defineProps, ref } from 'vue'
import { Next, Prev } from "@/assets/icons.js";

const props = defineProps({
    listImages: {
        type: Array,
        default: () => []
    },
    imageBottom: {
        type: String,
        required: true
    },
    menuItems: {
        type: Array,
        default: () => []
    }
})

// Số lượng ảnh cần hiển thị cùng lúc
const imagesToShow = 6;

// Khởi tạo index của ảnh đầu tiên trong loạt 6 ảnh
const startIndex = ref(0);

// Hàm xử lý khi nhấn Next
const nextImage = () => {
    startIndex.value = (startIndex.value + 1) % props.listImages.length;
}

// Hàm xử lý khi nhấn Prev
const prevImage = () => {
    startIndex.value = (startIndex.value - 1 + props.listImages.length) % props.listImages.length;
}

// Hàm lấy danh sách ảnh hiển thị
const visibleImages = () => {
    // Lấy ra loạt 6 ảnh liên tiếp từ startIndex
    return props.listImages.slice(startIndex.value, startIndex.value + imagesToShow).concat(
        props.listImages.slice(0, Math.max(0, (startIndex.value + imagesToShow) - props.listImages.length))
    );
}
</script>

<template>
    <div class="sub-menu-container w-100">
        <div ref="imageContainer" class="sub-menu-image position-relative row mb-5 w-100">
            <span
                class="icon-prev d-block position-absolute bg-white d-flex align-items-center"
                v-html="Prev"
                @click="prevImage"
            ></span>

            <div class="sub-image-main d-flex align-items-center gap-3 overflow-hidden">
                <div
                    class="sub-image col-12 col-sm-6 col-md-4 col-lg-3"
                    v-for="(item, index) in visibleImages()"
                    :key="index"
                >
                    <img :src="item" class="img-fluid image-item w-100 h-100" />
                </div>
            </div>

            <span
                class="icon-next d-block position-absolute bg-white d-flex align-items-center"
                v-html="Next"
                @click="nextImage"
            ></span>
        </div>

        <div class="sub-menu-bottom row">
            <div
                v-for="(menu, index) in menuItems"
                :key="index"
                class="bottom-list col-12 col-sm-6 col-md-4 col-lg-2"
            >
                <ul>
                    <li v-for="(menuItem, itemIndex) in menu" :key="itemIndex">
                        {{ menuItem }}
                    </li>
                </ul>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-6">
                <img :src="imageBottom" class="img-fluid" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.sub-menu-container {
    padding: 26px 66px;
    background-color: #fafafa;

    .sub-menu-image {
        .icon-prev, .icon-next {
            cursor: pointer;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            background-color: white;
        }

        .icon-prev {
            right: -20px;
        }

        .icon-next {
            left: -5px;
        }
    }

    .sub-image {
        flex: 0 0 auto;
        width: 203px;
        height: 93px;
        border-radius: 20px;

        .image-item {
            object-fit: cover;
            border-radius: 20px;
        }
    }

    .sub-menu-bottom ul {
        list-style-type: none;
        padding: 0;
        li:first-child {
            font-size: 14px;
            font-weight: 700;
            color: #000;
        }
    }
}
</style>
