<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { eventBus } from '@/app/constants/eventBus.js';
import {Cart, Heart, Home, Prev, Right, Star} from "@/assets/icons.js";
import ButtonMain from "@/components/buttonMain.vue";

const isOverlayOpen = ref(false);
const overlayData = ref(null);

const openQuickView = (data) => {
    console.log('Overlay mở với dữ liệu:', data);
    overlayData.value = data;
    isOverlayOpen.value = true;
};

onMounted(() => {
    console.log('Đăng ký sự kiện open-quickview');
    eventBus.on('open-quickview', openQuickView);
});

onUnmounted(() => {
    console.log('Hủy đăng ký sự kiện open-quickview');
    eventBus.off('open-quickview', openQuickView);
});
</script>

<template>
    <div v-if="isOverlayOpen" class="overlay">
        <div class="overlay-content position-relative">
            <div class="quick-view-container">
                <div class="info-section d-flex align-items-center">
                    <div class="col-12 col-md-6 p-2">
                        <div class="slide-group">
                            <div class="d-flex w-100 slide-group__container">
                                <div class="slide-group__left shadow-sm">
                                    <div class="container-slide">
                                        <div class="carousel-fade position-relative">
                                            <div class="carousel-inner d-flex align-items-center flex-column">
                                                <div class="carousel-item active">
                                                    <img src="https://image.hsv-tech.io/400x0/tfs/common/58ede517-702f-4eda-a926-1f23f1426ea8.webp" class="d-block w-100" alt="Slide 1">
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="https://image.hsv-tech.io/400x0/tfs/common/faee7728-a016-4334-bb5a-f130544d812d.webp" class="d-block w-100" alt="Slide 2">
                                                </div>
                                                <!-- Thêm các slide tiếp theo ở đây -->
                                            </div>
                                            <button class="carousel-control-prev position-absolute" type="button" data-bs-target="#carouselLeft" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next position-absolute" type="button" data-bs-target="#carouselLeft" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <!-- Phần phải của slider -->
                                <div class="slide-group__right">
                                    <div class="container-slide">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-infor" style="padding-left: 8px; padding-right: 8px;">
                        <div class="left-product-info">
                            <div class="product-infor-heading">
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
                                    <div class="flash-sale-block__header text-center ">
                                        <span ></span><span>DEAL HOT - ĐỪNG BỎ LỠ</span>
                                    </div>
                                    <div class="flash-sale-block__time-wrapper">
                                        <div class="countdown d-flex align-items-center gap-2 justify-content-center text-uppercase fw-bold">
                                            <div><span class="countdown-number m-lg-1" style="color: #94c83d;">00</span>ngày</div>
                                            <div><span class="countdown-number m-lg-1" style="color: #94c83d;">12</span>giờ</div>
                                            <div><span class="countdown-number m-lg-1" style="color: #94c83d;">51</span>phút</div>
                                            <div><span class="countdown-number m-lg-1" style="color: #94c83d;">48</span>giây</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="promotion-container">
                                    <div class="promotion-title-main mb-3">Các sản phẩm được tặng kèm
                                        <div class="promotion-title-sub mb-2">Chọn 1 trong những quà tặng sau</div>
                                    </div>
                                    <div class="promotion-list">
                                        <div class="w-100">
                                            <label
                                                class="w-100 d-flex align-items-center mb-5">
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
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-center mt-3 ">
                    <button type="button view-all-prd"
                            class="btn fw-bold text-uppercase btn-text-hover"><span>Xem chi tiết sản phẩm</span>
                    </button>
                </div>
            </div>
            <button @click="isOverlayOpen = false" class="position-absolute action-close-modal">
                <span v-html=""></span>
            </button>
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
    z-index: 9999;
}
.overlay-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
}
.action-close-modal {
    top: 8px;
    right: 23px;
}
</style>