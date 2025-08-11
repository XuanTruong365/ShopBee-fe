<script setup>
import {ref, onMounted, onUnmounted, computed} from 'vue';
import imagePlashSale from "@/assets/images/plash-sale.webp";
import ProductItem from "@/components/product/ProductItem.vue";
import imgProductDemo from "@/assets/images/prd-sale-image.webp";
import imageAddSale from "@/assets/images/addProductImage.webp"
import imagePrdBonus from "@/assets/images/bonus-image.webp"
import {Next, Prev} from "@/assets/icons.js";

const days = ref('00');
const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');

// Hàm để tính toán thời gian còn lại trong ngày
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

// Dữ liệu mẫu
const products = ref([
    { productName: "THE FACE SHOP1", productImage: imgProductDemo, currentPrice: "265.000đ", oldPrice: "414.000đ", salePercent: 36, stars: 5, totalReviews: 262, totalRemaining: 12, bonusImage: imagePrdBonus, addSaleImage: imageAddSale },
    { productName: "LANEIGE2", productImage: imgProductDemo, currentPrice: "350.000đ", oldPrice: "480.000đ", salePercent: 27, stars: 4, totalReviews: 150, totalRemaining: 20, bonusImage: imagePrdBonus, addSaleImage: imageAddSale },
    { productName: "LANEIGE3", productImage: imgProductDemo, currentPrice: "350.000đ", oldPrice: "480.000đ", salePercent: 27, stars: 4, totalReviews: 150, totalRemaining: 20, bonusImage: imagePrdBonus, addSaleImage: imageAddSale },
    { productName: "LANEIGE4", productImage: imgProductDemo, currentPrice: "350.000đ", oldPrice: "480.000đ", salePercent: 27, stars: 4, totalReviews: 150, totalRemaining: 20, bonusImage: imagePrdBonus, addSaleImage: imageAddSale },
    { productName: "LANEIGE5", productImage: imgProductDemo, currentPrice: "350.000đ", oldPrice: "480.000đ", salePercent: 27, stars: 4, totalReviews: 150, totalRemaining: 20, bonusImage: imagePrdBonus, addSaleImage: imageAddSale },
    { productName: "THE FACE SHOP6", productImage: imgProductDemo, currentPrice: "265.000đ", oldPrice: "414.000đ", salePercent: 36, stars: 5, totalReviews: 262, totalRemaining: 12, bonusImage: imagePrdBonus, addSaleImage: imageAddSale },
]);

// Số lượng item hiển thị cùng lúc
const visibleCount = 5;
const currentProductIndex = ref(0);

// Cắt mảng để hiển thị
const visibleProducts = computed(() => {
    return products.value.slice(currentProductIndex.value, currentProductIndex.value + visibleCount);
});

// Next & Prev
const nextProduct = () => {
    if (currentProductIndex.value < products.value.length - visibleCount) {
        currentProductIndex.value++;
    }
};
const prevProduct = () => {
    if (currentProductIndex.value > 0) {
        currentProductIndex.value--;
    }
};

// Disabled nút
const isNextDisabled = computed(() => currentProductIndex.value >= products.value.length - visibleCount);
const isPrevDisabled = computed(() => currentProductIndex.value <= 0);

// Hàm cập nhật thời gian mỗi giây
let interval;
onMounted(() => {
    calculateTimeLeft();
    interval = setInterval(calculateTimeLeft, 1000);
});

// Xóa interval khi component bị unmount
onUnmounted(() => {
    clearInterval(interval);
});
</script>

<template>
    <div class="plash-sale-container mt-5">
        <div class="plash-sale-time d-flex align-items-center justify-content-between">
            <div class="img-plash-sale">
                <img class="w-100" :src="imagePlashSale" />
            </div>
            <div class="d-flex flex-column gap-2">
                <span class="text-time">Thời gian còn lại</span>
                <div class="d-flex align-items-center bg-white count-down">
                    <div class="time-view border-end text-uppercase fw-bold"> {{ hours }} GIỜ</div>
                    <div class="time-view border-end text-uppercase fw-bold"> {{ minutes }} PHÚT</div>
                    <div class="time-view text-uppercase fw-bold"> {{ seconds }} GIÂY</div>
                </div>
            </div>
            <a href="/products" class="btn-view-all bg-white fw-bold">Xem tất cả</a>
        </div>
        <div class="list-product position-relative">
            <div class="row flex-nowrap overflow-hidden pt-2">
                <div class="col-12 col-md-6 col-lg-2 custom-col"
                     v-for="(product, index) in visibleProducts"
                     :key="index">
                    <ProductItem v-bind="product" />
                </div>
            </div>

            <!-- Nút điều hướng -->
            <div class="btn-slide next" @click="nextProduct" v-if="!isNextDisabled">
                <span v-html="Next"></span>
            </div>
            <div class="btn-slide prev" @click="prevProduct" v-if="!isPrevDisabled">
                <span v-html="Prev"></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.plash-sale-container {
  border-radius: 21px;
  padding: 20px 40px 40px 40px;
  background: rgb(7, 181, 232);

  .plash-sale-time {
    .img-plash-sale {
      max-width: 26%;
    }
    .text-time {
      font-size: 14px;
      color: #000;
    }
    .count-down {
      padding: 5px 0px;
      border-radius: 10px;
      .time-view {
        font-size: 16px;
        padding: 0px 20px;
        line-height: calc(23 / 16);
        color: red;
      }
    }
    .btn-view-all {
      font-size: 16px;
      line-height: calc(23 / 16);
      color: red;
      padding: 12px 20px;
      border-radius: 10px;
    }
  }
    .list-product {
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
    }
}
</style>
