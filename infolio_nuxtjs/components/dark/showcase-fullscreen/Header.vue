<template>
  <header class="header full-showcase">
    <div class="swiper-container parallax-slider">
      <Swiper v-bind="swiperOptions">
        <SwiperSlide>
          <div
            class="bg-img valign"
            data-background="assets/imgs/works/full/1.jpg"
            data-overlay-dark="3"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-11 offset-lg-1">
                  <div class="caption">
                    <h6 class="sub-title mb-30" data-swiper-parallax="-1000">
                      © 2023 <br />
                      Branding
                    </h6>
                    <h1>
                      <a href="/project1">
                        <span data-swiper-parallax="-2000">Retouch Photo</span>
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="bg-img valign"
            data-background="assets/imgs/works/full/2.jpg"
            data-overlay-dark="3"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-11 offset-lg-1">
                  <div class="caption">
                    <h6 class="sub-title mb-30" data-swiper-parallax="-1000">
                      © 2023 <br />
                      Branding
                    </h6>
                    <h1>
                      <a href="/project6">
                        <span data-swiper-parallax="-2000">Earthmade</span>
                        <br />
                        <span data-swiper-parallax="-3000">Aroma box</span>
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

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
import loadBackgroudImages from '@/common/loadBackgroudImages';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Parallax, Pagination, Mousewheel } from 'swiper';
import { onMounted } from 'vue';
onMounted(() => {
  loadBackgroudImages();
});

const swiperOptions = {
  modules: [Navigation, Autoplay, Parallax, Pagination, Mousewheel],
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  mousewheel: true,
  parallax: true,
  loop: true,
  onSwiper(swiper) {
    for (let i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i]
        .querySelector('.bg-img')
        .setAttribute('data-swiper-parallax', 0.75 * swiper.width);
    }
  },
  onResize(swiper) {
    swiper.update();
  },
  pagination: {
    el: '.full-showcase .parallax-slider .swiper-pagination',
    clickable: true,
    renderBullet(_, className) {
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

  navigation: {
    nextEl: '.full-showcase .parallax-slider .swiper-button-next',
    prevEl: '.full-showcase .parallax-slider .swiper-button-prev',
  },
};
</script>
