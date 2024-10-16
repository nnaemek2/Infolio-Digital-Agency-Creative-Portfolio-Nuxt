<template>
  <section class="pages section-padding pb-0" data-scroll-index="1">
    <div class="container">
      <div class="sec-head mb-80">
        <div class="row align-items-end">
          <div class="col-lg-7">
            <h6 class="sub-title mb-15">
              <span class="main-color">50+ Inner Pages</span>
              <span class="opacity-7">(Dark & Light)</span>
            </h6>
            <h2 class="fw-600">
              Explore some of <br />
              <span class="spc-font">creative collection</span> inner pages
            </h2>
          </div>
          <div class="col-lg-5">
            <div class="text pb-15">
              <p>
                Enjoy a versatile collection of ready-made pages for various
                purposes. Create a unique and eye-catching website easily!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper3">
        <Swiper
          id="content-carousel-container-unq-clients"
          class="swiper-container"
          data-swiper="container swiper3"
          v-bind="swiperOptions"
          autoPlay
        >
          <SwiperSlide>
            <div class="item">
              <a href="dark/page-about" target="_blank">
                <img src="/landing-preview/img/pages/1.jpg" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="dark/page-about2" target="_blank">
                <img src="/landing-preview/img/pages/2.jpg" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="dark/page-about3" target="_blank">
                <img src="/landing-preview/img/pages/3.jpg" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="dark/page-services" target="_blank">
                <img src="/landing-preview/img/pages/4.jpg" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="dark/page-services2" target="_blank">
                <img src="/landing-preview/img/pages/5.jpg" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="dark/page-services-details" target="_blank">
                <img src="/landing-preview/img/pages/6.jpg" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="dark/page-contact" target="_blank">
                <img src="/landing-preview/img/pages/7.jpg" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="dark/page-contact2" target="_blank">
                <img src="/landing-preview/img/pages/8.jpg" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="dark/page-contact3" target="_blank">
                <img src="/landing-preview/img/pages/9.jpg" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="dark/page-team" target="_blank">
                <img src="/landing-preview/img/pages/10.jpg" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="dark/page-team-single" target="_blank">
                <img src="/landing-preview/img/pages/11.jpg" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="dark/page-FAQS" target="_blank">
                <img src="/landing-preview/img/pages/12.jpg" alt="" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

const swiperOptions = {
  modules: [Pagination],

  spaceBetween: 30,
  speed: 1000,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
      centeredSlides: false,
    },
  },
};
</script>
