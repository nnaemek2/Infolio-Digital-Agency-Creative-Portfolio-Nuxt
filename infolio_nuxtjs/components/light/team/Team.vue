<template>
  <section class="team section-padding pb-60">
    <div class="container">
      <div class="row">
        <div v-for="(item, i) in data" :key="i" class="col-lg-4">
          <div class="item mb-80">
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
