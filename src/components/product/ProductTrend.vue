<script setup>
import ProductItem from "@/components/product/ProductItem.vue";
import imgMainSeller from "@/assets/images/bestseller-main.webp";
import imgAddProduct from "@/assets/images/addProductImage.webp";
import imgOnline from "@/assets/images/imgOnline.webp";
import imgSubSeller from "@/assets/images/sub-bestseller.webp";
import ButtonMain from "@/components/buttonMain.vue";

const listProductsTrend1 = [
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
<div class="product-trend-container w-100">
  <h1 class="heading-trend text-uppercase ">Sản phẩm nổi bật</h1>
  <div class="prd-trend-list">
      <div class="mb-3 d-flex align-items-center justify-content-center gap-5">
          <span class="tab-trend-1 active">Chăm Sóc Cơ Thể</span>
          <span class="tab-trend-2">Dưỡng Da</span>
      </div>
      <div class="trend-1-total d-flex row">
          <div
                  class="product col-12 col-md-6 col-lg-2"
                  v-for="(item) in listProductsTrend1"
                  :key="item.id"
          >
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
      <div class="trend-2-total">
          <h1>trend2</h1>
      </div>
      <button-main />
  </div>
</div>
</template>

<style lang="scss" scoped>
.product-trend-container {
  .heading-trend {
    font-size: 26px;
    font-style:normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 0.5em;
    color: #000;
  }
  .prd-trend-list {
    .tab-trend-1, .tab-trend-2 {
      font-size: 16px;
      color: #ccc;
    }
    .active {
      color: #94c83d;
    }
  }
}
</style>