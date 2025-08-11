<script setup>
import ProductItem from "@/components/product/ProductItem.vue";
import imgProductDemo from "@/assets/images/prd-sale-image.webp";
import imageAddSale from "@/assets/images/addProductImage.webp";
import imagePrdBonus from "@/assets/images/bonus-image.webp";
import {ref, computed} from "vue";
import RegisterFeed from "@/components/mail/RegisterFeed.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import {Search} from "@/assets/icons.js";

const priceRanges = [
    "Dưới 500.000₫",
    "500.000₫ - 1.000.000₫",
    "1.000.000₫ - 1.500.000₫",
    "1.500.000₫ - 2.000.000₫",
    "Trên 2.000.000₫",
];

const productLines = ["Yehwadam (16)", "Beyond (1)", "Freshian (9)"];
const productTypes = ["Bộ Dưỡng Da (15)", "Chì Chân Mày (1)"];

// Dữ liệu mẫu
const products = ref([
    {
        productName: "THE FACE SHOP1",
        productImage: imgProductDemo,
        currentPrice: "265.000đ",
        oldPrice: "414.000đ",
        salePercent: 36,
        stars: 5,
        totalReviews: 262,
        totalRemaining: 12,
        bonusImage: imagePrdBonus,
        addSaleImage: imageAddSale
    },
    {
        productName: "LANEIGE2",
        productImage: imgProductDemo,
        currentPrice: "350.000đ",
        oldPrice: "480.000đ",
        salePercent: 27,
        stars: 4,
        totalReviews: 150,
        totalRemaining: 20,
        bonusImage: imagePrdBonus,
        addSaleImage: imageAddSale
    },
    {
        productName: "LANEIGE3",
        productImage: imgProductDemo,
        currentPrice: "350.000đ",
        oldPrice: "480.000đ",
        salePercent: 27,
        stars: 4,
        totalReviews: 150,
        totalRemaining: 20,
        bonusImage: imagePrdBonus,
        addSaleImage: imageAddSale
    },
    {
        productName: "LANEIGE4",
        productImage: imgProductDemo,
        currentPrice: "350.000đ",
        oldPrice: "480.000đ",
        salePercent: 27,
        stars: 4,
        totalReviews: 150,
        totalRemaining: 20,
        bonusImage: imagePrdBonus,
        addSaleImage: imageAddSale
    },
    {
        productName: "LANEIGE5",
        productImage: imgProductDemo,
        currentPrice: "350.000đ",
        oldPrice: "480.000đ",
        salePercent: 27,
        stars: 4,
        totalReviews: 150,
        totalRemaining: 20,
        bonusImage: imagePrdBonus,
        addSaleImage: imageAddSale
    },
    {
        productName: "THE FACE SHOP6",
        productImage: imgProductDemo,
        currentPrice: "265.000đ",
        oldPrice: "414.000đ",
        salePercent: 36,
        stars: 5,
        totalReviews: 262,
        totalRemaining: 12,
        bonusImage: imagePrdBonus,
        addSaleImage: imageAddSale
    },
]);

/* ---------- UI state ---------- */
const selectedSort = ref("newest"); // newest | price-asc | price-desc | discount
const itemsToShow = ref(8);
const pageSize = ref(8);

/* ---------- helpers ---------- */
// parse "265.000đ" -> 265000 (number)
function parsePrice(priceStr) {
    if (!priceStr) return 0;
    // remove non-digit characters
    const digits = String(priceStr).replace(/[^\d]/g, "");
    return parseInt(digits || "0", 10);
}

/* ---------- computed sorted & paginated products ---------- */
const sortedProducts = computed(() => {
    const arr = products.value.slice(); // copy to avoid mutating original
    if (selectedSort.value === "price-asc") {
        arr.sort((a, b) => parsePrice(a.currentPrice) - parsePrice(b.currentPrice));
    } else if (selectedSort.value === "price-desc") {
        arr.sort((a, b) => parsePrice(b.currentPrice) - parsePrice(a.currentPrice));
    } else if (selectedSort.value === "discount") {
        arr.sort((a, b) => (b.salePercent || 0) - (a.salePercent || 0));
    } else {
        // newest - keep original order (assuming original array is newest-first)
        // preserve stable order by not sorting
    }
    return arr;
});

const displayedProducts = computed(() => {
    return sortedProducts.value.slice(0, itemsToShow.value);
});

const canLoadMore = computed(() => {
    return itemsToShow.value < sortedProducts.value.length;
});

/* ---------- actions ---------- */

function loadMore() {
    itemsToShow.value = Math.min(itemsToShow.value + pageSize.value, sortedProducts.value.length);
}

function resetPagination() {
    itemsToShow.value = pageSize.value;
}

const breadcrumbItems = [
    {name: "Trang chủ", link: "/dashboard"},
    {name: "7-13.8 SIÊU SALE ĐỘC QUYỀN", link: '/categories'},
];
</script>

