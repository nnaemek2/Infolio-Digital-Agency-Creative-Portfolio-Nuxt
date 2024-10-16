<template>
  <section class="services section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Our Specialize</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 d-rotate wow">
            <span class="rotate-text">
              Comprehensive <span class="fw-200">Services.</span>
            </span>
          </h2>
          <div class="ml-auto">
            <div class="swiper-arrow-control">
              <div class="swiper-button-prev">
                <span class="ti-arrow-left"></span>
              </div>
              <div class="swiper-button-next">
                <span class="ti-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="serv-swiper"
        data-carousel="swiper"
        data-loop="true"
        data-space="30"
      >
        <Swiper
          id="content-carousel-container-unq-serv"
          class="swiper-container"
          data-swiper="container"
          v-bind="swiperOptions"
        >
          <SwiperSlide v-for="(item, i) in data.slice(0, 4)" :key="i">
            <div class="item-box radius-15">
              <div class="icon mb-40 opacity-5">
                <img :src="item.img" alt="" />
              </div>
              <h5 class="mb-15">{{ item.title }}</h5>
              <p>{{ item.desc }}</p>
              <a :href="item.link" class="rmore mt-30">
                <span class="sub-title">Read More</span>
                <img
                  src="/light/assets/imgs/arrow-right.png"
                  alt=""
                  class="icon-img-20 ml-5"
                />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
<script setup>
import data from '@/l-data/services.json';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

const swiperOptions = {
  modules: [Navigation],
  speed: 600,
  loop: true,
  navigation: {
    nextEl: '.swiper-arrow-control .swiper-button-next',
    prevEl: '.swiper-arrow-control .swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    // when window width is >= 768px
    768: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 50,
      centeredSlides: false,
    },
    // when window width is >= 1200px
    1000: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 50,
      centeredSlides: true,
    },
  },
};
</script>
