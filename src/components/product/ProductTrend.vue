<script setup>
import { ref } from "vue";
import ProductItem from "@/components/product/ProductItem.vue";
import imgMainSeller from "@/assets/images/bestseller-main.webp";
import imgAddProduct from "@/assets/images/addProductImage.webp";
import imgOnline from "@/assets/images/imgOnline.webp";
import imgSubSeller from "@/assets/images/sub-bestseller.webp";
import ButtonMain from "@/components/ButtonMain.vue";

const activeTab = ref(1);

const listProductsTrend1 = [
    {
        id: 1,
        productName: "Son môi LUX",
        productDescription: "Son môi cao cấp với màu sắc thời thượng.",
        productImage: imgMainSeller,
        currentPrice: "250,000₫",
        oldPrice: "300,000₫",
        salePercent: 17,
        totalReviews: 120,
        stars: 4,
        totalRemaining: 50,
        addSaleImage: imgAddProduct,
        bonusImage: imgOnline,
        subImage: imgSubSeller,
    },
    {
        id: 2,
        productName: "Kem nền SkinFit",
        productDescription: "Kem nền mịn màng, giữ lâu trên da.",
        productImage: imgMainSeller,
        currentPrice: "350,000₫",
        oldPrice: "400,000₫",
        salePercent: 12,
        totalReviews: 90,
        stars: 5,
        totalRemaining: 30,
    },
    {
        id: 3,
        productName: "Son môi LUX",
        productDescription: "Son môi cao cấp với màu sắc thời thượng.",
        productImage: imgMainSeller,
        currentPrice: "250,000₫",
        oldPrice: "300,000₫",
        salePercent: 17,
        totalReviews: 120,
        stars: 4,
        totalRemaining: 50,
        addSaleImage: imgAddProduct,
        bonusImage: imgOnline,
        subImage: imgSubSeller,
    },
    {
        id: 4,
        productName: "Kem nền SkinFit",
        productDescription: "Kem nền mịn màng, giữ lâu trên da.",
        productImage: imgMainSeller,
        currentPrice: "350,000₫",
        oldPrice: "400,000₫",
        salePercent: 12,
        totalReviews: 90,
        stars: 5,
        totalRemaining: 30,
    },
    {
        id: 5,
        productName: "Son môi LUX",
        productDescription: "Son môi cao cấp với màu sắc thời thượng.",
        productImage: imgMainSeller,
        currentPrice: "250,000₫",
        oldPrice: "300,000₫",
        salePercent: 17,
        totalReviews: 120,
        stars: 4,
        totalRemaining: 50,
        addSaleImage: imgAddProduct,
        bonusImage: imgOnline,
        subImage: imgSubSeller,
    },
    {
        id: 6,
        productName: "Kem nền SkinFit",
        productDescription: "Kem nền mịn màng, giữ lâu trên da.",
        productImage: imgMainSeller,
        currentPrice: "350,000₫",
        oldPrice: "400,000₫",
        salePercent: 12,
        totalReviews: 90,
        stars: 5,
        totalRemaining: 30,
    },
    {
        id: 7,
        productName: "Son môi LUX",
        productDescription: "Son môi cao cấp với màu sắc thời thượng.",
        productImage: imgMainSeller,
        currentPrice: "250,000₫",
        oldPrice: "300,000₫",
        salePercent: 17,
        totalReviews: 120,
        stars: 4,
        totalRemaining: 50,
        addSaleImage: imgAddProduct,
        bonusImage: imgOnline,
        subImage: imgSubSeller,
    },
    {
        id: 8,
        productName: "Kem nền SkinFit",
        productDescription: "Kem nền mịn màng, giữ lâu trên da.",
        productImage: imgMainSeller,
        currentPrice: "350,000₫",
        oldPrice: "400,000₫",
        salePercent: 12,
        totalReviews: 90,
        stars: 5,
        totalRemaining: 30,
    },
    {
        id: 9,
        productName: "Son môi LUX",
        productDescription: "Son môi cao cấp với màu sắc thời thượng.",
        productImage: imgMainSeller,
        currentPrice: "250,000₫",
        oldPrice: "300,000₫",
        salePercent: 17,
        totalReviews: 120,
        stars: 4,
        totalRemaining: 50,
        addSaleImage: imgAddProduct,
        bonusImage: imgOnline,
        subImage: imgSubSeller,
    },
    {
        id: 10,
        productName: "Kem nền SkinFit",
        productDescription: "Kem nền mịn màng, giữ lâu trên da.",
        productImage: imgMainSeller,
        currentPrice: "350,000₫",
        oldPrice: "400,000₫",
        salePercent: 12,
        totalReviews: 90,
        stars: 5,
        totalRemaining: 30,
    },
];

const listProductsTrend2 = [
    {
        id: 3,
        productName: "Sữa rửa mặt sạch sâu",
        productDescription: "Làm sạch da mặt, loại bỏ dầu thừa.",
        productImage: imgMainSeller,
        currentPrice: "150,000₫",
        oldPrice: "180,000₫",
        salePercent: 17,
        totalReviews: 50,
        stars: 4,
        totalRemaining: 60,
    },
    {
        id: 4,
        productName: "Kem dưỡng trắng da",
        productDescription: "Dưỡng trắng da, cấp ẩm lâu dài.",
        productImage: imgMainSeller,
        currentPrice: "450,000₫",
        oldPrice: "500,000₫",
        salePercent: 10,
        totalReviews: 110,
        stars: 5,
        totalRemaining: 25,
    },
];

// Xử lý thay đổi tab
const handleTabChange = (tabIndex) => {
    activeTab.value = tabIndex;
};
</script>

<template>
    <div class="product-trend-container w-100">
        <h1 class="heading-trend text-uppercase">Sản phẩm nổi bật</h1>
        <div class="prd-trend-list">
            <div class="mb-3 d-flex align-items-center justify-content-center gap-5">
        <span
            class="tab-trend-1"
            :class="{ active: activeTab === 1 }"
            @click="handleTabChange(1)"
        >
          Chăm Sóc Cơ Thể
        </span>
        <span
            class="tab-trend-2"
            :class="{ active: activeTab === 2 }"
            @click="handleTabChange(2)"
        >
          Dưỡng Da
        </span>
            </div>
            <div v-if="activeTab === 1" class="trend-1-total d-flex row">
                <div
                    class="product"
                    v-for="(item) in listProductsTrend1"
                    :key="item.id"
                    style="flex: 0 0 calc(20% - 8px);"
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
            <div v-if="activeTab === 2" class="trend-2-total d-flex row">
                <div
                    class="product"
                    v-for="(item) in listProductsTrend2"
                    :key="item.id"
                    style="flex: 0 0 calc(20% - 8px);"
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
        </div>
        <button-main />
    </div>
</template>

<style lang="scss" scoped>
.product-trend-container {
    .heading-trend {
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        text-align: center;
        margin-bottom: 0.5em;
        color: #000;
    }
    .prd-trend-list {
        .tab-trend-1,
        .tab-trend-2 {
            font-size: 16px;
            color: #ccc;
            cursor: pointer;
            &:not(.active) {
                &:hover {
                    color: #94c83d;
                    text-decoration: underline;
                }
            }
        }
        .active {
            color: #94c83d;
        }
    }
}
</style>