<template>
  <section class="page-intro-modern section-padding pt-0">
    <div class="container md-hide">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="row">
            <div class="col-lg-3 valign">
              <div class="img1 fit-img">
                <img src="/dark/assets/imgs/intro/01.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-5">
              <div class="img2 fit-img position-re o-hidden">
                <img
                  src="/dark/assets/imgs/intro/2.jpg"
                  alt=""
                  data-speed="0.2"
                  data-lag="0"
                />
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-end">
              <div class="full-width">
                <div class="img3 fit-img mb-30">
                  <img src="/dark/assets/imgs/intro/02.jpg" alt="" />
                </div>
                <div class="img4 fit-img">
                  <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-100">
      <div class="row justify-content-around">
        <div class="col-lg-5">
          <div class="cont">
            <h4>
              If you’re looking for a specialist to build a meaningful digital
              project you can easily reach us by clicking
              <span class="underline">
                <a href="#0" class="main-color"> here </a>
              </span>
            </h4>
            <div class="exp mt-80 md-mb15">
              <h2 class="fz-70">
                28
                <span class="sub-title main-font opacity-7 ml-15">
                  Years of Experience
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div class="col-lg-5 valign">
          <div class="full-width">
            <div class="text">
              <p>
                Whether you are a development agency looking to outsource design
                work, a company in search of a Product Designer or Product Team,
                a marketing agency that needs.
              </p>
            </div>
            <div class="mt-50">
              <div class="skills-box">
                <div class="skill-item mb-40">
                  <h5 class="sub-title mb-15">UI / UX Design</h5>
                  <div class="skill-progress">
                    <div class="progres" data-value="90%"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <h5 class="sub-title mb-15">Apps Development</h5>
                  <div class="skill-progress">
                    <div class="progres" data-value="80%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line-overlay">
      <svg
        viewBox="0 0 1728 1101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
          style="stroke-dasharray: 3246.53, 0"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import isInView from '@/common/isInView';

function handleShowProgressValues() {
  isInView({
    selector: '.skill-progress .progres',
    isElements: true,
    callback: (element) => {
      element.style.width = element.getAttribute('data-value');
    },
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleShowProgressValues);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleShowProgressValues);
});
</script>
