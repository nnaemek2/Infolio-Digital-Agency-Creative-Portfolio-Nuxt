<template>
  <header
    class="header page-header bg-img section-padding"
    data-background="/dark/assets/imgs/header/bg1.jpg"
    data-overlay-dark="9"
  >
    <div class="container pt-100">
      <div class="text-center">
        <h1>Caption Cursor.</h1>
        <div class="mt-15">
          <a href="/dark/home-main">Home</a>
          <span class="padding-rl-20">|</span>
          <span class="main-color">Portfolio</span>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
