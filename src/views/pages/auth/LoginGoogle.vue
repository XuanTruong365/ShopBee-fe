<script setup>
import {ref} from "vue";
import {IconGoogle} from "@/assets/icons.js";
import {useUserStore} from "@/app/stores/user.js";

import loginGoogleBg from '@/assets/images/bg-loggin.jpg'
const useStore = useUserStore()

const errors = ref('')


</script>
<template>
    <div class="row justify-content-center align-items-center mt-4 mb-4">
        <div class="col-md-10">
            <div class="login-google-page">
                <div class="row justify-content-center align-items-center">
                    <div class="col-6">
                        <div class="login-form">
                            <div class="title">Loggin</div>
                            <button class="google-button" @click="handleGoogleLogin">
                                <span class="me-md-3 align-text-top" v-html="IconGoogle"></span>
                                Google
                            </button>
                            <div :class="{'is-invalid': errors}"></div>
                            <div class="invalid-feedback text-center mt-3">{{ errors }}</div>
                        </div>
                    </div>
                    <div class="col-6 bg-img">
                        <img :src="loginGoogleBg" title="Google login">
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.login-google-page {
  height: 86vh;
  background: white;
  border-radius: 10px;
  overflow: hidden;

  > .row {
    height: 100%;

    .bg-img {
      height: 100%;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}

.login-form {
  //width: 50%;
  //padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    text-align: center;
    color: #424242;
    margin-bottom: 24px;
  }

  .google-button {
    width: 400px;
    height: 40px;
    padding: 10px 12px 10px 12px;
    gap: 10px;
    border-radius: 100px;
    border: 1px solid #747775;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.2px;
    background-color: #FFFFFF;
  }
}

.background {
  width: 50%;
  background: url('@/assets/images/bg-loggin.jpg') no-repeat center center;
  background-size: cover;
}
</style>