<template>
    <div class="collection-container">
        <div class="row">
            <div class="col-12">
                <div class="banner-wrapper ratio ratio-21x9">
                    <img
                        src="@/assets/images/banner2.webp"
                        alt="Collection Banner"
                        class="banner-img"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>

        <div class="container mt-2">
            <!-- Breadcrumb & Title -->
            <div class="mt-0 mb-3">
                <div id="product-page-title">
                    <!-- Breadcrumb -->
                    <BreadCrumb :items="breadcrumbItems"/>

                    <!-- Page Title -->
                    <h1 id="page-title" class="text-uppercase fw-bold mt-2 mb-2">
                        7-13.8 SIÊU SALE ĐỘC QUYỀN
                    </h1>
                </div>
            </div>

            <div class="row">
                <!-- Sidebar -->
                <div class="col-12 col-md-4 col-lg-3">
                    <div class="sidebar p-3 shadow-sm rounded-3 bg-white">
                        <!-- Search in collection -->
                        <div class="mb-3">
                            <div class="input-group">
                                <span class="input-group-text bg-light border-0" v-html="Search"></span>
                                <input
                                    type="text"
                                    class="form-control border-0 shadow-none"
                                    placeholder="Tìm kiếm trong bộ sưu tập"
                                />
                            </div>
                        </div>

                        <div class="accordion accordion-flush">
                            <!-- Giá sản phẩm -->
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header" id="headingPrice">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsePrice" aria-expanded="false">
                                        Giá sản phẩm
                                    </button>
                                </h2>
                                <div id="collapsePrice" class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        <div class="form-check mb-2" v-for="(label, i) in priceRanges" :key="i">
                                            <input class="form-check-input" type="checkbox" :id="'price' + i"/>
                                            <label class="form-check-label" :for="'price' + i">{{ label }}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Dòng sản phẩm -->
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header" id="headingLine">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseLine" aria-expanded="false">
                                        Dòng sản phẩm
                                    </button>
                                </h2>
                                <div id="collapseLine" class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        <div class="input-group mb-2">
                                            <span class="input-group-text bg-light border-0">
                                              <i class="bi bi-search text-secondary"></i>
                                            </span>
                                            <input type="text" class="form-control border-0 shadow-none"
                                                   placeholder="Tìm"/>
                                        </div>
                                        <div class="form-check" v-for="(label, i) in productLines" :key="i">
                                            <input class="form-check-input" type="checkbox" :id="'line' + i"/>
                                            <label class="form-check-label" :for="'line' + i">{{ label }}</label>
                                        </div>
                                        <button class="btn btn-link p-0 mt-2">Xem thêm</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Loại sản phẩm -->
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header" id="headingType">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseType" aria-expanded="false">
                                        Loại sản phẩm
                                    </button>
                                </h2>
                                <div id="collapseType" class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        <div class="input-group mb-2">
                                            <span class="input-group-text bg-light border-0">
                                              <i class="bi bi-search text-secondary"></i>
                                            </span>
                                            <input type="text" class="form-control border-0 shadow-none"
                                                   placeholder="Tìm"/>
                                        </div>
                                        <div class="form-check" v-for="(label, i) in productTypes" :key="i">
                                            <input class="form-check-input" type="checkbox" :id="'type' + i"/>
                                            <label class="form-check-label" :for="'type' + i">{{ label }}</label>
                                        </div>
                                        <button class="btn btn-link p-0 mt-2">Xem thêm</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Dung tích -->
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header" id="headingVolume">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseVolume" aria-expanded="false">
                                        Dung tích
                                    </button>
                                </h2>
                                <div id="collapseVolume" class="accordion-collapse collapse">
                                    <div class="accordion-body text-muted">No Data</div>
                                </div>
                            </div>

                            <!-- Mùi hương -->
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header" id="headingScent">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseScent" aria-expanded="false">
                                        Mùi hương
                                    </button>
                                </h2>
                                <div id="collapseScent" class="accordion-collapse collapse">
                                    <div class="accordion-body text-muted">No Data</div>
                                </div>
                            </div>
                        </div>

                        <!-- Mobile Filter Button -->
                        <div class="d-md-none mt-3">
                            <button class="btn btn-outline-primary w-100">
                                <i class="bi bi-filter"></i> Lọc
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Main Content: product list (optimized UI/UX) -->
                <div class="col-12 col-md-8 col-lg-9">
                    <!-- Toolbar: count / sort / view toggle -->
                    <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                        <div class="d-flex align-items-center gap-3">
                            <div class="fw-semibold">{{ products.length }} sản phẩm</div>

                            <div class="d-flex align-items-center gap-2 text-muted small">
                                <div class="vr" style="height:25px;"></div>
                                <select class="form-select form-select-sm" v-model="selectedSort"
                                        @change="resetPagination">
                                    <option value="newest">Mới nhất</option>
                                    <option value="price-asc">Giá: Thấp → Cao</option>
                                    <option value="price-desc">Giá: Cao → Thấp</option>
                                    <option value="discount">Giảm giá nhiều nhất</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Product list -->
                    <!-- Product list -->
                    <div v-if="displayedProducts.length > 0">
                        <div class="row g-3">
                            <div
                                v-for="(product, index) in displayedProducts"
                                :key="index"
                                class="col-6 col-md-4 col-lg-3"
                            >
                                <ProductItem v-bind="product" class="w-100" />
                            </div>
                        </div>

                        <!-- Load more -->
                        <div class="text-center mt-4" v-if="canLoadMore">
                            <button class="btn btn-outline-secondary px-4" @click="loadMore">
                                Xem thêm
                            </button>
                        </div>
                    </div>

                    <!-- Empty state -->
                    <div v-else class="text-center py-5 text-muted">
                        Không có sản phẩm nào.
                    </div>
                </div>
            </div>
        </div>

        <RegisterFeed class="mt-5" />
    </div>
</template>

<style scoped>
.sidebar {
    font-size: 1rem;
    line-height: 1.5;
}

.sidebar .accordion-button {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.75rem 1rem;
    outline: none;
    border: none;
}

.sidebar .form-control {
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
}

.sidebar .form-check-input {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: 0.25rem;
    cursor: pointer;
}

.sidebar .form-check-label {
    font-size: 1rem;
    cursor: pointer;
}

.sidebar .form-check {
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>


