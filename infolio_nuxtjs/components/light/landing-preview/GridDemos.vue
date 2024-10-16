<template>
  <section class="demos section-padding pt-80 sub-bg2" data-scroll-index="0">
    <div class="container-xxl">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">
          Create a Professional Website!
        </h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="d-rotate wow md-mb15">
            <span class="rotate-text"
              ><span class="spc-font">20+ pre-made </span>
              <span> Home Pages.</span></span
            >
          </h2>
          <div class="ml-auto">
            <!-- filter links -->
            <div class="filtering">
              <div class="filter">
                <span data-filter="*" class="active">All</span>
                <span data-filter=".dark">Dark</span>
                <span data-filter=".light">Light</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery row md-marg">
        <div
          v-for="(demo, index) in demos"
          :key="index"
          :class="`${demo.theme} col-lg-3 col-md-6 items`"
        >
          <div class="item text-center">
            <a :href="demo.link" target="_blank">
              <div class="img">
                <img :src="demo.image" :alt="demo.title" />
              </div>
              <h6 class="mt-15">{{ demo.title }}</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted } from 'vue';
import demos from '/data/Landing/demos';
import initIsotope from '@/common/initIsotope';
onMounted(() => {
  initIsotope();
});
// console.log(initIsotope() == undefined);
</script>
