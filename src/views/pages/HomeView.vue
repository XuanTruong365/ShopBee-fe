<script setup>
import SlideImage from "@/components/slideImage.vue";
import BrandDemo from "@/components/brandDemo.vue";
import PlashSale from "@/components/PlashSale.vue";
import imageVoucher from "@/assets/images/voucher.webp";
import ProductItem from "@/components/product/ProductItem.vue";
import imgMainSeller from "@/assets/images/bestseller-main.webp"
import imgSubSeller from "@/assets/images/sub-bestseller.webp"
import imgAddProduct from "@/assets/images/addProductImage.webp"
import imgOnline from "@/assets/images/imgOnline.webp"
import PromotionImg from "@/assets/images/promotion-banner.webp"
import ProductTrend from "@/components/product/ProductTrend.vue";
import ButtonMain from "@/components/buttonMain.vue";

const listImageVoucher = [imageVoucher,imageVoucher,imageVoucher]
const listPromotionBanner = [PromotionImg,PromotionImg,PromotionImg]
const listProducts = [
    {
        id: 1,
        productName: "Son môi LUX",
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
        productName: "Kem nền SkinFit",
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
        productName: "Phấn phủ Perfect Matte",
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
        productName: "Son môi LUX",
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
        productName: "Kem nền SkinFit",
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
        productName: "Phấn phủ Perfect Matte",
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
        productName: "Kem nền SkinFit",
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
        productName: "Phấn phủ Perfect Matte",
        productDescription: "Phấn phủ kiềm dầu, giúp da rạng rỡ.",
        productImage: imgMainSeller,
        currentPrice: "200,000₫",
        oldPrice: "250,000₫",
        salePercent: "20",
        totalReviews: 75,
        stars: 3,
        totalRemaining: 20,
    },
];
</script>

<template>
<div class="content-container w-100">
  <slide-image />
  <div class="brand-container container">
      <brand-demo />
      <PlashSale />
      <div class="voucher-list d-flex flex-row gap-3 justify-content-between">
          <div class="voucher-item" v-for="(item, index) in listImageVoucher" :key="index">
              <img :src="item" alt="" class="img-voucher w-100 h-100" />
          </div>
      </div>
      <div class="product-bestseller">
          <h1 class="bestseller-heading text-uppercase">MAKE UP BÁN CHẠY NHẤT</h1>
          <div class="list-products mt-5 d-flex flex-nowrap gap-2 overflow-auto">
              <div
                  class="product"
                  v-for="(item) in listProducts"
                  :key="item.id"
                  style="flex: 0 0 calc(20% - 8px);">
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
          </div>
          <button-main />
      </div>
      <div class="promotion-list d-flex flex-row gap-3 justify-content-between">
          <div class="promotion-banner-item" v-for="(item, index) in listPromotionBanner" :key="index">
              <img :src="item" alt="" class="img-card w-100 h-100" />
          </div>
      </div>
      <ProductTrend />
  </div>
</div>
</template>

<style lang="scss" scoped>
.content-container {
    background-color: #fff;
  .brand-container {
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    padding: 20px 0;
    .voucher-list {
      height: 146px;
      margin: 80px 0;
      .voucher-item {
        cursor: pointer;
        border-radius: 10px;
        .img-voucher {
          border-radius: 10px;
        }
        &:hover {
          transform: translateY(-10px);
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          transition: ease 0.5s;
        }
      }
    }
    .product-bestseller {
        .bestseller-heading {
            font-size: 26px;
            font-style: normal;
            font-weight: 700;
            line-height: 36px;
            letter-spacing: 0em;
            text-align: center;
            margin-bottom: 0.5em;
            color: #000;
        }
        .list-products {
            scrollbar-width: thin;
            scrollbar-color: #ccc transparent;

            &::-webkit-scrollbar {
                height: 8px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: #ccc;
                border-radius: 4px;
            }

            &::-webkit-scrollbar-thumb:hover {
                background-color: #aaa;
            }
        }
    }
    .promotion-list {
      height: 206px;
      margin: 80px 0;
      .promotion-banner-item {
          cursor: pointer;
          border-radius: 10px;
          .img-card {
              border-radius: 10px;
          }
          &:hover {
              transform: translateY(-10px);
              box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
              transition: ease 0.5s;
          }
      }
    }
  }
}
</style>