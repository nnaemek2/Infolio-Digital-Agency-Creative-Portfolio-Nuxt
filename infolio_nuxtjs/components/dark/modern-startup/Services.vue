<template>
  <section class="services-crev section-padding" data-scroll-index="1">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Our Specialize</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 text-u ls1">
            What We <span class="fw-200"> Offer</span>
          </h2>
          <div class="ml-auto">
            <a href="/dark/page-services" class="go-more">
              <span class="text">View all Services</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, i) in data" :key="i" class="col-lg-6">
          <div class="item-box mb-30">
            <div class="d-flex align-items-end">
              <div>
                <span class="num fz-20">01.</span>
                <div class="icon mr-80">
                  <img :src="item.img" alt="" />
                </div>
              </div>
              <div>
                <h5>{{ item.title }}</h5>
                <div class="text mt-30">
                  <p class="mb-80">{{ item.desc }}</p>
                </div>
                <a :href="item.link">
                  <span>View More</span>
                  <span class="icon ti-arrow-top-right"></span>
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
import data from '@/data/services.json';
</script>
