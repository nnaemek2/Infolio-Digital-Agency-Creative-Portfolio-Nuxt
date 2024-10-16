<template>
  <footer class="sub-bg modern-footer pt-80">
    <div class="footer-container">
      <div class="container ontop">
        <div class="row pb-30 bord-thin-bottom">
          <div class="col-lg-5">
            <div class="logo icon-img-120">
              <img src="/dark/assets/imgs/logo-light.png" alt="" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="social-media d-flex justify-content-end">
              <ul class="rest d-flex align-items-center fz-14">
                <li class="hover-this cursor-pointer">
                  <a href="#0" class="hover-anim">
                    <i class="fab fa-facebook-f mr-10"></i> Facebook
                  </a>
                </li>
                <li class="hover-this cursor-pointer ml-50">
                  <a href="#0" class="hover-anim">
                    <i class="fab fa-dribbble mr-10"></i> Dribbble
                  </a>
                </li>
                <li class="hover-this cursor-pointer ml-50">
                  <a href="#0" class="hover-anim">
                    <i class="fab fa-linkedin-in mr-10"></i> LinkedIn
                  </a>
                </li>
                <li class="hover-this cursor-pointer ml-50">
                  <a href="#0" class="hover-anim">
                    <i class="fab fa-instagram mr-10"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row pt-80">
          <div class="col-lg-7">
            <div class="call-action">
              <h2 class="d-slideup wow fz-60 fw-600">
                <span class="sideup-text">
                  <span class="up-text">Have a project in mind?</span>
                </span>
                <span class="sideup-text">
                  <span class="up-text underline">
                    <a href="/dark/page-contact" class="main-color">
                      Let’s get to work.
                    </a>
                  </span>
                </span>
              </h2>
              <div class="info mt-80 d-flex align-items-center">
                <div>
                  <a href="#0" class="butn butn-md butn-bord-thin radius-30">
                    <span class="text">Support@Website.com</span>
                  </a>
                </div>
                <div>
                  <a
                    href="#0"
                    class="butn butn-md butn-bord-thin radius-30 ml-30"
                  >
                    <span class="text">+2 456 (343) 24 45</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 bord-left">
            <div class="column">
              <h6 class="sub-title mb-30">Useful Links</h6>
              <div class="row">
                <div class="col-6">
                  <ul class="rest fz-14">
                    <li class="mb-15">
                      <a href="#0">About</a>
                    </li>
                    <li class="mb-15">
                      <a href="#0">Services</a>
                    </li>
                    <li class="mb-15">
                      <a href="#0">Blog</a>
                    </li>
                    <li>
                      <a href="#0">Contact</a>
                    </li>
                  </ul>
                </div>
                <div class="col-6">
                  <ul class="rest fz-14">
                    <li class="mb-15">
                      <a href="#0">FAQS</a>
                    </li>
                    <li class="mb-15">
                      <a href="#0">Term & Conditions</a>
                    </li>
                    <li class="mb-15">
                      <a href="#0">Privacy policy</a>
                    </li>
                    <li>
                      <a href="#0">Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="subscribe-minimal mt-50">
              <form action="contact.php">
                <div class="form-group rest">
                  <input type="email" placeholder="Type Your Email" />
                  <button type="submit">
                    <i class="ti-arrow-top-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="text-center pt-30 pb-30 main-bg mt-80">
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
