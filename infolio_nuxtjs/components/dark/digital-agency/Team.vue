<template>
  <section class="team section-padding pt-0">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Our Team</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600">Meet our <span class="fw-200">legends</span></h2>
          <div class="ml-auto">
            <a href="/dark/page-team" class="go-more">
              <span class="text">Join to us</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
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
import data from '@/data/team.json';
</script>
