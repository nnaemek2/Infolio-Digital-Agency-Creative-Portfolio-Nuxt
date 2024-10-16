<template>
  <div class="services section-padding bord-thin-top" data-scroll-index="3">
    <div class="sec-head mb-50">
      <h3>My <span class="fw-200">Specializations</span></h3>
    </div>
    <div class="row sm-marg">
      <div v-for="(item, i) in data" :key="i" class="col-md-6">
        <div class="item-box2 mb-10">
          <div>
            <div class="icon mb-40">
              <img :src="item.img" alt="" />
            </div>
          </div>
          <div>
            <h5 class="mb-15">{{ item.title }}</h5>
            <p>{{ item.desc }}</p>
          </div>
          <a :href="item.link" class="rmore">
            <div class="arrow">
              <img
                src="/dark/assets/imgs/arrow-right.png"
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
</template>

<script setup>
import data from '@/data/services.json';
</script>
