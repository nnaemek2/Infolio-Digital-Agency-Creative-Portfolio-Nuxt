<template>
  <section
    class="testimonials-crev section-padding pb-0 bg-img"
    data-background="/light/assets/imgs/background/2.jpg"
    data-overlay-dark="5"
  >
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-10">
          <div class="sec-head mb-80">
            <h2 class="fw-600 fz-70">
              What <br />
              People <span class="fw-200">Say?</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-11 position-re">
          <div class="testim-swiper testim1">
            <Swiper
              id="content-carousel-container-unq-testim"
              class="swiper-container"
              data-swiper="container"
              v-bind="swiperOptions"
            >
              <SwiperSlide v-for="(item, i) in data" :key="i">
                <div class="item d-flex align-items-center">
                  <div>
                    <div class="fit-img circle">
                      <img :src="item.img" alt="" />
                    </div>
                  </div>
                  <div class="content ml-100">
                    <div class="text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="256.721"
                        height="208.227"
                        viewBox="0 0 256.721 208.227"
                        id="null"
                        class="qout-svg"
                      >
                        <path
                          id="Path_76570"
                          data-name="Path 76570"
                          d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                          transform="translate(121.55 640.568)"
                          fill="none"
                          stroke="#fff"
                          stroke-width="1"
                          opacity="0.322"
                        ></path>
                      </svg>
                      <h4>{{ item.desc }}</h4>
                    </div>
                    <div
                      class="info d-flex align-items-center pt-40 mt-40 bord-thin-top"
                    >
                      <div>
                        <h5>{{ item.name }}</h5>
                        <span class="sub-title main-color">
                          {{ item.subName }}
                        </span>
                      </div>
                      <div class="ml-auto">
                        <div class="rate-stars fz-14">
                          <span class="rate main-color">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </span>
                        </div>
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
import loadBackgroudImages from '@/common/loadBackgroudImages';
const swiperOptions = {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-arrow-control .swiper-button-next',
    nextEl: '.swiper-arrow-control .swiper-button-prev',
  },
  spaceBetween: 30,
  loop: true,
};

onMounted(() => {
  loadBackgroudImages();
});
</script>
