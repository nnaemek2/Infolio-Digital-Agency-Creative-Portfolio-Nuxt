<template>
  <header
    class="header page-header bg-img section-padding"
    data-background="/light/assets/imgs/header/bg1.jpg"
    data-overlay-dark="9"
  >
    <div class="container pt-100">
      <div class="text-center">
        <h1>Portfolio Gallery.</h1>
        <div class="mt-15">
          <a href="#0">Home</a>
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
