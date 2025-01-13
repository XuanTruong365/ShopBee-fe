<script setup>
import { defineProps } from 'vue';
import { Heart, Star } from "@/assets/icons.js";

const props = defineProps({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    productImageSub: {
        type: String,
        required: true
    },
    currentPrice: {
        type: String,
        required: true
    },
    oldPrice: {
        type: String,
        required: true
    },
    salePercent: {
        type: Number,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    totalReviews: {
        type: Number,
        required: true
    },
    totalRemaining: {
        type: Number,
        required: true
    },
    bonusImage: {
        type: String,
        default: ""
    },
    addSaleImage: {
        type: String,
        default: ""
    }
});
</script>

<template>
    <div class="product-list bg-white position-relative">
        <div class="position-relative">
            <div class="img-label-sale d-flex flex-column gap-2 position-absolute">
                <div v-if="addSaleImage" class="prd-add-sale">
                    <img class="w-100" :src="addSaleImage" />
                </div>
                <div v-if="bonusImage" class="prd-bonus">
                    <img class="w-100 h-100" :src="bonusImage" />
                </div>
            </div>
            <span class="d-block position-absolute icon-heart" v-html="Heart"></span>
            <div class="d-flex flex-row overflow-hidden">
                <img class="image-main w-100" :src="productImage" alt="Product Image"/>
                <img class="img-sub w-100" :src="productImageSub" alt=""/>
            </div>
        </div>
        <div class="content-main p-2">
            <h2 class="prd-title fw-bold text-center">{{ productName }}</h2>
            <div class="prd-desc text-center mb-2">{{ productDescription }}</div>
            <div class="d-flex align-items-center gap-3 justify-content-center">
                <div class="fw-bold price">{{ currentPrice }}</div>
                <div class="price-sale text-decoration-line-through">{{ oldPrice }}</div>
                <div class="sale-percent position-relative">-{{ salePercent }}%
                    <div class="label-percent position-absolute"></div>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-center gap-2 mt-1 mb-1">
                <div v-for="n in stars" :key="n">
                    <span class="d-block align-items-center star-item ms-2" v-html="Star"></span>
                </div>
                <div class="total-star">({{ totalReviews }})</div>
            </div>
            <div class="position-relative total-remaining text-center mt-2 mb-1">
                Còn {{ totalRemaining }} sản phẩm
                <div class="position-absolute percent-total-width"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product-list {
    border-radius: 5px;
    transition: transform 0.2s ease, box-shadow 0.3s ease;

    &:hover {
        .image-main {
            transform: translateX(-100%);
            opacity: 0;
        }
        .img-sub {
            transform: translateX(-100%);
            opacity: 1;
        }
        transform: translateY(-5px);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .image-main {
        transition: transform 0.5s ease, opacity 0.5s ease;
    }
    .img-sub {
        transition: transform 0.5s ease, opacity 0.5s ease;
        transform: translateX(100%);
    }
    .img-label-sale {
        top: 5px;
        left: 5px;
        z-index: 99;
    }
    .prd-add-sale {
        width: 40px;
        height: 40px;
    }
    .icon-heart {
        top: 5px;
        right: 5px;
        width: 30px;
        z-index: 99;
    }
    .prd-bonus {
        width: 40px;
        height: 40px;
    }
    .sale-percent {
        width: max-content;
        background-color: #94c83d;
        color: #fff;
        font-size: 10px;
        font-weight: 600;
        padding: 0 2px;
        .label-percent {
            top: 0;
            left: -5px;
            width: 0;
            height: 0;
            border-top: 8px solid transparent;
            border-right: 5px solid #94c83d;
            border-bottom: 7px solid transparent;
        }
    }
    .image-main {
        border-radius: 5px;
    }
    .content-main {
        .prd-title {
            font-size: 14px;
            font-weight: 600;
            line-height: 24px;
        }
        .prd-desc {
            font-size: 12px;
            font-weight: 400;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .price {
            font-size: 14px;
        }
        .price-sale {
            font-size: 12px;
            color: #7f7f7f;
        }
        .star-item {
            width: 12px;
        }
        .total-star {
            color: #000;
        }
        .total-remaining {
            font-size: 12px;
            color: #fff;
            line-height: calc(20 / 12);
            border-radius: 20px;
            background-color: #b3d181;
            z-index: 1;
            .percent-total-width {
                top: 0;
                left: 0;
                width: 50%;
                height: 100%;
                border-radius: 20px;
                background-color: rgba(103, 164, 2, 1);
                z-index: -99;
            }
        }
    }
}
</style>