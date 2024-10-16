<template>
  <section class="testimonials section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="sec-head">
            <h6 class="sub-title main-color mb-15">Testimonials</h6>
            <h3 class="fw-600">What People <span class="fw-200">Say?</span></h3>
          </div>
        </div>
        <div class="col-lg-8 position-re">
          <div class="testim-swiper">
            <Swiper
              id="content-carousel-container-unq-testim"
              class="swiper-container"
              data-swiper="container"
              v-bind="swiperOptions"
            >
              <SwiperSlide v-for="(item, i) in data.slice(0, 2)" key="{i}">
                <div class="item">
                  <div class="content">
                    <div class="text">
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
                      <p class="fz-30">{{ item.desc }}</p>
                    </div>
                    <div
                      class="info d-flex align-items-center pt-40 mt-40 bord-thin-top"
                    >
                      <div>
                        <div class="fit-img circle">
                          <img :src="item.img" alt="" />
                        </div>
                      </div>
                      <div class="ml-20">
                        <h5>{{ item.name }}</h5>
                        <span class="sub-title main-color">
                          {{ item.subName }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="swiper-arrow-control control-abslout">
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
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

import data from '@/l-data/testimonials.json';
const swiperOptions = {
  modules: [Navigation],
  spaceBetween: 30,
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: '.swiper-arrow-control .swiper-button-next',
    prevEl: '.swiper-arrow-control .swiper-button-prev',
  },
};
</script>
