<template>
  <section class="testim-crev" data-scroll-index="4">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Testimonails</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2>What people <span class="fw-200">say?</span></h2>
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
        class="testim-swiper2 testim2"
        data-carousel="swiper"
        data-loop="true"
        data-space="30"
      >
        <Swiper
          id="content-carousel-container-unq-testim"
          class="swiper-container"
          data-swiper="container"
          v-bind="swiperOptions"
        >
          <SwiperSlide v-for="(item, i) in data" :key="i">
            <div class="item bord-box radius-15">
              <div class="content">
                <div class="text">
                  <span class="tag sub-title mb-30 main-color">
                    Design Quality
                  </span>
                  <p>{{ item.desc }}</p>
                </div>
                <div class="info mt-40">
                  <div class="img-curv">
                    <div class="img">
                      <img :src="item.img" alt="" />
                    </div>
                  </div>
                  <div class="ml-20">
                    <h6>{{ item.name }}</h6>
                    <span class="sub-title opacity-7">
                      {{ item.subName }}
                    </span>
                  </div>
                  <div class="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="256.721"
                      height="208.227"
                      viewBox="0 0 256.721 208.227"
                      class="qout-svg"
                    >
                      <path
                        data-name="Path"
                        d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                        transform="translate(121.55 640.568)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                        opacity="0.322"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
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

import data from '@/l-data/testimonials.json';
const swiperOptions = {
  modules: [Navigation],
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: '.swiper-arrow-control .swiper-button-next',
    prevEl: '.swiper-arrow-control .swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 640px 640: { loop: true, slidesPerView: 1, spaceBetween: 20, centeredSlides: false, }, // when window width is >= 768px
    768: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    // when window width is >= 1200px
    1200: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    },
  },
};
</script>
