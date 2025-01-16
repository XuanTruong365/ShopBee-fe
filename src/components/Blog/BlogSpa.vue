<script setup>
import {ref} from "vue";
import ButtonMain from "@/components/buttonMain.vue";
import ArticleItem from "@/components/Blog/ArticleItem.vue";
import imgBlog from "@/assets/images/img-blog.webp";

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
</script>

<template>
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
                        <ArticleItem :image="article.image" :type-blog="article.typeBlog" :title="article.title" :content="article.content" />
                    </div>
                </div>
            </div>
            <div v-if="activeTab === 2" class="trend-2-total d-flex row">
                <div class="row">
                    <div class="col-md-3" v-for="(article, index) in articles1" :key="index">
                        <ArticleItem :image="article.image" :type-blog="article.typeBlog" :title="article.title" :content="article.content" />
                    </div>
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
        font-weight: bold;
    }
  }
}
</style>