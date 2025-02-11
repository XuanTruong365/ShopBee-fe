<script setup>
import {ref} from "vue";
import ButtonMain from "@/components/ButtonMain.vue";
import ArticleItem from "@/components/blog/ArticleItem.vue";
import imgBlog from "@/assets/images/img-blog.webp";
import BreadCrumb from "@/components/BreadCrumb.vue";

const articles1 = [
    {
        image: imgBlog,
        typeBlog: "Tin Tức",
        title: '"Say Hi! Bạn Mới" - THE FACE SHOP Tặng Quà Trị Giá Đến 966K',
        content:
            'THE FACE SHOP - "Say hi! Những người bạn mới với nhiều quà tặng hấp dẫn, cùng các voucher chưa từng có từ',
    },
    {
        image: imgBlog,
        typeBlog: "Tin Tức",
        title: '"Say Hi! Bạn Mới" - THE FACE SHOP Tặng Quà Trị Giá Đến 966K',
        content:
            'THE FACE SHOP - "Say hi! Những người bạn mới với nhiều quà tặng hấp dẫn, cùng các voucher chưa từng có từ',
    },
    {
        image: imgBlog,
        typeBlog: "Tin Tức",
        title: '"Say Hi! Bạn Mới" - THE FACE SHOP Tặng Quà Trị Giá Đến 966K',
        content:
            'THE FACE SHOP - "Say hi! Những người bạn mới với nhiều quà tặng hấp dẫn, cùng các voucher chưa từng có từ',
    },
    {
        image: imgBlog,
        typeBlog: "Tin Tức",
        title: '"Say Hi! Bạn Mới" - THE FACE SHOP Tặng Quà Trị Giá Đến 966K',
        content:
            'THE FACE SHOP - "Say hi! Những người bạn mới với nhiều quà tặng hấp dẫn, cùng các voucher chưa từng có từ',
    }
];

const activeTab = ref(1);
const handleTabChange = (tabIndex) => {
    activeTab.value = tabIndex;
};

const breadcrumbItems = [
    {name: "Trang chủ", link: "/dashboard"},
    {name: "Chuyên mục làm đẹp", link: '/blogs'},
];
</script>

