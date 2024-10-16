<template>
  <section class="work-carsouel section-padding position-re o-hidden">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Our Portfolio</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 text-u ls1">
            Featured <span class="fw-200">projects</span>
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
    </div>
    <div class="container-fluid rest">
      <div class="row">
        <div class="col-12">
          <div class="work-crus work-crus5 out">
            <Swiper
              id="content-carousel-container-unq-w"
              v-bind="swiperOptions"
            >
              <SwiperSlide v-for="(item, i) in data" :key="i">
                <div class="item">
                  <div class="img">
                    <img :src="item.img" alt="" />
                    <div class="cont">
                      <span class="mb-5">{{ item.title }}</span>
                      <h6 class="fz-18">{{ item.subTitle }}</h6>
                    </div>
                    <a :href="item.link" class="plink"></a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import data from '@/l-data/portfolios/works3.json';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';

const swiperOptions = {
  modules: [Navigation],
  speed: 600,
  slidesPerView: 5,
  loop: true,

  navigation: {
    nextEl: '.swiper-arrow-control .swiper-button-next',
    prevEl: '.swiper-arrow-control .swiper-button-prev',
  },
  breakpoints: {
    640: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    768: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
    1000: {
      slidesPerView: 5,

      spaceBetween: 30,
      loop: true,
      // slidesPerView: 5,
      // centeredSlides: false,
    },
  },
};
</script>
