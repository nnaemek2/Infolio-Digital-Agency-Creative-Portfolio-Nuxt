<template>
  <section class="portfolio-carsouel section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Our Portfolio</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 text-u ls1">
            Our featured <span class="fw-200">projects</span>
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
      <div class="work-swiper-auto">
        <Swiper
          id="content-carousel-container-unq-work"
          class="swiper-container"
          data-swiper="container"
          v-bind="swiperOptions"
        >
          <SwiperSlide v-for="(item, i) in data" :key="i">
            <div class="item">
              <div class="img">
                <img :src="item.img" alt="" />
              </div>
              <div
                class="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom"
              >
                <div>
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.subTitle }}</p>
                </div>
                <div class="ml-auto">
                  <a :href="item.link" class="rmore">
                    <img
                      src="/light/assets/imgs/arrow-right.png"
                      alt=""
                      class="icon-img-20"
                    />
                  </a>
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
import data from '@/l-data/portfolios/works1';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 500,
  navigation: {
    nextEl: '.swiper-arrow-control .swiper-button-next',
    prevEl: '.swiper-arrow-control .swiper-button-prev',
  },
};
</script>
