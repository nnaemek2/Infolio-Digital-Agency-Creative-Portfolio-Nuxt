<template>
  <section class="services section-padding pb-0">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Our Specialize</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 text-u ls1">
            What We <span class="fw-200">Offer</span>
          </h2>
          <div class="ml-auto">
            <a href="/light/page-services2" class="go-more">
              <span class="text">View all services</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, i) in data" :key="i" class="col-md-6">
          <div class="item-box2 mb-30">
            <div class="icon mb-40">
              <img :src="item.img" alt="" />
            </div>
            <h5 class="mb-15">{{ item.title }}</h5>
            <p>{{ item.desc }}</p>
            <a :href="item.link" class="rmore">
              <div class="arrow">
                <img
                  src="/light/assets/imgs/arrow-right.png"
                  alt=""
                  class="icon-img-20"
                />
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
                    fill="#1a1a1a"
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
                    fill="#1a1a1a"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import data from '@/l-data/services.json';
</script>
