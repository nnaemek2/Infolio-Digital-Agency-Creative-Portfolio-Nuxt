<template>
  <header class="header carousel-slider valign">
    <div class="full-width">
      <div class="gallery-img">
        <div class="swiper-container">
          <Swiper v-bind="swiperOptionsImg" :onSwiper="setChildSwiper">
            <SwiperSlide>
              <div
                class="bg-img"
                data-background="/light/assets/imgs/works/full/1.jpg"
                data-overlay-dark="3"
              >
                <a href="/light/project1"></a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="bg-img"
                data-background="/light/assets/imgs/works/full/2.jpg"
                data-overlay-dark="3"
              >
                <a href="/light/project2"></a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="bg-img"
                data-background="/light/assets/imgs/works/full/3.jpg"
                data-overlay-dark="3"
              >
                <a href="/light/project3"></a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="bg-img"
                data-background="/light/assets/imgs/works/full/5.jpg"
                data-overlay-dark="3"
              >
                <a href="/light/project5"></a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="bg-img"
                data-background="/light/assets/imgs/works/full/6.jpg"
                data-overlay-dark="3"
              >
                <a href="/light/project6"></a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="gallery-text">
        <div class="swiper-container">
          <Swiper
            :onInit="setMainSwiper"
            v-bind="swiperOptions"
            class="swiper-container swiper-container-initialized swiper-container-vertical"
          >
            <SwiperSlide>
              <div class="text">
                <h4>Avocado Cutter</h4>
                <h6>
                  <span>Digital Design</span>
                </h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="text">
                <h4>The joy of music</h4>
                <h6>
                  <span>Branding</span>
                </h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="text">
                <h4>Bank Rebranding</h4>
                <h6>
                  <span>Digital Design</span>
                </h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="text">
                <h4>Carved Wood</h4>
                <h6>
                  <span>art Design</span>
                </h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="text">
                <h4>Blom Air purifier</h4>
                <h6>
                  <span>Digital Design</span>
                </h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="text">
                <h4>Avocado Cutter</h4>
                <h6>
                  <span>Digital Design</span>
                </h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="swiper-controls">
        <div class="swiper-button-next swiper-nav-ctrl cursor-pointer">
          <div>
            <span>Next Slide</span>
          </div>
          <div>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        <div class="swiper-button-prev swiper-nav-ctrl cursor-pointer">
          <div>
            <i class="fas fa-chevron-left"></i>
          </div>
          <div>
            <span>Prev Slide</span>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </header>
</template>

<script setup>
import data from '@/l-data/portfolios/worksfull.json';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  Controller,
  EffectFade,
  Navigation,
  Pagination,
  Mousewheel,
} from 'swiper';
import { ref, onMounted, watch } from 'vue';

onMounted(() => {
  loadBackgroudImages();
});
const mainSwiper = ref(null);
const childSwiper = ref(null);
const setMainSwiper = (swiper) => {
  mainSwiper.value = swiper;
};
const setChildSwiper = (swiper) => {
  childSwiper.value = swiper;
};
const swiperOptions = {
  modules: [Navigation, Pagination, Controller, Mousewheel],

  spaceBetween: 30,
  slidesPerView: 1,
  direction: 'vertical',
  loop: true,
  loopedSlides: 4,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  mousewheel: true,
  speed: 1500,
  // controller: {
  //   by: 'container',
  //   control: childSwiper,
  // },
};

const swiperOptionsImg = {
  modules: [Navigation, Pagination, Controller, EffectFade, Mousewheel],
  spaceBetween: 80,
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  loopedSlides: 4,
  mousewheel: true,
  speed: 1500,
  // controller: {
  //   by: 'container',
  //   control: mainSwiper,
  // },
  navigation: {
    nextEl: '.carousel-slider .swiper-controls .swiper-button-next',
    prevEl: '.carousel-slider .swiper-controls .swiper-button-prev',
  },
  pagination: {
    el: '.carousel-slider .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
        '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
        'stroke-opacity="1" stroke-width="1px"></circle>' +
        '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
        '</svg></span>'
      );
    },
  },
  keyboard: {
    enabled: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
    },
  },
};

watch([mainSwiper, childSwiper], () => {
  if (mainSwiper.value && childSwiper.value) {
    mainSwiper.value.on('slideChangeTransitionStart', function () {
      childSwiper.value.slideTo(mainSwiper.value.activeIndex);
    });
    childSwiper.value.on('transitionStart', function () {
      mainSwiper.value.slideTo(childSwiper.value.activeIndex);
    });
  }
});
</script>