<template>
    <div class="blog-container">
        <div class="blog-content">
            <div class="d-flex align-items-center justify-content-center gap-3 flex-column mt-2">
                <BreadCrumb :items="breadcrumbItems"/>
                <div class="blog-heading mb-2">Chuyên mục làm đẹp</div>
            </div>
            <div class="blog-news-container">
                <div class="news-left">
                    <div class="news-img">
                        <img src="https://image.hsv-tech.io/1200x0/tfs/common/58753cb9-0b21-4265-88e8-e46901621183.webp"
                             alt=""/>
                    </div>
                    <div class="news-type">Tin Tức</div>
                    <h1 class="news-heading">THE FACE SHOP Thông Báo Lịch Nghỉ và Giao Nhận Hàng Tết Nguyên Đán
                        2025</h1>
                    <div class="news-desc">THE FACE SHOP Thông Báo Lịch Nghỉ và Giao Nhận Hàng Tết Nguyên Đán 2025</div>
                </div>
                <div class="news-right">
                    <div class="blog-item-horizontal">
                        <div class="blog--item-card">
                            <div class="card-body">
                                <div class="blog-item-content d-flex">
                                    <div class="cover-item__default ">
                                        <div class="cover-item__position">
                                            <img alt="TheFaceShop" loading="lazy"
                                                 class="blog-item__image"
                                                 src="https://image.hsv-tech.io/600x0/tfs/common/e8dcd824-588c-4dbd-a789-2f543a3983ed.webp"
                                            >
                                        </div>
                                    </div>
                                    <div class="blog-item__info">
                                        <a>
                                            <div class="blog-item__category text-highlight name-hover">Cách Chăm Sóc
                                                Da
                                            </div>
                                        </a>
                                        <div class="blog-item__title name-hover ellipsis-2-t">12 cách trị khô môi nứt nẻ
                                            tại nhà hiệu quả không thể bỏ qua
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-trend-container w-100 mt-5 mb-5">
            <h1 class="heading-trend text-uppercase">Blog làm đẹp</h1>
            <div class="prd-trend-list">
                <div class="mb-5 mt-3 d-flex align-items-center justify-content-center gap-5">
                <span
                        class="tab-trend-1"
                        :class="{ active: activeTab === 1 }"
                        @click="handleTabChange(1)"
                >
                  Tin Tức
                </span>
                    <span
                            class="tab-trend-2"
                            :class="{ active: activeTab === 2 }"
                            @click="handleTabChange(2)"
                    >
                  Góc Review
                </span>
                    <span
                            class="tab-trend-2"
                            :class="{ active: activeTab === 3 }"
                            @click="handleTabChange(3)"
                    >
                  Cách Chăm Sóc Da
                </span>
                    <span
                            class="tab-trend-2"
                            :class="{ active: activeTab === 4 }"
                            @click="handleTabChange(4)"
                    >
                  Xu Hướng Trang Điểm
                </span>
                </div>
                <div v-if="activeTab === 1" class="trend-1-total d-flex row">
                    <div class="row">
                        <div class="col-md-3" v-for="(article, index) in articles1" :key="index">
                            <ArticleItem :image="article.image" :type-blog="article.typeBlog" :title="article.title"
                                         :content="article.content"/>
                        </div>
                    </div>
                </div>
                <div v-if="activeTab === 2" class="trend-2-total d-flex row">
                    <div class="row">
                        <div class="col-md-3" v-for="(article, index) in articles1" :key="index">
                            <ArticleItem :image="article.image" :type-blog="article.typeBlog" :title="article.title"
                                         :content="article.content"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-center mt-5">
                <div class="btn-see-all text-center">Xem Thêm</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blog-container {
  .blog-content {
    .blog-heading {
      font-size: 30px;
      line-height: 43px;
      font-weight: bold;
    }

    .blog-news-container {
      display: flex;
      gap: 20px;
      padding: 20px;
      background-color: #f9f9f9;

      .news-left {
        flex: 2;
        background: #fff;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

        .news-img {
          img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            object-fit: cover;
            margin-bottom: 10px;
          }
        }

        .news-type {
          font-size: 14px;
          font-weight: bold;
          color: #e74c3c;
          margin-bottom: 10px;
        }

        .news-heading {
          font-size: 20px;
          font-weight: bold;
          line-height: 1.4;
          margin-bottom: 15px;
          color: #333;
        }

        .news-desc {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
        }
      }

      .news-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 15px;

        .blog-item-horizontal {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

          .blog--item-card {
            display: flex;

            .card-body {
              padding: 15px;

              .blog-item-content {
                display: flex;
                gap: 10px;

                .cover-item__default {
                  flex-shrink: 0;

                  .cover-item__position {
                    width: 80px;
                    height: 80px;
                    border-radius: 8px;
                    overflow: hidden;

                    img {
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                    }
                  }
                }

                .blog-item__info {
                  flex: 1;

                  .blog-item__category {
                    font-size: 14px;
                    font-weight: bold;
                    color: #27ae60;
                    margin-bottom: 5px;

                    &:hover {
                      text-decoration: underline;
                    }
                  }

                  .blog-item__title {
                    font-size: 16px;
                    line-height: 1.5;
                    color: #333;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    &:hover {
                      color: #3498db;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

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
        font-weight: bold;
      }
    }

    .btn-see-all {
      width: 166px;
      font-size: 14px;
      font-weight: bold;
      padding: 8px 15px;
      border: 2px solid #94c83d;
      border-radius: 20px;
      color: #000;
      background: linear-gradient(90deg, #94c83d 50%, #fff 50%);
      background-size: 200%;
      background-position: right;
      transition: background-position 0.5s ease-in-out, color 0.3s ease;

      &:hover {
        background-position: left;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>