<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const showOverlay = ref(false);
const route = useRoute();

onMounted(() => {
    if (route.name === 'home') {
        showOverlay.value = true;
    }
});

const closeOverlay = () => {
    showOverlay.value = false;
};
</script>

<template>
    <div v-if="showOverlay" class="overlay">
        <div class="overlay-content">
            <img src="path-to-your-ad-image.jpg" alt="Advertisement" />
            <button class="close-button" @click="closeOverlay">×</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  outline: none;
}
</style>
