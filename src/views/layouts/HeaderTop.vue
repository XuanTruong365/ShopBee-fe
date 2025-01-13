<script setup>
import { ref } from "vue";
import {Blog, Cart, Down, Heart, Home, IconSearch, More, User} from "@/assets/icons.js";
import imageScan from "@/assets/images/scan-image.gif?url"
import MenuSaleTemplate from "@/components/MenuSaleTemplate.vue";
import imageSale1 from "@/assets/images/sale-image-1.webp"
import imageSale2 from "@/assets/images/sale-image-2.webp"
import imageSale3 from "@/assets/images/sale-image-3.webp"
import SubListMenu from "@/components/SubListMenu.vue"
import imageSub1 from "@/assets/images/image-item-1.webp"
import imageSub2 from "@/assets/images/image-item-2.webp"
import imageSub3 from "@/assets/images/image-item-3.webp"


const menuList = ref([
    "FRESHIAN TRANG ĐIỂM THUẦN CHAY CAO CẤP",
    "FREESHIP 15K MỌI ĐƠN HÀNG",
    "Mua online nhận nhanh tại cửa hàng",
    "Giao nhanh 24H tại Tp. Hồ Chí Minh",
]);

const searchSuggestions = ref([
    "Sản phẩm A",
    "Sản phẩm B",
    "Sản phẩm C",
    "Sản phẩm D"
]);

const showSuggestions = ref(false);
const handleHover = (state) => {
    showSuggestions.value = state;
};

//handle menu banner
const saleItems = [
    '🎁100% CÓ QUÀ - SKINCARE DAY',
    '🔥24-25.8 SALE CUỐI THÁNG (Online và Click&Collect)',
    '🔥Ưu Đãi 50% Back To School (Online & HTCH)',
    'Giảm 50%++ Mặt Nạ (Online và Click&Collect)',
    'Mua 1 Tặng 2 Làm Sạch (Online và Click&Collect)',
    'Mua 1 Tặng 2 Kem Chống Nắng (Online và Click&Collect)',
    'Mua 1 Tặng 1 Make Up (Online & Click&Collect)',
    '[MỚI] Freshian - Make up thuần chay cao cấp'
];

const imageSales = [imageSale1, imageSale2, imageSale3];

const tradeMarkItems = [
    'TẤT CẢ THƯƠNG HIỆU',
    'THE FACE SHOP',
    'Preshian',
    'Dr. Belmeur',
    'FMGT',
    'Belif',
    'CNB',
    'Beyond'
]

import imageBottom from '@/assets/images/image-sub-bottom.webp'

const listImages = [
    imageSale1, imageSale2, imageSale3, imageSub1, imageSub2, imageSub3, imageSub1, imageSub2, imageSub3
]

const menuItems = [
    ['Trang điểm mặt', 'Kem nền', 'Kem lót', 'Che khuyết điểm', 'Phấn má hồng', 'Phấn nước cushion', 'Phấn phủ', 'Tạo khối - highlight', 'Kem nền bb / cream'],
    ['Trang điểm môi', 'Son kem', 'Son bóng', 'Son dưỡng môi'],
    ['Trang điểm mắt', 'Mascara', 'Kẻ chân mày', 'Phấn mắt', 'Kẻ viền mắt'],
]

</script>

<template>
    <div class="header-container position-relative w-100 bg-white">
        <div>
            <div class="header-top d-flex align-items-center justify-content-evenly w-100">
                <div v-for="(menu, index) in menuList" :key="index" class="d-flex align-items-center pt-1 pb-1">
                    <div class="menu-item">
                        {{ menu }}
                    </div>
                    <div v-if="index < menuList.length - 1" class="separator"></div>
                </div>
            </div>
