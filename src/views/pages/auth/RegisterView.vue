<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import $http from '@/services/index.js';
import {register} from "@/services/auth.js";

// Dữ liệu form
const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    acceptsMarketing: false,
});

// Dữ liệu lỗi
const errors = ref({});
const successMessage = ref('');

// Router để điều hướng sau khi đăng ký thành công
const router = useRouter();

// Trạng thái hiển thị/ẩn mật khẩu
const showPassword = ref(false);

// Hàm validate form
const validateForm = () => {
    errors.value = {};

    if (!formData.value.firstName) {
        errors.value.firstName = 'Tên là bắt buộc.';
    }
    if (!formData.value.lastName) {
        errors.value.lastName = 'Họ là bắt buộc.';
    }
    if (!formData.value.email) {
        errors.value.email = 'Email là bắt buộc.';
    } else if (!/\S+@\S+\.\S+/.test(formData.value.email)) {
        errors.value.email = 'Email không hợp lệ.';
    }
    if (!formData.value.password) {
        errors.value.password = 'Mật khẩu là bắt buộc.';
    } else if (formData.value.password.length < 6) {
        errors.value.password = 'Mật khẩu phải có ít nhất 6 ký tự.';
    }
    if (formData.value.password !== formData.value.passwordConfirmation) {
        errors.value.passwordConfirmation = 'Xác nhận mật khẩu không khớp.';
    }

    return Object.keys(errors.value).length === 0;
};

// Hàm xử lý đăng ký
const handleRegister = async () => {
    if (!validateForm()) {
        return;
    }

    try {
        const payload = {
            name: `${formData.value.firstName} ${formData.value.lastName}`, // Gộp firstName và lastName
            email: formData.value.email,
            password: formData.value.password,
            password_confirmation: formData.value.passwordConfirmation,
        };

        const response = await register(payload);
        successMessage.value = response.data.message || 'Đăng ký thành công!';
        errors.value = {};

        // Lưu token và điều hướng đến trang đăng nhập hoặc trang chính
        localStorage.setItem('token', response.data.token);
        setTimeout(() => {
            router.push('/profile'); // Điều hướng đến trang đăng nhập hoặc trang chính
        }, 2000);
    } catch (error) {
        if (error.response?.status === 422) {
            // Xử lý lỗi validation từ back-end
            const errorData = error.response.data.errors;
            for (const key in errorData) {
                errors.value[key] = errorData[key][0];
            }
        } else {
            errors.value.general = error.response?.data.message || 'Đã có lỗi xảy ra. Vui lòng thử lại.';
        }
    }
};

// Hàm hiển thị/ẩn mật khẩu
const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};
</script>

<template>
    <div class="register-view-container">
        <section class="section">
            <div class="container d-flex flex-column align-items-center justify-content-center">
                <div class="w-100" style="max-width: 24rem;">
                    <h3 class="text-center">Bắt đầu tạo tài khoản</h3>
                    <p class="text-center text-muted mt-2 mb-4">Tạo tài khoản để chúng tôi có thể ghi nhớ bạn</p>

                    <!-- Hiển thị thông báo thành công -->
                    <div v-if="successMessage" class="alert alert-success" role="alert">
                        {{ successMessage }}
                    </div>

                    <!-- Hiển thị lỗi chung -->
                    <div v-if="errors.general" class="alert alert-danger" role="alert">
                        {{ errors.general }}
                    </div>

                    <div class="d-flex flex-column">
                        <form @submit.prevent="handleRegister">
                            <fieldset class="d-flex flex-column justify-content-center">
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <label for="first-name" class="form-label">Tên</label>
                                            <input
                                                v-model="formData.firstName"
                                                class="form-control"
                                                :class="{ 'is-invalid': errors.firstName }"
                                                type="text"
                                                id="first-name"
                                                autocomplete="given-name"
                                                name="first-name"
                                            />
                                            <div v-if="errors.firstName" class="invalid-feedback">
                                                {{ errors.firstName }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="mb-3">
                                            <label for="last-name" class="form-label">Họ</label>
                                            <input
                                                v-model="formData.lastName"
                                                class="form-control"
                                                :class="{ 'is-invalid': errors.lastName }"
                                                type="text"
                                                id="last-name"
                                                autocomplete="family-name"
                                                name="last-name"
                                            />
                                            <div v-if="errors.lastName" class="invalid-feedback">
                                                {{ errors.lastName }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input
                                        v-model="formData.email"
                                        class="form-control"
                                        :class="{ 'is-invalid': errors.email }"
                                        type="email"
                                        autocomplete="username"
                                        id="email"
                                        name="email"
                                    />
                                    <div v-if="errors.email" class="invalid-feedback">
                                        {{ errors.email }}
                                    </div>
                                </div>
                                <div class="mb-3 form-check">
                                    <input
                                        v-model="formData.acceptsMarketing"
                                        class="form-check-input"
                                        type="checkbox"
                                        id="acceptMarketing"
                                        name="acceptsMarketing"
                                    />
                                    <label for="acceptMarketing" class="form-check-label text-muted">
                                        Tôi muốn nhận thông tin khuyến mãi và ưu đãi dành riêng cho mình.
                                    </label>
                                </div>
                                <div class="mb-3 position-relative">
                                    <label for="password" class="form-label">Mật khẩu</label>
                                    <input
                                        v-model="formData.password"
                                        class="form-control pr-4"
                                        :type="showPassword ? 'text' : 'password'"
                                        autocomplete="new-password"
                                        id="password"
                                        name="password"
                                    />
                                    <button
                                        type="button"
                                        class="btn btn-link position-absolute end-0 text-decoration-none btn-link-view"
                                        @click="togglePasswordVisibility"
                                    >
                                        {{ showPassword ? 'Ẩn' : 'Hiện' }}
                                    </button>
                                    <div v-if="errors.password" class="invalid-feedback d-block">
                                        {{ errors.password }}
                                    </div>
                                </div>
                                <div class="mb-3 position-relative">
                                    <label for="password-confirmation" class="form-label">Xác nhận mật khẩu</label>
                                    <input
                                        v-model="formData.passwordConfirmation"
                                        class="form-control pr-4"
                                        :type="showPassword ? 'text' : 'password'"
                                        autocomplete="new-password"
                                        id="password-confirmation"
                                        name="password_confirmation"
                                    />
                                    <div v-if="errors.passwordConfirmation" class="invalid-feedback d-block">
                                        {{ errors.passwordConfirmation }}
                                    </div>
                                </div>
                                <button
                                    class="btn-submit btn d-flex justify-content-center gap-2"
                                    type="submit"
                                >
                                    <span>Đăng ký</span>
                                </button>
                            </fieldset>
                        </form>
                        <div class="d-flex gap-2 align-items-center my-4">
                            <div aria-hidden="true" class="w-100 border-bottom border-gray"></div>
                            <p class="fw-medium text-muted mb-0">hoặc</p>
                            <div aria-hidden="true" class="w-100 border-bottom border-gray"></div>
                        </div>
                        <a class="btn btn-secondary w-100" href="/profile">Đăng nhập</a>
                        <div class="text-center mt-4">
                            <p class="text-muted small">
                                Bằng việc đăng ký, bạn đồng ý với
                                <a class="text-decoration-underline" href="/terms-conditions">Điều khoản dịch vụ</a>
                                và
                                <a class="text-decoration-underline" href="/privacy-policy">Chính sách bảo mật</a>
                                của Birchbox
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
/* Tùy chỉnh style nếu cần */
.alert {
    margin-bottom: 1rem;
}
</style>