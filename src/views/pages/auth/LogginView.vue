<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

// Router để điều hướng
import { useRouter } from 'vue-router';
const router = useRouter();

// Hàm validate form
const validateForm = () => {
    if (!email.value || !password.value) {
        errorMessage.value = 'Vui lòng điền đầy đủ thông tin.';
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email.value)) {
        errorMessage.value = 'Email không hợp lệ.';
        return false;
    }
    return true;
}

const submitLogin = () => {

}


</script>
<template>
    <div style="padding-top: 116px;">
        <div class="d-flex justify-content-center pt-4 pb-5">
            <div class="container d-flex flex-column align-items-center">
                <h2 class="text-center">Xin chào, người đẹp</h2>
                <p class="mt-2 mb-4 text-muted font-weight-medium text-center">Đăng nhập vào tài khoản Birchbox của bạn.</p>
                <form class="d-flex flex-column align-items-center" method="post">
                    <div class="rounded bg-danger-subtle p-4 w-100 mb-4" style="max-width: 800px;">
                        <i class="fa-solid fa-bell text-warning pr-4 pt-1" aria-hidden="true"></i>
                        <p class="text-muted"><strong class="font-weight-medium">Lưu ý quan trọng</strong><br>
                            <span>Nếu bạn gặp sự cố khi đăng nhập, vui lòng nhấn vào liên kết "Quên mật khẩu" bên dưới nút đăng nhập. Sau khi đặt lại mật khẩu, bạn sẽ có thể đăng nhập vào trang tài khoản Birchbox của mình. Gửi email đến <a class="font-weight-medium text-primary" href="mailto:info@birchbox.com">info@birchbox.com</a> nếu bạn vẫn gặp sự cố!</span>
                        </p>
                    </div>
                    <div class="w-100 d-flex flex-column align-items-center" style="max-width: 400px;">
                        <input name="csrfToken" type="hidden" value="9e40bf8724d80c56905c9c2ebf15e667b344c5b2883ea6ff3bf20d410813e4a6">
                        <div class="mb-3 w-100">
                            <label for="email" class="form-label">Email</label>
                            <input class="form-control" type="email" autocomplete="username" id="email" required v-model="email">
                        </div>
                        <div class="mb-3 w-100">
                            <label for="password" class="form-label">Mật khẩu</label>
                            <input class="form-control" type="password" autocomplete="new-password" id="password" required v-model="password">
                        </div>
                        <button type="submit" class="btn btn-primary w-100" onclick="submitLogin()">Đăng nhập</button>
                    </div>
                </form>
                <a class="text-decoration-underline text-muted mt-3" href="/reset-password">Quên mật khẩu?</a>
                <div class="d-flex align-items-center my-4">
                    <div aria-hidden="true" class="w-100 border-bottom border-gray"></div>
                    <p class="mx-3 text-muted font-weight-medium">Hoặc</p>
                    <div aria-hidden="true" class="w-100 border-bottom border-gray"></div>
                </div>
                <button class="btn btn-light">Đăng ký</button>
                <div class="text-center mt-5" style="max-width: 200px;">
                    <p class="small text-muted">Khi đăng ký, bạn đồng ý với <a class="text-decoration-underline" href="/terms-conditions">Điều khoản dịch vụ</a> và <a class="text-decoration-underline" href="/privacy-policy">Chính sách bảo mật</a> của Birchbox</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>
