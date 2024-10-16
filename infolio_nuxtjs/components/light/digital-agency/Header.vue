<template>
  <header
    class="digital-header bg-img"
    data-background="/light/assets/imgs/background/8.jpg"
    data-overlay-dark="4"
  >
    <div class="container-fluid rest">
      <div class="row justify-content-end">
        <div class="col-lg-9 rest">
          <div class="caption">
            <h1>Building digital products, brands & experience.</h1>

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
          </div>
        </div>
      </div>
    </div>
    <div class="text-info">
      <p>
        We are professional agency <br />
        working with heart from 2018
      </p>

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
    </div>
  </header>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
