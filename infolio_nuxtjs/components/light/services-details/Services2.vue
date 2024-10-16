<template>
  <section class="services section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Our Specialize</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600">
            What We Have <span class="fw-200">to Offer</span>
          </h2>
          <div class="ml-auto">
            <a href="/light/page-services" class="go-more">
              <span class="text">View all services</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, i) in data.slice(0, 3)" :key="i" class="col-lg-4">
          <div class="item-box radius-15 md-mb30">
            <div class="icon mb-40 opacity-5">
              <img :src="item.img" alt="" />
            </div>
            <h5 class="mb-15">{{ item.title }}</h5>
            <p>{{ item.desc }}</p>
            <a :href="item.link" class="rmore mt-30">
              <span class="sub-title">Read More</span>
              <img
                src="/light/assets/imgs/arrow-right.png"
                alt=""
                class="icon-img-20 ml-5"
              />
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
