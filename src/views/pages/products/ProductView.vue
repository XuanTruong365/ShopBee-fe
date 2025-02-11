<script setup>
import {ArrowDown, ArrowUp, Cart, CheckDone, Coin, Heart, Home, Return, Right, Star, TrustPast} from "@/assets/icons.js";
import slideImage1 from "@/assets/images/son1.webp";
import slideImage2 from "@/assets/images/son2.webp";
import slideImage3 from "@/assets/images/son3.webp";
import slideImage4 from "@/assets/images/son4.webp";
import slideImage5 from "@/assets/images/son5.webp";
import slideImage6 from "@/assets/images/son6.webp";
import {computed, onMounted, onUnmounted, ref} from "vue";
import AdsBrandSale from "@/components/sale/AdsBrandSale.vue";
import Promotion from "@/assets/images/promotion-banner.webp";

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

const selectImage = (index) => {
    currentIndex.value = index;
};

const days = ref('1')
const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');
let interval;
const soldOut = ref(false);

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

const banners = [
    {
        image: Promotion,
        link: "",
    },
    {
        image: Promotion,
        link: "",
    },
    {
        image: Promotion,
        link: "",
    },
];

// Trạng thái xem toàn bộ nội dung hay nội dung ngắn
const isExpanded = ref(false);

// Nội dung từ API
const shortDescription = ref({});
const fullDescription = ref({});

const fetchProductDescription = async () => {
    try {
        // Giả lập API trả về dữ liệu
        const response = await Promise.resolve({
            short: {
                use: "Dưỡng mềm mượt, phục hồi tóc hư tổn...",
                ingredients: [
                    { name: "Chiết xuất cỏ xạ hương", description: "Ngăn ngừa viêm nhiễm." },
                    { name: "Cỏ roi ngựa", description: "Ngăn ngừa rụng tóc, giúp bóng mượt." },
                ],
            },
            full: {
                use: "Dưỡng mềm mượt, phục hồi tóc hư tổn, mang lại mái tóc óng ả...",
                ingredients: [
                    { name: "Chiết xuất cỏ xạ hương", description: "Chống oxy hóa, ngăn ngừa viêm nhiễm, nấm da đầu." },
                    { name: "Cỏ roi ngựa", description: "Ngăn ngừa rụng tóc, giúp bóng mượt từ chân đến ngọn." },
                    { name: "Nấm bùn", description: "Kích thích tóc mọc dài, dày." },
                ],
                advantages: [
                    "Cải thiện mái tóc hư tổn do tác động của nhiệt, hóa chất.",
                    "Bảo vệ tóc khỏi các tác nhân gây hại từ môi trường.",
                    "Phục hồi tóc khô xơ, bổ sung dưỡng chất giúp da đầu khỏe mạnh.",
                ],
                usage: "Sau khi gội đầu, thoa đều kem xả lên tóc để tóc bóng mượt.",
            },
        });

        // Gán dữ liệu vào state
        shortDescription.value = response.short;
        fullDescription.value = response.full;
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
    }
};

// Hàm xử lý thay đổi trạng thái xem nội dung
const toggleContent = () => {
    isExpanded.value = !isExpanded.value;
};

onMounted(() => {
    fetchProductDescription()
    calculateTimeLeft();
    interval = setInterval(calculateTimeLeft, 1000);
});

onUnmounted(() => {
    clearInterval(interval);
});

</script>

