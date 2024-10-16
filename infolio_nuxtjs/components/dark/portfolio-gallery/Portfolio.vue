<template>
  <section class="work-minimal section-padding sub-bg">
    <div class="container-xxl">
      <div class="row">
        <div class="filtering col-12 mb-50 text-center">
          <div class="filter">
            <span class="text">Filter By :</span>
            <span data-filter="*" class="active"> Show All </span>
            <span data-filter=".art">Art</span>
            <span data-filter=".Branding">Branding</span>
            <span data-filter=".design">Design</span>
            <span data-filter=".marketing">Marketing</span>
          </div>
        </div>
      </div>
      <div class="gallery row stand-marg">
        <div
          v-for="(item, i) in data"
          :key="i"
          :class="['col-lg-4', 'col-md-6', 'items', item.subTitle]"
        >
          <div class="item mt-40">
            <div class="img">
              <img :src="item.img" alt="" />
              <div class="cont d-flex align-items-center">
                <div>
                  <h5 class="fz-22">
                    <a :href="item.link">{{ item.title }}</a>
                  </h5>
                  <p>
                    <a :href="item.link">{{ item.subTitle.split(' ')[0] }}</a>
                  </p>
                </div>
                <div class="ml-auto">
                  <a :href="item.link" class="ti-arrow-top-right"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import data from '@/data/portfolios/workstand.json';
import initIsotope from '@/common/initIsotope';
onMounted(() => {
  initIsotope('gallery');
});
</script>
