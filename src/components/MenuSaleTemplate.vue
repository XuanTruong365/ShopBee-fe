<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    saleItems: {
        type: Array,
        required: true
    },
    images: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <div class="sale-container bg-white p-3">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
                <ul class="d-flex flex-column gap-4">
                    <li v-for="(item, index) in saleItems" :key="index" class="list-unstyled content-item">
                        {{ item }}
                    </li>
                </ul>
            </div>

            <div class="col-12 col-md-6 col-lg-8 d-flex align-items-center">
                <div v-for="(image, index) in images" :key="index" class="block-image">
                    <img class="w-100 h-100" :src="image" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sale-container {
    .content-item {
        &:hover {
            font-weight: 600;
            color: #000;
        }
    }
    .block-image {
        height: auto;
        margin-right: 15px;
        img {
            border-radius: 10px;
        }
    }
}
</style>
