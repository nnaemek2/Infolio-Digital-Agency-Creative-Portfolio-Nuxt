<template>
  <header
    class="header page-header bg-img section-padding"
    data-background="/light/assets/imgs/header/b5.jpg"
    data-overlay-dark="9"
  >
    <div class="container pt-100">
      <div class="text-center">
        <h1>Web Development.</h1>
        <div class="mt-15">
          <a href="/light/home-main">Home</a>
          <span class="padding-rl-20">|</span>
          <a href="/light/page-services">Services</a>
          <span class="padding-rl-20">|</span>
          <span class="main-color">Web Development</span>
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
