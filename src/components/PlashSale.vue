<script setup>
import {ref, onMounted, onUnmounted, computed} from 'vue';
import imagePlashSale from "@/assets/images/plash-sale.webp";
import ProductItem from "@/components/product/ProductItem.vue";
import imgProductDemo from "@/assets/images/prd-sale-image.webp";
import imageAddSale from "@/assets/images/addProductImage.webp"
import imagePrdBonus from "@/assets/images/bonus-image.webp"
import {Next, Prev} from "@/assets/icons.js";
import slideImage1 from "@/assets/images/slide-image-1.webp";
import slideImage2 from "@/assets/images/slide-image-2.webp";
import slideImage3 from "@/assets/images/slide-image-3.webp";

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

// handle next prevs product

const products = ref([
    {
        productName: "THE FACE SHOP1",
        productDescription: "Sữa Rửa Mặt THE FACE SHOP Làm Sáng Da Có Hạt Rice Water Bright Rice Bran Facial Foaming Cleanser 150ml",
        productImage: imgProductDemo,
        currentPrice: "265.000đ",
        oldPrice: "414.000đ",
        salePercent: 36,
        stars: 5,
        totalReviews: 262,
        totalRemaining: 12,
        bonusImage: imagePrdBonus,
        addSaleImage: imageAddSale,
    },
    {
        productName: "Sữa Rửa Mặt LANEIGE2",
        productDescription: "Sữa Rửa Mặt LANEIGE Fresh Calming Cleanser 150ml",
        productImage: imgProductDemo,
        currentPrice: "350.000đ",
        oldPrice: "480.000đ",
        salePercent: 27,
        stars: 4,
        totalReviews: 150,
        totalRemaining: 20,
        bonusImage: imagePrdBonus,
        addSaleImage: imageAddSale,
    },
    {
        productName: "Sữa Rửa Mặt LANEIGE3",
        productDescription: "Sữa Rửa Mặt LANEIGE Fresh Calming Cleanser 150ml",
        productImage: imgProductDemo,
        currentPrice: "350.000đ",
        oldPrice: "480.000đ",
        salePercent: 27,
        stars: 4,
        totalReviews: 150,
        totalRemaining: 20,
        bonusImage: imagePrdBonus,
        addSaleImage: imageAddSale,
    },
    {
        productName: "Sữa Rửa Mặt LANEIGE4",
        productDescription: "Sữa Rửa Mặt LANEIGE Fresh Calming Cleanser 150ml",
        productImage: imgProductDemo,
        currentPrice: "350.000đ",
        oldPrice: "480.000đ",
        salePercent: 27,
        stars: 4,
        totalReviews: 150,
        totalRemaining: 20,
        bonusImage: imagePrdBonus,
        addSaleImage: imageAddSale,
    },
    {
        productName: "Sữa Rửa Mặt LANEIGE5",
        productDescription: "Sữa Rửa Mặt LANEIGE Fresh Calming Cleanser 150ml",
        productImage: imgProductDemo,
        currentPrice: "350.000đ",
        oldPrice: "480.000đ",
        salePercent: 27,
        stars: 4,
        totalReviews: 150,
        totalRemaining: 20,
        bonusImage: imagePrdBonus,
        addSaleImage: imageAddSale,
    },
    {
        productName: "THE FACE SHOP6",
        productDescription: "Sữa Rửa Mặt THE FACE SHOP Làm Sáng Da Có Hạt Rice Water Bright Rice Bran Facial Foaming Cleanser 150ml",
        productImage: imgProductDemo,
        currentPrice: "265.000đ",
        oldPrice: "414.000đ",
        salePercent: 36,
        stars: 5,
        totalReviews: 262,
        totalRemaining: 12,
        bonusImage: imagePrdBonus,
        addSaleImage: imageAddSale,
    },
]);

const visibleImagesCount = products.value.length - 1;

// Vị trí ảnh hiện tại
const currentProductIndex = ref(0);
const nextProduct = () => {
    if (currentProductIndex.value < products.value.length - visibleImagesCount) {
        currentProductIndex.value++;
    }
};

// Hàm để chuyển về hình ảnh trước đó
const prevProduct = () => {
    if (currentProductIndex.value > 0) {
        currentProductIndex.value--;
    }
};

const isNextDisabled = computed(() => currentProductIndex.value >= products.value.length - visibleImagesCount);
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
            <div class="btn-view-all bg-white fw-bold">Xem tất cả</div>
        </div>
        <div class="list-product mt-4 position-relative">
            <div class="row flex-nowrap overflow-hidden pt-2">
                <div class="col-12 col-md-6 col-lg-2 custom-col" v-for="(product, index) in products" :key="index"
                     :style="{ transform: `translateX(-${currentProductIndex * (100 / visibleImagesCount)}%)` }">
                    <ProductItem
                        :productName="product.productName"
                        :productDescription="product.productDescription"
                        :productImage="product.productImage"
                        :currentPrice="product.currentPrice"
                        :oldPrice="product.oldPrice"
                        :salePercent="product.salePercent"
                        :stars="product.stars"
                        :totalReviews="product.totalReviews"
                        :totalRemaining="product.totalRemaining"
                        :bonusImage="product.bonusImage"
                        :addSaleImage="product.addSaleImage"
                    />
                </div>
            </div>
            <div class="btn-slide next" @click="nextProduct" v-if="!isNextDisabled">
                <span class="d-flex align-items-center justify-content-center" v-html="Prev"></span>
            </div>
            <div class="btn-slide prev" @click="prevProduct" v-if="!isPrevDisabled">
                <span class="d-flex align-items-center justify-content-center" v-html="Next"></span>
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
