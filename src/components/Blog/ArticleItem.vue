<script setup>
defineProps({
    image: {
        type: String,
        required: true,
    },
    typeBlog: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="article-container d-flex align-items-center flex-column">
        <div class="article-image position-relative">
            <img class="w-100 h-100" :src="image" alt="article image" />
            <div class="article-mark position-absolute">{{ typeBlog }}</div>
        </div>
        <div class="d-flex align-items-center flex-column p-2">
            <div class="article-title mb-3">
                {{ title }}
            </div>
            <div class="article-content mb-2">
                {{ content }}
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.article-container {
  border-radius: 10px;
  &:hover {
      transform: translateY(-5px);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      cursor: pointer;
  }
  .article-image {
    width: 100%;
    height: auto;
      img {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
      }
      .article-mark {
          font-size: 14px;
          border-radius: 0px 30px 0px 0px;
          padding: 5px 30px 5px 20px;
          color: #fff;
          background-color: #94c83d;
          position: absolute;
          bottom: 0px;
          left: 0px;
      }
  }
  .article-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 5px;
    text-align: center;
    &:hover {
      text-decoration: underline;
      color: #94c83d;
    }
  }
  .article-content {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-word;
    text-align: center;
  }
}
</style>
