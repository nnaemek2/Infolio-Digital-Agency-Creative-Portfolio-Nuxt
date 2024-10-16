<template>
  <div
    class="header page-header-cerv bg-img section-padding"
    data-background="/light/assets/imgs/header/2.jpg"
    data-overlay-dark="4"
  >
    <div class="container pt-100 ontop">
      <div class="text-center">
        <h1 class="fz-100">Our Services.</h1>
        <div class="mt-15">
          <a href="/light/home-main">Home</a>
          <span class="padding-rl-20">|</span>
          <span class="main-color">Services</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
