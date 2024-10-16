<template>
  <footer class="min-footer2">
    <div class="footer-container">
      <div class="container pt-60 pb-25 ontop">
        <div class="text-center mb-30">
          <h6 class="sub-title mb-15">Get In Touch</h6>
          <h2 class="fz-100 text-u ls1">
            <a href="/light/page-contact2">Let&apos;s Talk</a>
          </h2>
        </div>
        <div class="row mt-40 pt-25 bord-thin-top">
          <div class="col-lg-4 col-md-6 md-mb15">
            <div class="logo icon-img-100">
              <img src="/light/assets/imgs/logo-light.png" alt="" />
            </div>
          </div>
          <div class="col-lg-4 order-md-3">
            <div class="text-center">
              <p class="fz-14">
                © 2024 InFolio is Proudly Powered by
                <span class="underline main-color">
                  <a href="https://themeforest.net/user/UiCamp" target="_blank">
                    UiCamp
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 order-md-2 md-mb15">
            <div class="links d-flex justify-content-end">
              <ul class="rest d-flex align-items-center">
                <li>
                  <a href="/light/page-FAQS">FAQ</a>
                </li>
                <li class="ml-30">
                  <a href="/light/page-about3">Careers</a>
                </li>
                <li class="ml-30">
                  <a href="/light/page-contact3">Contact Us</a>
                </li>
              </ul>
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
