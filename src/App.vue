<script setup>
import eventBus from "@/app/utils/event-bus.js";
import {Toast} from "bootstrap";
import {computed, onMounted, ref} from "vue";
import EventBusType from "@/app/constants/event-bus-type.js";

const toast = ref(null)
const message = ref('')
const type = ref('')

eventBus .$on(EventBusType.SHOW_ALERT_SUCCESS, (data) => {
    message.value = data
    type.value = EventBusType.SHOW_ALERT_SUCCESS
    toast.value.show()
})

eventBus.$on(EventBusType.SHOW_ALERT_ERROR, (data) => {
    message.value = data
    type.value = EventBusType.SHOW_ALERT_ERROR
    toast.value.show()
})

const alertType = computed(() => {
    if (type.value === EventBusType.SHOW_ALERT_SUCCESS) return 'alert-success'
    return 'alert-danger'
})

onMounted(() => {
    toast.value = new Toast('#toastPlacement')
})
</script>

<template>
    <div>
        <div aria-live="polite" aria-atomic="true" class="bg-dark position-relative bd-example-toasts">
            <div class="toast-container position-absolute p-3 top-0 end-0">
                <div class="toast border-0" id="toastPlacement">
                    <div class="toast-body p-0">
                        <div class="alert m-0" role="alert" :class="alertType">
                            {{ message }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RouterView/>
    </div>
</template>

<style scoped>
</style>
