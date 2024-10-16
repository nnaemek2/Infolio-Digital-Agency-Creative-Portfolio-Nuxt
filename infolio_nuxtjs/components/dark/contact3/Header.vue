<template>
  <header
    class="header page-header-cerv bg-img section-padding"
    data-background="/dark/assets/imgs/header/2.jpg"
    data-overlay-dark="4"
  >
    <div class="container pt-100">
      <div class="text-center">
        <h1 class="fz-100">Contact Us.</h1>
        <div class="mt-15">
          <a href="/dark/home-main">Home</a>
          <span class="padding-rl-20">|</span>
          <span class="main-color">Contact</span>
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
