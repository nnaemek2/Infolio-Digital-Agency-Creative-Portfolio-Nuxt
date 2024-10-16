<template>
  <header class="crev-portfolio-header section-padding position-re">
    <div class="container pt-50 ontop">
      <div class="row">
        <div class="col-lg-10">
          <div class="caption">
            <h1>
              Branding and web design studio, driven by strategy & innovation.
              <span class="underline main-color fz-30">
                <a href="/dark/page-contact2">Contact Us</a>
              </span>
            </h1>
            <div class="row mt-30">
              <div class="col-lg-4">
                <div class="circle-button md-hide">
                  <div class="rotate-circle fz-30 text-u">
                    <svg class="textcircle opacity-7" viewBox="0 0 500 500">
                      <defs>
                        <path
                          id="textcircle"
                          d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                        ></path>
                      </defs>
                      <text>
                        <textPath xlinkHref="#textcircle" textLength="900">
                          Explore More - Explore More -
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <div class="icon">
                    <span class="ti-arrow-down fz-40"></span>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 valign">
                <div class="text">
                  <p class="fz-18">
                    We combine forward-thinking design with modern technology to
                    tell stories that transform and grow our partners brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="numb-fixed d-flex align-items-center">
        <div class="mr-30">
          <h2>54</h2>
          <h6 class="sub-title fw-300 mt-10">Completed Works</h6>
        </div>
        <div>
          <h2>08</h2>
          <h6 class="sub-title fw-300 mt-10">Years Experience</h6>
        </div>
      </div>
    </div>
    <div
      class="bg-pattern bg-img opacity-4"
      data-background="/dark/assets/imgs/patterns/pattern2.png"
    ></div>
  </header>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
