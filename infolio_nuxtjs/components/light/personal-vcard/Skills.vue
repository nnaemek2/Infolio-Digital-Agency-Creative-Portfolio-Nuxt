<template>
  <div class="my-skills section-padding bord-thin-top" data-scroll-index="1">
    <div class="sec-head mb-50">
      <h3>My <span class="fw-200">Skills</span></h3>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="item mb-30">
          <div class="d-flex align-items-center mb-30">
            <div class="mr-30">
              <div class="img icon-img-40">
                <img src="/light/assets/imgs/resume/s1.png" alt="" />
              </div>
            </div>
            <div>
              <h6 class="fz-18">UI / UX Design</h6>
            </div>
          </div>
          <div class="skill-progress">
            <span class="progres" data-value="95%"></span>
          </div>
          <span class="value">95%</span>
        </div>
      </div>
      <div class="col-md-6">
        <div class="item mb-30">
          <div class="d-flex align-items-center mb-30">
            <div class="mr-30">
              <div class="img icon-img-40">
                <img src="/light/assets/imgs/resume/s2.png" alt="" />
              </div>
            </div>
            <div>
              <h6 class="fz-18">Development</h6>
            </div>
          </div>
          <div class="skill-progress">
            <span class="progres" data-value="90%"></span>
          </div>
          <span class="value">90%</span>
        </div>
      </div>
      <div class="col-md-6">
        <div class="item sm-mb30">
          <div class="d-flex align-items-center mb-30">
            <div class="mr-30">
              <div class="img icon-img-40">
                <img src="/light/assets/imgs/resume/s3.png" alt="" />
              </div>
            </div>
            <div>
              <h6 class="fz-18">Graphic Design</h6>
            </div>
          </div>
          <div class="skill-progress">
            <span class="progres" data-value="85%"></span>
          </div>
          <span class="value">85%</span>
        </div>
      </div>
      <div class="col-md-6">
        <div class="item">
          <div class="d-flex align-items-center mb-30">
            <div class="mr-30">
              <div class="img icon-img-40">
                <img src="/light/assets/imgs/resume/s4.png" alt="" />
              </div>
            </div>
            <div>
              <h6 class="fz-18">WordPress</h6>
            </div>
          </div>
          <div class="skill-progress">
            <span class="progres" data-value="78%"></span>
          </div>
          <span class="value">78%</span>
        </div>
      </div>
    </div>
  </div>
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
