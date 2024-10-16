<template>
  <section class="services-dots section-padding sub-bg radius-30 mt-15">
    <div class="container">
      <div class="sec-head text-center mb-80">
        <h6 class="sub-title main-color mb-15">Our Specialize</h6>
        <h2>What We Have to Offer</h2>

        <div class="fixed-head main-bg">
          <h5 class="stroke">Services</h5>

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
      <div class="row xlg-marg ontop">
        <div class="col-lg-4">
          <div class="item md-mb50">
            <h4
              class="bg-img mb-30"
              data-background="/light/assets/imgs/serv-img/1.jpg"
            >
              U
            </h4>
            <h5>UI-UX Design</h5>
            <div class="text mt-15">
              <p class="mb-30">
                Help increase the traffic into your business via marketing
                online & offline.
              </p>
              <ul class="rest dot-list fz-18">
                <li class="mb-10">Website Design</li>
                <li class="mb-10">UI/UX Design</li>
                <li class="mb-10">Mobile App Development</li>
                <li>Animations</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item md-mb50">
            <h4
              class="bg-img mb-30"
              data-background="/light/assets/imgs/serv-img/2.jpg"
            >
              B
            </h4>
            <h5>Brand Strategy</h5>
            <div class="text mt-15">
              <p class="mb-30">
                Help increase the traffic into your business via marketing
                online & offline.
              </p>
              <ul class="rest dot-list fz-18">
                <li class="mb-10">Website Design</li>
                <li class="mb-10">UI/UX Design</li>
                <li class="mb-10">Mobile App Development</li>
                <li>Animations</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item">
            <h4
              class="bg-img mb-30"
              data-background="/light/assets/imgs/serv-img/4.jpg"
            >
              S
            </h4>
            <h5>SEO & Marketing</h5>
            <div class="text mt-15">
              <p class="mb-30">
                Help increase the traffic into your business via marketing
                online & offline.
              </p>
              <ul class="rest dot-list fz-18">
                <li class="mb-10">Website Design</li>
                <li class="mb-10">UI/UX Design</li>
                <li class="mb-10">Mobile App Development</li>
                <li>Animations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
