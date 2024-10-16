<template>
  <section class="work-outline">
    <div class="container-fluid rest">
      <div class="row">
        <div v-for="(item, i) in data" :key="i" class="col-lg-4 col-md-6 items">
          <div class="item">
            <div class="img">
              <img :src="item.img" alt="" />
            </div>
            <div class="cont mt-20">
              <h5 class="fz-22">
                <a :href="item.link">{{ item.title }}</a>
              </h5>
              <p>
                <a href="/light/portfolio-outline">
                  {{ item.subTitle.split(' ')[0] }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import data from '@/l-data/portfolios/workstand';
</script>
