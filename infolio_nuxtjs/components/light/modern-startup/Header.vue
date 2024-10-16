<template>
  <header class="startup-header" data-scroll-index="0">
    <div
      class="valign bg-img"
      data-background="/light/assets/imgs/background/1.jpg"
      data-overlay-dark="5"
    >
      <div class="container pt-40">
        <div class="caption">
          <div class="lg-text fw-600">
            <div class="text d-flex align-items-center">
              <span>We create</span>
            </div>
            <div class="text">impactful</div>
            <div class="text">digital experiences</div>
          </div>
          <p>
            We combine forward-thinking design with modern technology to tell
            stories that transform and grow our partners brands.
          </p>
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
