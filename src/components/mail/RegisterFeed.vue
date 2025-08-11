<script setup>

</script>

<template>
    <div class="py-4 bg-light rounded-3">
        <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
                <!-- Tiêu đề -->
                <h2 class="card-title text-uppercase fw-bold">
                    Đăng ký nhận bản tin
                </h2>
                <!-- Mô tả -->
                <p class="mb-5 text-more text-black">
                    Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn
                </p>
                <!-- Form đăng ký -->
                <div class="bottom-right position-relative d-flex align-items-center">
                    <input class="border-0 w-100" type="text" placeholder="Điền email của bạn" />
                    <div class="register-email position-absolute">ĐĂNG KÝ</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-title {
    font-size: 25px;
    color: #94c83d;
    line-height: 40px;
}
.text-more {
    font-size: 16px;
    line-height: 22px;
}
.bottom-right {
    input {
        font-size: 14px;
        color: #000;
        padding: 16px 90px 16px 12px;
        border-radius: 30px;
        background-color: #fff;
        &::placeholder {
            font-size: 14px;
            color: orangered;
        }
    }
    .register-email {
        right: 18px;
        font-size: 16px;
        font-weight: 600;
        color: orangered;
        cursor: pointer;
    }
}
</style>