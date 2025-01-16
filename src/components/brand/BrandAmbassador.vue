<script setup>
import {Next, Prev} from "@/assets/icons.js";
import imgMainSeller from "@/assets/images/bestseller-main.webp";
import imgAddProduct from "@/assets/images/addProductImage.webp";
import imgOnline from "@/assets/images/imgOnline.webp";
import imgSubSeller from "@/assets/images/sub-bestseller.webp";
import ProductItem from "@/components/product/ProductItem.vue";
import {computed, ref} from "vue";

const listProducts = ref([
    {
        id: 1,
        productName: "Son môi LUX1",
        productDescription: "Son môi cao cấp với màu sắc thời thượng.",
        productImage: imgMainSeller,
        currentPrice: "250,000₫",
        oldPrice: "300,000₫",
        salePercent: "17",
        totalReviews: 120,
        stars: 4,
        totalRemaining: 50,
        addSaleImage: imgAddProduct,
        bonusImage: imgOnline,
        subImage: imgSubSeller
    },
    {
        id: 2,
        productName: "Kem nền SkinFit2",
        productDescription: "Kem nền mịn màng, giữ lâu trên da.",
        productImage: imgMainSeller,
        currentPrice: "350,000₫",
        oldPrice: "400,000₫",
        salePercent: "12",
        totalReviews: 90,
        stars: 5,
        totalRemaining: 30,
    },
    {
        id: 3,
        productName: "Phấn phủ Perfect Matte3",
        productDescription: "Phấn phủ kiềm dầu, giúp da rạng rỡ.",
        productImage: imgMainSeller,
        currentPrice: "200,000₫",
        oldPrice: "250,000₫",
        salePercent: "20",
        totalReviews: 75,
        stars: 3,
        totalRemaining: 20,
    },
    {
        id: 4,
        productName: "Son môi LUX4",
        productDescription: "Son môi cao cấp với màu sắc thời thượng.",
        productImage: imgMainSeller,
        currentPrice: "250,000₫",
        oldPrice: "300,000₫",
        salePercent: "17",
        totalReviews: 120,
        stars: 4,
        totalRemaining: 50,
    },
    {
        id: 5,
        productName: "Kem nền SkinFit5",
        productDescription: "Kem nền mịn màng, giữ lâu trên da.",
        productImage: imgMainSeller,
        currentPrice: "350,000₫",
        oldPrice: "400,000₫",
        salePercent: "12",
        totalReviews: 90,
        stars: 5,
        totalRemaining: 30,
    },
    {
        id: 6,
        productName: "Phấn phủ Perfect Matte6",
        productDescription: "Phấn phủ kiềm dầu, giúp da rạng rỡ.",
        productImage: imgMainSeller,
        currentPrice: "200,000₫",
        oldPrice: "250,000₫",
        salePercent: "20",
        totalReviews: 75,
        stars: 3,
        totalRemaining: 20,
    },
    {
        id: 7,
        productName: "Kem nền SkinFit7",
        productDescription: "Kem nền mịn màng, giữ lâu trên da.",
        productImage: imgMainSeller,
        currentPrice: "350,000₫",
        oldPrice: "400,000₫",
        salePercent: "12",
        totalReviews: 90,
        stars: 5,
        totalRemaining: 30,
    },
    {
        id: 8,
        productName: "Phấn phủ Perfect Matte8",
        productDescription: "Phấn phủ kiềm dầu, giúp da rạng rỡ.",
        productImage: imgMainSeller,
        currentPrice: "200,000₫",
        oldPrice: "250,000₫",
        salePercent: "20",
        totalReviews: 75,
        stars: 3,
        totalRemaining: 20,
    },
]);

const startIndex = ref(0);

const visibleProducts = computed(() => {
    return listProducts.value.slice(startIndex.value, startIndex.value + 3);
});

const prevProducts = () => {
    if (startIndex.value > 0) {
        startIndex.value -= 3;
    }
};

const nextProducts = () => {
    if (startIndex.value + 3 < listProducts.value.length) {
        startIndex.value += 3;
    }
};

</script>

<template>
    <div class="brand-ambassador mb-5 mt-5">
        <div class="container w-100 d-flex align-items-center">
            <div class="brand-ambassador-banner"></div>
            <div class="brand-ambassador-content d-flex align-items-center flex-column gap-3">
                <div class="banner-pr__title text-center mt-5">THE FACE SHOP With WONWOO <br/> ĐẠI SỨ THƯƠNG HIỆU TOÀN CẦU</div>
                <div class="banner-pr__desc text-center">SEVENTEEN WONWOO chính thức trở thành gương mặt đại diện <br/> mới của thương hiệu THE FACE SHOP CLEAN BEAUTY toàn cầu.</div>
                <div class="product-carousel position-relative mt-3 mb-3">
                    <div class="list-product row">
                        <div class="product-item col" v-for="(item, index) in visibleProducts" :key="index">
                            <ProductItem
                                :product-name="item.productName"
                                :product-description="item.productDescription"
                                :product-image="item.productImage"
                                :add-sale-image="item.addSaleImage"
                                :bonus-image="item.bonusImage"
                                :current-price="item.currentPrice"
                                :old-price="item.oldPrice"
                                :sale-percent="item.salePercent"
                                :total-reviews="item.totalReviews"
                                :stars="item.stars"
                                :total-remaining="item.totalRemaining"
                                :product-image-sub="item.subImage"
                            />
                        </div>
                        <div
                            class="btn-slide next"
                            v-if="startIndex + 3 <= listProducts.length"
                            @click="nextProducts"
                        >
                            <span class="d-flex align-items-center justify-content-center" v-html="Prev"></span>
                        </div>
                        <div
                            class="btn-slide prev"
                            v-if="startIndex !== 0"
                            @click="prevProducts"
                        >
                            <span class="d-flex align-items-center justify-content-center" v-html="Next"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.brand-ambassador {
  background-image: url(https://image.hsv-tech.io/1920x0/tfs/common/64cfecf3-3bbc-4dfc-b28e-edcb2245e9f5.webp);
  background-color: rgb(204, 204, 204);
  min-height: 650px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  .brand-ambassador-banner {
    width: 30%;
  }
  .brand-ambassador-content {
    width: 70%;
    .banner-pr__title {
      font-weight: bold;
      font-size: 27px;
      text-transform: uppercase;
    }
    .banner-pr__desc {
      font-size: 14px;
    }
    .product-carousel {
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
                    right: -15px;
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
  }
}
</style>