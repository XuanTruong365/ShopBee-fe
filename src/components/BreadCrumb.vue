<template>
    <ul class="breadcrumb list-unstyled d-flex align-items-center p-0 m-0">
        <li v-for="(item, index) in items" :key="index">
            <a
                :href="item.link || '#'"
                :class="{ 'active': index === items.length - 1 }"
            >
                {{ item.name }}
            </a>
            <span v-if="index !== items.length - 1" v-html="Right" class="m-lg-2"></span>
        </li>
    </ul>
</template>

<script setup>
import { defineProps } from 'vue';
import {Right} from "@/assets/icons.js";

defineProps({
    items: {
        type: Array,
        required: true,
        default: () => [],
    },
});
</script>

<style scoped>
.breadcrumb {
    font-size: 14px;
    a {
        color: #797979;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
}

.breadcrumb li a.active {
    font-weight: bold;
    pointer-events: none;
    color: #000;
}
</style>
