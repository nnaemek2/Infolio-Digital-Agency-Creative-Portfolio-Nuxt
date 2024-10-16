<template>
  <section class="team section-padding sub-bg radius-30 mt-15">
    <div class="container">
      <div class="sec-head text-center mb-80">
        <h6 class="sub-title main-color mb-15">Our Team</h6>
        <h2>Meet our legends</h2>

        <div class="fixed-head main-bg">
          <h5 class="stroke">Team</h5>

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
      <div class="row">
        <div v-for="(item, i) in data" :key="i" class="col-lg-4">
          <div class="item md-mb50">
            <div class="img">
              <img :src="item.img" alt="" />
              <div class="info">
                <span class="fz-12">{{ item.subName }}</span>
                <h6 class="fz-18">{{ item.name }}</h6>
              </div>
            </div>
            <div class="social">
              <div class="links">
                <a href="#0">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-behance"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/l-data/team.json';
</script>
