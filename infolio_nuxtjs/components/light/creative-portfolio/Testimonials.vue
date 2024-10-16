<template>
  <section class="testim-crev section-padding sub-bg radius-30 mt-15">
    <div class="container">
      <div class="sec-head text-center mb-80">
        <h6 class="sub-title main-color mb-15">Testimonials</h6>
        <h2>What People Say?</h2>

        <div class="fixed-head main-bg">
          <h5 class="stroke">Clients</h5>

          <div class="shap-right-top">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-11 h-11"
            >
              <path
                d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                fill="#1a1a1a"
              ></path>
            </svg>
          </div>
          <div class="shap-left-bottom">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-11 h-11"
            >
              <path
                d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                fill="#1a1a1a"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        class="testim-swiper2"
        data-carousel="swiper"
        data-loop="true"
        data-space="30"
      >
        <Swiper
          v-bind="swiperOptions"
          id="content-carousel-container-unq-testim"
          class="swiper-container"
          data-swiper="container"
        >
          <SwiperSlide v-for="(item, i) in data.slice(0, 3)" :key="i">
            <div class="item sub-bg2">
              <div class="content">
                <div class="rate-stars fz-14 sub-bg">
                  <span class="rate main-color">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </span>
                  <div class="shap-left-top">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                  <div class="shap-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                </div>
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
                <div class="text">
                  <span class="tag sub-title mb-15"> Design Quality </span>
                  <p>{{ item.desc }}</p>
                </div>
                <div class="info mt-40">
                  <div class="img-curv sub-bg">
                    <div class="img">
                      <img :src="item.img" alt="" />
                    </div>
                    <div class="shap-left-top">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1d1d1d"
                        ></path>
                      </svg>
                    </div>
                    <div class="shap-right-bottom">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1d1d1d"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-30">
                    <h6>{{ item.name }}</h6>
                    <span class="sub-title main-color">
                      {{ item.subName }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

import data from '@/l-data/testimonials.json';

const swiperOptions = {
  spaceBetween: 30,
  loop: true,
  breakpoints: { 800: { slidesPerView: 2 } },
};
</script>
