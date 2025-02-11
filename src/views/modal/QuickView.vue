<script setup>
import {ref, onMounted, onUnmounted, computed} from 'vue';
import { eventBus } from '@/app/constants/eventBus.js';
import {ArrowDown, ArrowUp, Cart, Close, Heart, Home, Prev, Right, Star} from "@/assets/icons.js";
import slideImage1 from "@/assets/images/son1.webp";
import slideImage2 from "@/assets/images/son2.webp";
import slideImage3 from "@/assets/images/son3.webp";
import slideImage4 from "@/assets/images/son4.webp";
import slideImage5 from "@/assets/images/son5.webp";
import slideImage6 from "@/assets/images/son6.webp";


const images = ref([
    { img: slideImage1, color: "#f26c60" },
    { img: slideImage2, color: "#ed2224" },
    { img: slideImage3, color: "#d80710" },
    { img: slideImage4, color: "#f26c60" },
    { img: slideImage5, color: "#ed2224" },
    { img: slideImage6, color: "#d80710" },
]);

// Ảnh hiện tại
const currentIndex = ref(0);
const currentImage = computed(() => images.value[currentIndex.value].img);

const prevImage = () => {
    currentIndex.value =
        currentIndex.value > 0 ? currentIndex.value - 1 : images.value.length - 1;
};

const nextImage = () => {
    currentIndex.value =
        currentIndex.value < images.value.length - 1 ? currentIndex.value + 1 : 0;
};

// Chọn ảnh theo index
const selectImage = (index) => {
    currentIndex.value = index;
};

const isOverlayOpen = ref(false);
const overlayData = ref(null);
const soldOut = ref(false);

const openQuickView = (data) => {
    overlayData.value = data;
    isOverlayOpen.value = true;
};

const days = ref('1')
const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');

const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeLeft = endOfDay - now;

    const totalSeconds = Math.floor(timeLeft / 1000);
    const hrs = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    hours.value = String(hrs).padStart(2, '0');
    minutes.value = String(mins).padStart(2, '0');
    seconds.value = String(secs).padStart(2, '0');
};

let interval;

onMounted(() => {
    eventBus.on('open-quickview', openQuickView);

    calculateTimeLeft();
    interval = setInterval(calculateTimeLeft, 1000);
});

onUnmounted(() => {
    eventBus.off('open-quickview', openQuickView);

    clearInterval(interval);
});

</script>

