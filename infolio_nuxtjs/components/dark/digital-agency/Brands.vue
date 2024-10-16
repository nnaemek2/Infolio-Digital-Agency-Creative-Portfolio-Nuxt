<template>
  <div class="brands bord-thin-bottom">
    <div class="container">
      <div
        class="brand-swiper swiper5"
        data-carousel="swiper"
        data-loop="true"
        data-space="30"
      >
        <Swiper
          id="content-carousel-container-unq-brand"
          class="swiper-container"
          data-swiper="container"
          v-bind="swiperOptions"
        >
          <SwiperSlide>
            <div class="item">
              <a href="#0">
                <img src="/dark/assets/imgs/brands/01.png" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="#0">
                <img src="/dark/assets/imgs/brands/02.png" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="#0">
                <img src="/dark/assets/imgs/brands/03.png" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="#0">
                <img src="/dark/assets/imgs/brands/04.png" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="#0">
                <img src="/dark/assets/imgs/brands/05.png" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="#0">
                <img src="/dark/assets/imgs/brands/06.png" alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <a href="#0">
                <img src="/dark/assets/imgs/brands/05.png" alt="" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

const swiperOptions = {
  speed: 600,
  breakpoints: {
    // when window width is >= 640px
    640: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    // when window width is >= 768px
    600: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
    // when window width is >= 1200px
    1200: {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 40,
      centeredSlides: false,
    },
  },
};
</script>
