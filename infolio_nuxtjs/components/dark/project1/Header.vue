<template>
  <header class="header-project1">
    <div class="container pt-100">
      <div class="row align-items-end">
        <div class="col-lg-8 md-mb50">
          <div>
            <h1 class="fz-100">
              Fleck <br />
              Product Design
            </h1>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="info">
            <div class="row">
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">Category :</span>
                  <h6>Development</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">Client :</span>
                  <h6>Envato</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">Start Date :</span>
                  <h6>7 August 2021</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <span class="opacity-8 mb-5">Designer :</span>
                  <h6>UiCamp</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-img mt-100"
      data-background="/dark/assets/imgs/works/projects/0/1.jpg"
    ></div>
  </header>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
