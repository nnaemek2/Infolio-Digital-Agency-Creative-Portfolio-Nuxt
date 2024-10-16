<template>
  <div class="clients-carso2">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div
            class="swiper5"
            data-carousel="swiper"
            data-items="5"
            data-loop="true"
            data-space="40"
          >
            <Swiper
              v-bind="swiperOptions"
              id="content-carousel-container-unq-clients"
              class="swiper-container"
              data-swiper="container"
            >
              <SwiperSlide>
                <div class="item">
                  <div class="img icon-img-100">
                    <a href="#0">
                      <img src="/dark/assets/imgs/brands/01.png" alt="" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="item">
                  <div class="img icon-img-100">
                    <a href="#0">
                      <img src="/dark/assets/imgs/brands/02.png" alt="" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="item">
                  <div class="img icon-img-100">
                    <a href="#0">
                      <img src="/dark/assets/imgs/brands/03.png" alt="" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="item">
                  <div class="img icon-img-100">
                    <a href="#0">
                      <img src="/dark/assets/imgs/brands/04.png" alt="" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="item">
                  <div class="img icon-img-100">
                    <a href="#0">
                      <img src="/dark/assets/imgs/brands/05.png" alt="" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
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
