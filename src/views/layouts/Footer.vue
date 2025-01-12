<script setup>
import imageLogo from "@/assets/images/bg-logo.webp"
import {Facebook, Instagram, Tiktok} from "@/assets/icons.js";
import CardPay1 from "@/assets/images/master-card.webp"
import CardPay2 from "@/assets/images/jcb.webp"
import CardPay3 from "@/assets/images/visa.webp"

</script>

<template>
    <div class="bottom-container w-100">
        <div class="d-flex align-items-center gap-5 justify-content-around">
            <div class="bottom-left">
                <h3>NHẬN BẢN TIN LÀM ĐẸP</h3>
                <span>Đừng bỏ lỡ hàng ngàn sản phẩm và khuyến mãi siêu hấp dẫn</span>
            </div>
            <div class="bottom-right position-relative d-flex align-items-center">
                <input class="border-0 w-100" type="text" placeholder="Điền email của bạn" />
                <div class="register-email position-absolute">ĐĂNG KÝ</div>
            </div>
        </div>
        <div class="footer-main row bg-white p-5">
            <div class="col-12 col-md-6 col-lg-3">
                <div class="logo-footer mb-3">
                    <img :src="imageLogo" />
                </div>
                <div class="social-list mb-3">
                    <span class="d-block mb-2 fw-bold">THEO DÕI CHÚNG TÔI TRÊN</span>
                    <div class="d-flex align-items-center flex-row gap-3">
                        <span class="social-item" v-html="Facebook"></span>
                        <span class="social-item" v-html="Tiktok"></span>
                        <span class="social-item" v-html="Instagram"></span>
                    </div>
                </div>
                <div class="mb-3">
                    <span class="d-block mb-2 fw-bold">PHƯƠNG THỨC THANH TOÁN</span>
                    <div class="d-flex align-items-center flex-row gap-3">
                        <div class="payment-item">
                            <img class="w-100 h-100" :src="CardPay1"/>
                        </div>
                        <div class="payment-item">
                            <img class="w-100 h-100" :src="CardPay2"/>
                        </div>
                        <div class="payment-item">
                            <img class="w-100 h-100" :src="CardPay3"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <ul class="d-flex flex-column gap-3">
                    <li class="list-unstyled fw-bold">VỀ CHÚNG TÔI</li>
                    <li class="item-content list-unstyled">Câu chuyện thương hiệu</li>
                    <li class="item-content list-unstyled">Liên hệ chúng tôi</li>
                </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <ul class="d-flex flex-column gap-3">
                    <li class="list-unstyled fw-bold">CHĂM SÓC KHÁCH HÀNG</li>
                    <li class="item-content list-unstyled">Đăng kí tài khoản thành viên</li>
                    <li class="item-content list-unstyled">Hướng dẫn mua hàng online</li>
                    <li class="item-content list-unstyled">Quyền lợi thành viên</li>
                    <li class="item-content list-unstyled">Giao hàng và thanh toán</li>
                    <li class="item-content list-unstyled">Chính sách đổi hàng</li>
                    <li class="item-content list-unstyled">Điều khoản mua bán hàng hóa</li>
                </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <ul class="d-flex flex-column gap-3">
                    <li class="list-unstyled fw-bold">Đối tác - Liên kết</li>
                    <li class="item-content list-unstyled">Beauty Box</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bottom-container {
  background-color: #152818;
  .bottom-left {
    padding: 24px 0;
    color: #fff;
  }
  .bottom-right {
    width: 378px;
    input {
      font-size: 12px;
      color: #FFFFFF;
      padding: 16px 90px 16px 12px;
      border-radius: 30px;
      background-color: #324335;
      &::placeholder {
        font-size: 14px;
        color: #fff;
      }
    }
    .register-email {
      right: 18px;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
    }
  }
    .footer-main {
        .social-list {
            .social-item {
                width: 20px;
            }
        }
        .payment-item {
            width: 40px;
            height: 30px;
        }
        .item-content {
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
}
</style>