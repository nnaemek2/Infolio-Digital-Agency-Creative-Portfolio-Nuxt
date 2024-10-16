<template>
  <div class="testimonials section-padding bord-thin-top" data-scroll-index="5">
    <div class="sec-head mb-50">
      <h3>The <span class="fw-200">Testimonials</span></h3>
    </div>
    <div class="testim-swiper" data-carousel="swiper" data-loop="true">
      <Swiper
        id="content-carousel-container-unq-testim"
        class="swiper-container"
        data-swiper="container"
        :loop="true"
      >
        <SwiperSlide v-for="(item, i) in data.slice(0, 2)" :key="i">
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
                <p class="fz-22">{{ item.desc }}</p>
              </div>
              <div class="info mt-40">
                <h5>{{ item.name }}</h5>
                <span class="sub-title fw-200">{{ item.subName }}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

import data from '@/l-data/testimonials.json';
</script>
