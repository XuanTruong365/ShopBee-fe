<script setup>
import HeaderTop from "@/views/layouts/HeaderTop.vue";
import Footer from "@/views/layouts/Footer.vue";
</script>

<template>
    <div class="container-fluid layout-container-main p-0 w-100">
        <div class="header-container">
            <HeaderTop></HeaderTop>
        </div>
        <div class="content-main">
            <RouterView />
        </div>
        <div class="footer-container">
            <Footer />
        </div>
    </div>
</template>

<style scoped>

</style>