<template>
    <div v-if="isOverlayOpen" class="overlay">
        <div class="overlay-content position-relative">
            <div class="content-product">
                <div class="quick-view-container">
                    <div class="info-section d-flex ">
                        <div class="slide-left-container d-flex gap-3 col-12 col-md-6 p-2">
                            <div class="slide-group position-relative pt-5 pb-5">
                                <div class="slide-image">
                                    <div
                                        v-for="(item, index) in images"
                                        :key="index"
                                        class="image-item d-flex align-items-center mb-3"
                                        @click="selectImage(index)"
                                        :class="{ active: currentIndex === index }"
                                    >
                                        <img :src="item.img" alt="Slide" class="w-100 h-100" />
                                    </div>
                                </div>
                                <button class="control-prev position-absolute border-0 bg-white"
                                        type="button"
                                        @click="prevImage"
                                >
                                    <span class="control-prev-icon" v-html="ArrowUp"></span>
                                </button>
                                <button class="control-next position-absolute border-0 bg-white"
                                        type="button"
                                        @click="nextImage"
                                >
                                    <span class="control-next-icon" v-html="ArrowDown"></span>
                                </button>
                            </div>
                            <div class="container-slide">
                                <img class="w-100 h-100" :src="currentImage" alt="Active Image" />
                            </div>
                        </div>
                        <div class="product-info" style="padding-left: 8px; padding-right: 8px;">
                            <div class="left-product-info">
                                <div class="product-info-heading">
                                    <div class="product-header-wrapper">
                                        <div class="product-header size-14 lh-20">
                                            <div class="text-uppercase brand-name">
                                                THE FACE SHOP
                                            </div>
                                            <h1 class="info-title fw-bold mt-2 mb-3">
                                                Kem Chống Nắng Lâu Trôi THE FACE SHOP Natural Sun Eco Power Long-Lasting Sun Cream SPF50+ PA+++ 50ml
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="align-center mb-10">
                                        <div class="product-rating__space d-flex align-items-center flex-nowrap">
                                            <div class="d-flex rate-section align-items-start gap-3">
                                                <ul class="text-primary d-flex align-items-center gap-2 size-14 mr-10 p-0" tabindex="-1" role="radiogroup">
                                                    <li class="list-unstyled"><span class="start-count d-block" v-html="Star"></span></li>
                                                    <li class="list-unstyled"><span class="start-count d-block" v-html="Star"></span></li>
                                                    <li class="list-unstyled"><span class="start-count d-block" v-html="Star"></span></li>
                                                    <li class="list-unstyled"><span class="start-count d-block" v-html="Star"></span></li>
                                                    <li class="list-unstyled"><span class="start-count d-block" v-html="Star"></span></li>
                                                </ul>
                                                <span class="text-underline total-review text-decoration-underline">134 Đánh giá</span>
                                            </div>
                                            <div class="space-item">
                                                <span class="icon-heart" ></span>
                                                <p class="total-like">0 thích</p>
                                            </div>
                                            <div class="space-item">
                                                <div><b>Xuất xứ: </b>Hàn Quốc</div>
                                            </div>
                                            <div class="space-item">
                                                <div><b>SKU: </b><span>31500167</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="mb-10 product-price-large d-flex align-items-center gap-3 flex-nowrap">
                                            <div><span class="product-price-main">655.000đ</span></div>
                                            <div><span class="fw-400 text-decoration-line-through product-price">1.310.000đ</span></div>
                                            <div>
                                                <div class="discount-label position-relative"><span>-50%</span></div>
                                            </div>
                                        </div>
                                        <div class="payment-method mt-3 d-flex flex-column gap-3">
                                            <div class="payment-detail d-flex align-items-center justify-content-between p-3 border">
                                                <div class="payment-method-1"><b class="m-lg-1">Từ</b> <span class="size-16 fw-700 price">62.225đ</span></div>
                                                <div class="price-description mt-8 d-flex align-center gap-3 space-between flex-wrap">
                                                    <div class="d-flex align-items-center" style="gap: 6px;">
                                                        <div><span class="description">với</span></div>
                                                        <div><img src="https://image.hsv-tech.io/400x0/tfs/common/e2f1077c-5250-4fce-8f4b-cf3de24f8443.webp" alt="logo" height="14px"></div>
                                                    </div>
                                                    <div><img src="https://image.hsv-tech.io/400x0/tfs/common/4e3b4568-b8c7-4d23-b910-f6f17ab08b3b.webp" alt="logo" height="20px"></div>
                                                </div>
                                            </div>
                                            <div class="payment-detail d-flex align-items-center justify-content-between p-3 border">
                                                <div class="payment-method-2"><b class="m-lg-1">Từ</b> <span class="size-16 fw-700 price">218.333đ</span></div>
                                                <div class="price-description-2 mt-8 d-flex align-center gap-3 space-between flex-wrap">
                                                    <div class="d-flex align-items-center" style="gap: 6px;">
                                                        <div class="ant-space-item"><span class="description">với</span></div>
                                                        <div class="ant-space-item"><img src="https://image.hsv-tech.io/400x0/tfs/common/071db641-ed06-4af0-9f3d-37a8d39cb917.webp" alt="logo" height="11px"></div>
                                                    </div>
                                                    <div class="price-off">Giảm 70k (*)</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flash-sale-block__vertical mt-3 mb-3">
                                            <div class="flash-sale-block__header text-center">
                                                <span ></span><span>DEAL HOT - ĐỪNG BỎ LỠ</span>
                                            </div>
                                            <div class="flash-sale-block__time-wrapper">
                                                <div class="countdown d-flex align-items-center gap-2 justify-content-center text-uppercase fw-bold">
                                                    <div><span class="countdown-number m-lg-1" style="color: #94c83d;">{{ days }}</span>ngày</div>
                                                    <div><span class="countdown-number m-lg-1" style="color: #94c83d;">{{ hours }}</span>giờ</div>
                                                    <div><span class="countdown-number m-lg-1" style="color: #94c83d;">{{ minutes }}</span>phút</div>
                                                    <div><span class="countdown-number m-lg-1" style="color: #94c83d;">{{ seconds }}</span>giây</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="promotion-container">
                                            <div class="promotion-title-main mb-3">Các sản phẩm được tặng kèm
                                                <div class="promotion-title-sub mb-2">Chọn 1 trong những quà tặng sau</div>
                                            </div>
                                            <div class="promotion-list">
                                                <div class="w-100" v-for="(item, index) in 5">
                                                    <label
                                                        class="promotion-item w-100 d-flex align-items-center mb-5">
                                                <span class="ant-radio ant-radio-checked">
                                                    <input type="radio" class="radio-input">
                                                    <span class="ant-radio-inner"></span>
                                                </span>
                                                        <span>
                                                    <div class="d-flex w-full">
                                                        <img width="45px" height="45px"
                                                             src="https://image.hsv-tech.io/400x0/tfs/common/13d98249-5181-44e1-a6d4-1710ad85b159.webp"
                                                             alt="gift" class="mr-10">
                                                        <div class="flex-1">
                                                            <div class="w-full">Kem Chống Nắng Lâu Trôi THE FACE SHOP Natural Sun Eco Power Long-Lasting Sun Cream SPF50+ PA+++ 50ml</div>
                                                            <div class="size-s d-flex space-between w-full">50ml</div>
                                                        </div>
                                                    </div>
                                                </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="color-container d-flex flex-column gap-2 mb-3">
                                            <div class="d-flex align-items-center gap-2 ">
                                                <div class="color-heading">
                                                    <div class="fw-bold">Color:</div>
                                                </div>
                                                <div class="color-name">01 Juicy Apricot</div>
                                            </div>
                                            <div role="presentation" class="variants-section w-100 pointer">
                                                <div class="variant-list d-flex align-items-center gap-2">
                                                    <div v-for="(item, index) in images"
                                                         :key="index"
                                                         class="variant-item d-flex align-items-center justify-content-center"
                                                         :class="{ active: index === currentIndex }"
                                                         role="presentation"
                                                         @click="selectImage(index)"
                                                    >
                                                        <div class="variant-item-color"  :style="{ backgroundColor: item.color }"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="delivery-wrapper">
                                            <h2 class="delivery-heading">Hình thức mua hàng</h2>
                                            <div class="delivery-container mb-3">
                                                <div class="delivery-item d-flex align-items-center gap-2">
                                                    <input type="radio" class="delivery-radio" value="delivery" checked>
                                                    <span>Giao tận nơi</span>
                                                </div>
                                                <div class="delivery-item d-flex align-items-center gap-2">
                                                    <input type="radio" class="pick-up-radio" value="pick-up">
                                                    <span>Nhận tại cửa hàng</span>
                                                </div>
                                            </div>
                                            <div class="delivery-bottom d-flex align-items-center justify-content-between">
                                                <div class="home-brand d-flex align-items-center gap-2">
                                                    <span class="icon-home-brand" v-html="Home"></span>
                                                    <div class="brand-desc">
                                                        <span class="fw-bold">17 / 28</span>
                                                        <span> chi nhánh còn mặt hàng này</span>
                                                    </div>
                                                </div>
                                                <div class="view-brand fw-bold">
                                                    Xem tất cả các cửa hàng
                                                    <span class="icon-view-brand m-lg-2" v-html="Right"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="action-product d-flex align-items-center justify-content-between mt-3">
                                            <div class="count-product d-flex gap-1 align-items-center">
                                                <button class="btn fw-bold">-</button>
                                                <div class="prd-total">1</div>
                                                <button class="btn fw-bold">+</button>
                                            </div>
                                            <div class="add-cart fw-bold d-flex align-items-center justify-content-center gap-2">
                                                <span class="d-block" v-html="Cart"></span>
                                                Thêm vào giỏ hàng
                                            </div>
                                            <div class="buy-now fw-bold">Mua Ngay</div>
                                            <div class="like-product d-flex align-items-center justify-content-center">
                                                <span v-html="Heart"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="soldOut">
                                        <div>Sản phẩm hết hàng</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-center mt-3 ">
                        <button type="button view-all-prd"
                                class="btn fw-bold text-uppercase btn-text-hover"><span>Xem chi tiết sản phẩm</span>
                        </button>
                    </div>
                </div>
                <button @click="isOverlayOpen = false" class="position-absolute border-0 action-close-modal">
                    <span class="d-block" v-html="Close"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}
.overlay-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    height: 100%;
    width: 80%;
    overflow: hidden;
    overflow-y: auto;
    scrollbar-width: none;
    z-index: 9999;
}
.action-close-modal {
    top: 8px;
    right: 23px;
    background-color: #fff;
    span {
        background-color: #fff;
        width: 20px;
    }
}
</style>