<template>
    <div class="view-product-container container">
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
                            <img :src="item.img" alt="Slide" class="w-100 h-100"/>
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
                    <img class="w-100 h-100" :src="currentImage" alt="Active Image"/>
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
                                    Kem Chống Nắng Lâu Trôi THE FACE SHOP Natural Sun Eco Power Long-Lasting Sun Cream
                                    SPF50+ PA+++ 50ml
                                </h1>
                            </div>
                        </div>
                        <div class="align-center mb-10">
                            <div class="product-rating__space d-flex align-items-center flex-nowrap">
                                <div class="d-flex rate-section align-items-start gap-3">
                                    <ul class="text-primary d-flex align-items-center gap-2 size-14 mr-10 p-0"
                                        tabindex="-1" role="radiogroup">
                                        <li class="list-unstyled">
                                            <span class="start-count d-block" v-html="Star"></span>
                                        </li>
                                        <li class="list-unstyled">
                                            <span class="start-count d-block" v-html="Star"></span>
                                        </li>
                                        <li class="list-unstyled">
                                            <span class="start-count d-block" v-html="Star"></span>
                                        </li>
                                        <li class="list-unstyled">
                                            <span class="start-count d-block" v-html="Star"></span>
                                        </li>
                                        <li class="list-unstyled">
                                            <span class="start-count d-block" v-html="Star"></span>
                                        </li>
                                    </ul>
                                    <span class="text-underline total-review text-decoration-underline">134 Đánh giá</span>
                                </div>
                                <div class="space-item">
                                    <span class="icon-heart"></span>
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
                                <div><span class="fw-400 text-decoration-line-through product-price">1.310.000đ</span>
                                </div>
                                <div>
                                    <div class="discount-label position-relative"><span>-50%</span></div>
                                </div>
                            </div>
                            <div class="payment-method mt-3 d-flex flex-column gap-3">
                                <div class="payment-detail d-flex align-items-center justify-content-between p-3 border">
                                    <div class="payment-method-1"><b class="m-lg-1">Từ</b> <span
                                            class="size-16 fw-700 price">62.225đ</span></div>
                                    <div class="price-description mt-8 d-flex align-center gap-3 space-between flex-wrap">
                                        <div class="d-flex align-items-center" style="gap: 6px;">
                                            <div><span class="description">với</span></div>
                                            <div><img
                                                    src="https://image.hsv-tech.io/400x0/tfs/common/e2f1077c-5250-4fce-8f4b-cf3de24f8443.webp"
                                                    alt="logo" height="14px"></div>
                                        </div>
                                        <div><img
                                                src="https://image.hsv-tech.io/400x0/tfs/common/4e3b4568-b8c7-4d23-b910-f6f17ab08b3b.webp"
                                                alt="logo" height="20px"></div>
                                    </div>
                                </div>
                                <div class="payment-detail d-flex align-items-center justify-content-between p-3 border">
                                    <div class="payment-method-2"><b class="m-lg-1">Từ</b> <span
                                            class="size-16 fw-700 price">218.333đ</span></div>
                                    <div class="price-description-2 mt-8 d-flex align-center gap-3 space-between flex-wrap">
                                        <div class="d-flex align-items-center" style="gap: 6px;">
                                            <div class="ant-space-item"><span class="description">với</span></div>
                                            <div class="ant-space-item"><img
                                                    src="https://image.hsv-tech.io/400x0/tfs/common/071db641-ed06-4af0-9f3d-37a8d39cb917.webp"
                                                    alt="logo" height="11px"></div>
                                        </div>
                                        <div class="price-off">Giảm 70k (*)</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flash-sale-block__vertical mt-3 mb-3">
                                <div class="flash-sale-block__header text-center">
                                    <span></span><span>DEAL HOT - ĐỪNG BỎ LỠ</span>
                                </div>
                                <div class="flash-sale-block__time-wrapper">
                                    <div class="countdown d-flex align-items-center gap-2 justify-content-center text-uppercase fw-bold">
                                        <div><span class="countdown-number m-lg-1" style="color: #94c83d;">{{days }}</span>ngày</div>
                                        <div><span class="countdown-number m-lg-1" style="color: #94c83d;">{{hours }}</span>giờ</div>
                                        <div><span class="countdown-number m-lg-1" style="color: #94c83d;">{{minutes }}</span>phút</div>
                                        <div><span class="countdown-number m-lg-1" style="color: #94c83d;">{{seconds }}</span>giây</div>
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
                                            <div class="variant-item-color"
                                                 :style="{ backgroundColor: item.color }"></div>
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
                            <div class="clause-buy d-flex align-items-center justify-content-between mt-3 mb-2">
                                <div class="clause-buy-left">
                                    <div class="d-flex align-items-center gap-2 mb-2">
                                        <span class="item-icon" v-html="Coin"></span>
                                        Nhận <b class="fw-bold">HSV Point</b> cho mỗi lần mua
                                    </div>
                                    <div class="d-flex align-items-center gap-2">
                                        <span class="item-icon" v-html="TrustPast"></span>
                                        <b class="fw-bold">Miễn phí giao hàng</b> 24h
                                    </div>
                                </div>
                                <div class="clause-buy-right">
                                    <div class="d-flex align-items-center gap-2 mb-2">
                                        <span class="item-icon" v-html="CheckDone"></span>
                                        Cam kết <b class="fw-bold">hàng chính hãng</b>
                                    </div>
                                    <div class="d-flex align-items-center gap-2">
                                        <span class="item-icon" v-html="Return"></span>
                                        Đổi/trả hàng trong <b class="fw-bold">7 ngày</b>
                                    </div>
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
        <AdsBrandSale :banners="banners" height="120px" width="30%"/>
        <div class="see-info-product">
            <div class="info-left">
                <h2 class="fw-bold">Giới thiệu</h2>
            </div>
            <div class="info-right">
                <div class="product-content">
                    <div class="position-relative">
                        <h3>Công dụng chính</h3>
                        <p>
                            {{ isExpanded ? fullDescription.use : shortDescription.use }}
                        </p>

                        <h3>Thành phần chính</h3>
                        <ul>
                            <li
                                v-for="(ingredient, index) in (isExpanded ? fullDescription.ingredients : shortDescription.ingredients)"
                                :key="index"
                                class="list-unstyled"
                            >
                                <b>{{ ingredient.name }}:</b> {{ ingredient.description }}
                            </li>
                        </ul>

                        <h3 v-if="isExpanded">Ưu điểm nổi bật</h3>
                        <ul v-if="isExpanded">
                            <li v-for="(advantage, index) in fullDescription.advantages" :key="index" class="list-unstyled">
                                {{ advantage }}
                            </li>
                        </ul>

                        <h3 v-if="isExpanded">Hướng dẫn sử dụng</h3>
                        <p v-if="isExpanded">{{ fullDescription.usage }}</p>

                        <div v-if="!isExpanded" class="bg-cover position-absolute"></div>
                    </div>

                    <div class="d-flex align-items-center justify-content-center">
                        <button
                            type="button"
                            class="fw-bold btn btn-see-all"
                            @click="toggleContent"
                        >
                            <span v-if="!isExpanded">Xem thêm nội dung</span>
                            <span v-else>Ẩn bớt nội dung</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.view-product-container {
  .info-section {
    margin-left: -8px;
    margin-right: -8px;

    .slide-left-container {
      .slide-group {
        height: 60%;
        overflow: hidden;

        .slide-image {
          overflow: hidden;

          .image-item {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
          }
        }

        .control-prev {
          top: 6px;
          left: 8px;
        }

        .control-next {
          bottom: 6px;
          left: 4px;
        }
      }

      .container-slide {
        width: 80%;
        height: 60%;
      }
    }

    .product-info {
      .left-product-info {
        .product-info-heading {
          .product-header-wrapper {
            .product-header {
              .brand-name {
                font-size: 14px;
                line-height: 20px;
                color: #94c83d;

                &:hover {
                  text-decoration: underline;
                  cursor: pointer;
                }
              }

              .info-title {
                font-size: 18px;
              }
            }
          }

          .product-rating__space {
            gap: 20px;

            .rate-section {
              ul {
                li {
                  .start-count {
                    width: 16px;
                    height: 16px;
                  }
                }
              }

              .total-review {
                font-size: 12px;
              }
            }

            .space-item {
              .icon-heart {
                width: 10px;
                height: 10px;
              }

              .total-like {
                //color: rgb(199, 49, 48);
                margin: 0;
              }
            }
          }

          .product-price-large {
            .product-price-main {
              font-size: 22px;
              font-weight: 700;
            }

            .product-price {
              font-size: 16px;
              color: #d3d7d3;
            }

            .discount-label {
              font-size: 11px;
              text-align: center;
              color: #fff;
              height: 20px;
              width: 30px;
              margin-left: 16px;
              border-top-right-radius: 4px;
              border-bottom-right-radius: 4px;
              display: flex;
              -webkit-box-align: center;
              align-items: center;
              font-weight: bold;
              background-color: #94c83d;

              &::before {
                left: -20px;
                border-style: solid;
                border-top-color: transparent;
                border-bottom-color: transparent;
                border-left-color: transparent;
                border-image: initial;
                content: "";
                height: 0px;
                width: 0px;
                position: absolute;
                border-width: 10px;
                border-right-color: #94c83d;
              }
            }
          }

          .payment-method {
            .payment-detail {
              border-radius: 10px;

              .payment-method-1 {
                p {
                  font-size: 16px;
                  font-weight: 600;
                }

                span {
                  font-size: 20px;
                  font-weight: bold;
                  color: rgb(82, 182, 168);
                }
              }

              .payment-method-2 {
                p {
                  font-size: 16px;
                  font-weight: 600;
                }

                span {
                  font-size: 20px;
                  font-weight: bold;
                  color: rgb(0, 69, 202);
                }
              }

              .price-description-2 {
                .price-off {
                  background-color: rgb(0, 69, 202);
                  color: rgb(255, 255, 255);
                  border-radius: 6px;
                  padding: 5px 10px;
                  font-size: 10px;
                }
              }
            }
          }

          .flash-sale-block__vertical {
            padding: 5px;
            border-radius: 10px;
            background-color: #94c83d;

            .flash-sale-block__header {
              font-weight: 700;
              font-size: 15px;
              line-height: 22px;
              text-transform: uppercase;
              color: rgb(250, 250, 250);
            }

            .flash-sale-block__time-wrapper {
              padding: 5px;
              background: rgb(250, 250, 250);
              border-radius: 37px;

              .count-down {
                padding: 0px 5px;
              }
            }
          }

          .promotion-container {
            border: 1px dashed #94c83d;
            border-radius: 10px;
            padding: 20px;
            margin-top: 20px;
            margin-bottom: 20px;
            max-height: 30vh;
            overflow: auto;
            scrollbar-width: none;

            .promotion-title-main {
              font-size: 16px;
              font-weight: 600;
              color: #000;

              .promotion-title-sub {
                font-size: 14px;
              }
            }

            .promotion-list {
              .promotion-item {
                &:hover {
                  cursor: pointer;
                }
              }
            }
          }

          .color-container {
            .color-heading {
              font-size: 14px;
            }

            .color-name {
              font-size: 14px;
            }

            .variants-section {
              .variant-list {
                .variant-item {
                  width: 26px;
                  height: 26px;
                  border-radius: 50%;

                  .variant-item-color {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                  }
                }

                .active {
                  background-color: #fff;
                  border: 1px solid #000;
                }
              }
            }
          }

          .delivery-wrapper {
            padding: 15px 18px;
            border-radius: 10px;
            border: 2px solid #94c83d;

            .delivery-heading {
              font-size: 18px;
              line-height: 26px;
              font-weight: 700;
              margin-bottom: 10px;
            }

            .delivery-container {
              .delivery-item {
                span {
                  font-size: 14px;
                  color: #000;
                  font-weight: 700;
                }
              }
            }

            .delivery-bottom {
              padding: 10px 0 10px 0;
              border-top: 1px solid #ccc;

              .home-brand {
                .icon-home-brand {
                  width: 20px;
                }

                .brand-desc {
                  font-size: 12px;
                }

                &:hover {
                  color: #94c83d;
                  cursor: pointer;
                }
              }

              .view-brand {
                cursor: pointer;
                font-size: 12px;

                .icon-view-brand {
                  width: 20px;
                  height: 20px;
                }

                &:hover {
                  color: #94c83d;
                  cursor: pointer;
                }
              }
            }
          }

          .action-product {
            font-size: 14px;

            .count-product {
              border-radius: 38px;
              border: 1px solid #ccc;

              button {
                font-size: 18px;
              }
            }

            .add-cart {
              padding: 9px 23px;
              color: #fff;
              background-color: #162818;
              border-radius: 38px;
              cursor: pointer;

              span {
                width: 16px;
                transform: translateY(-3px);

                svg {
                  path {
                    fill: white;
                  }
                }
              }
            }

            .buy-now {
              padding: 9px 23px;
              border-radius: 38px;
              color: #fff;
              background-color: #94c83d;

              &:hover {
                background-color: #aed56b;
                cursor: pointer;
              }
            }

            .like-product {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background: rgb(246, 246, 246);

              span {
                width: 24px;
                height: 24px;
              }

              &:hover {
                cursor: pointer;

                span {
                  svg {
                    path {
                      stroke: #94c83d;
                    }
                  }
                }
              }
            }
          }

          .clause-buy {
              font-size: 14px;
          }
        }
      }
    }
  }
    .see-info-product {
        display: flex;
        gap: 20px;
        padding: 56px 0;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;

        .info-left {
            flex: 1;
            h2 {
                font-size: 24px;
                font-weight: bold;
                color: #333;
                margin: 0;
            }
        }

        .info-right {
            flex: 2;

            .product-content {
                .bg-cover {
                    background-image: linear-gradient(transparent, rgb(255, 255, 255));
                    width: 100%;
                    height: 100%;
                    top: 0px;
                }
                h3 {
                    font-size: 18px;
                    font-weight: bold;
                    color: #555;
                    margin-bottom: 10px;
                }

                p {
                    font-size: 16px;
                    line-height: 1.6;
                    color: #444;
                    margin-bottom: 20px;
                }

                ul {
                    list-style: disc;
                    margin-left: 20px;
                    margin-bottom: 20px;

                    li {
                        font-size: 16px;
                        line-height: 1.6;
                        color: #444;

                        b {
                            color: #333;
                        }
                    }
                }
                .btn-see-all {
                    border-radius: 20px;
                    background-color: #fff;
                    border: 1px solid #94c83d;
                    color: #94c83d;
                }
            }
        }
    }
}
</style>