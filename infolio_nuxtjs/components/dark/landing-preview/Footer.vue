<template>
  <footer class="">
    <div
      class="footer-container section-padding bg-img"
      data-background="/landing-preview/img/foter.jpg"
      data-overlay-dark="9"
    >
      <div class="container ontop">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="text-center">
              <span class="butn butn-md butn-bord-thin radius-30 mb-30">
                <span class="text">Hurry up!</span>
              </span>
              <h2 class="fz-70">
                Get <span class="spc-font">InFolio</span> and Create a
                <span class="spc-font">Professional</span> Website Today!
              </h2>
              <a
                href="#0"
                class="butn butn-bg butn-md radius-30 main-colorbg mt-30"
              >
                <span><i class="ti-shopping-cart mr-10"></i> Purchase Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  gsap.set('.footer-container', { yPercent: -50 });
  const uncover = gsap.timeline({ paused: true });
  uncover.to('.footer-container', { yPercent: 0, ease: 'none' });

  ScrollTrigger.create({
    trigger: 'main',
    start: 'bottom bottom',
    end: '+=50%',
    animation: uncover,
    scrub: true,
  });
  loadBackgroudImages();
});
</script>