<!--            <div class="container">-->
                <div class="header-main-container bg-white d-flex align-items-center w-100">
                    <div class="d-flex align-items-center container justify-content-evenly w-100">
                        <div class="logo-app d-flex justify-content-center align-items-center">
                            <router-link>
                                <div class="image-wrapper pointer">
                                    <img alt="logo" loading="lazy" class="logo-img w-100 h-100 object-fit-contain" src="/src/assets/images/bg-logo.webp" layout="responsive">
                                </div>
                            </router-link>
                        </div>
                        <div class="header-right d-flex align-items-center">
                            <div class="search-container me-4">
                                <div
                                    class="position-relative"
                                    @mouseenter="handleHover(true)"
                                    @mouseleave="handleHover(false)"
                                >
                                    <span v-html="IconSearch" class="position-absolute icon-search"></span>
                                    <input type="text" class="searchInput border-0" placeholder="Tặng quà 799K đơn từ 799K">
                                    <div v-if="showSuggestions" class="resultBox">
                                        <ul>
                                            <li v-for="(suggestion, index) in searchSuggestions" :key="index">
                                                {{ suggestion }}
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="scan-image d-flex align-items-center justify-content-center">
                                        <img class="image-seach-scan" :src="imageScan">
                                    </div>
                                </div>
                            </div>
                            <div class="header-main-item d-flex align-items-center justify-content-center ms-4">
                                <span class="icon-header" v-html="Home"></span>
                                <span class="ms-2 header-text">Hệ thống cửa hàng</span>
                            </div>
                            <div class="header-main-item d-flex align-items-center justify-content-center ms-4">
                                <span class="icon-header" v-html="Blog"></span>
                                <span class="ms-2 header-text">Blog làm đẹp</span>
                            </div>
                            <span class="icon-header ms-4" v-html="More"></span>
                            <div class="block-border ms-4"></div>
                            <div class="header-main-item d-flex align-items-center justify-content-center ms-4">
                                <span class="icon-header" v-html="User"></span>
                                <span class="ms-2 header-text">Đăng nhập</span>
                            </div>
                            <div class="icon-header ms-4" v-html="Heart"></div>
                            <div class="ms-4 position-relative">
                                <span class="icon-header d-block" v-html="Cart"></span>
                                <div class="cart-notify position-absolute d-flex align-items-center justify-content-center">22</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="header-bottom w-100 bg-white">
                    <ul class="list-menu position-relative container w-100 d-flex align-items-center justify-content-evenly">
                        <li class="menu-item menu-item-sale list-unstyled d-flex align-items-center">
                            Khuyến mãi
                            <i v-html="Down"></i>
                            <div class="menu-sub position-absolute">
                                <MenuSaleTemplate :saleItems="saleItems" :images="imageSales" />
                            </div>
                        </li>
                        <li class="menu-item menu-item-mark list-unstyled d-flex align-items-center">
                            Thương hiệu
                            <i v-html="Down"></i>
                            <div class="menu-sub position-absolute">
                                <MenuSaleTemplate :saleItems="tradeMarkItems" :images="imageSales" />
                            </div>
                        </li>
                        <li class="menu-item list-unstyled">Sản phẩm mới</li>
                        <li class="menu-item menu-item-makeup list-unstyled d-flex align-items-center">
                            Trang điểm
                            <i v-html="Down"></i>
                            <div class="menu-sub position-absolute">
                                <SubListMenu
                                    :listImages="listImages"
                                    :imageBottom="imageBottom"
                                    :menuItems="menuItems"
                                />
                            </div>
                        </li>
                        <li class="menu-item list-unstyled d-flex align-items-center">
                            Dưỡng da
                            <i v-html="Down"></i>
                        </li>
                        <li class="menu-item list-unstyled d-flex align-items-center">
                            Chăm sóc cơ thể
                            <i v-html="Down"></i>
                        </li>
                        <li class="menu-item list-unstyled">Mua online & Nhận tại cửa hàng </li>
                        <li class="menu-item list-unstyled">Nhận ưu đãi</li>
                    </ul>
                </div>
                <!--        khoi list data  khi click menu-item-sale-->
<!--            </div>-->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-container {
    border-bottom: 1px solid #e5e5e5;

    .header-top {
        height: 22px;
        background-color: #152818;
        font-size: 12px;
        color: #fff;

        .separator {
            transform: translateX(50px);
            width: 2px;
            height: 2px;
            border-radius: 50%;
            background-color: #fff;
        }
    }

    .header-main-container {
        height: 80px;
        color: #000;

        .logo-app {
            width: 190px;
            height: 39px;
        }

        .header-right {
            .search-container {
                position: relative;

                .searchInput {
                    min-width: 400px;
                    height: 40px;
                    background-color: #f6f6f6;
                    border-radius: 20px;
                    padding-left: 30px;
                    padding-right: 56px;
                    border: 0;
                }

                .icon-search {
                    z-index: 99;
                    top: 25%;
                    left: 10px;
                    position: absolute;
                }

                .scan-image {
                    position: absolute;
                    top: 4px;
                    right: 4px;
                    background-color: #fff;
                    width: 48px;
                    height: 32px;
                    border-radius: 20px;
                }

                .resultBox {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background: white;
                    border: 1px solid #e5e5e5;
                    z-index: 1000;
                }
            }

            .header-main-item {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 1rem;

                &:hover {
                    .icon-header {
                        fill: #aed56b;
                        cursor: pointer;
                    }

                    .header-text {
                        color: #aed56b;
                        cursor: pointer;
                        text-decoration: underline;
                    }
                }
            }

            .header-text {
                font-size: 12px;
                font-weight: 700;
                line-height: calc(17 / 12);
                color: #000;
            }

            .icon-header {
                width: 20px;
            }

            .block-border {
                width: 1px;
                height: 20px;
                border-right: 1px solid #ccc;
            }

            .cart-notify {
                position: absolute;
                top: -6px;
                right: -10px;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: red;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

    .header-bottom {
        position: relative;
        height: 48px;
        line-height: 48px;
        border-top: 1px solid #ECECEC;
        border-bottom: 1px solid #ECECEC;
        .list-menu {
            .menu-item {
                cursor: pointer;
            }
            .menu-sub {
                display: none;
                height: 20px;
                width: 100vw;
                left: 0;
                bottom: -20px;
                z-index: 99;
            }
            .menu-item-sale {
                &:hover {
                    .menu-sub {
                        display: block;
                    }
                }
            }
            .menu-item-mark {
                &:hover {
                    .menu-sub {
                        display: block;
                    }
                }
            }
            .menu-item-makeup {
                &:hover {
                    .menu-sub {
                        display: block;
                    }
                }
            }
        }
        .menu-item-mark {
            &:hover {
                .submenu-template {
                    background-color: green !important;
                }
            }
        }
    }
}
</style>
