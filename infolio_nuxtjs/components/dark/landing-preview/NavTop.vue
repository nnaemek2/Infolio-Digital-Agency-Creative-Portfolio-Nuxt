<template>
  <nav class="navbar navbar-expand-lg bord blur pt-15 pb-15">
    <div class="container d-block">
      <div class="row align-items-center">
        <div class="col-lg-4 col-6 md-hide">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#0" data-scroll-nav="0"> Demos </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#0" data-scroll-nav="1"> Pages </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://uicamp.smartinnovates.net/docs/nuxtjs/"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-6 text-center">
          <a class="logo icon-img-120" href="#">
            <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
          </a>
        </div>
        <div class="col-lg-4 col-6 d-flex">
          <div class="ml-auto">
            <a href="#0" class="butn butn-bord butn-md radius-30 fz-14">
              <span> <i class="ti-shopping-cart mr-10"></i> Purchase Now </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');

  if (bodyScroll > 300) navbar.classList.add('nav-scroll');
  else navbar.classList.remove('nav-scroll');
}
function scrollToSection(id) {
  setTimeout(
    () =>
      document
        .querySelector(`[data-scroll-index="${id}"]`)
        ?.scrollIntoView({ smooth: true }),
    700
  );
}
</script>
