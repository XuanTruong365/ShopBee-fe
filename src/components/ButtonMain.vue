<template>
    <div class="d-flex align-items-center justify-content-center mt-5">
        <div class="btn-see-all text-center">Xem tất cả</div>
    </div>
</template>

<script setup>

</script>

<style scoped>
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
</style>