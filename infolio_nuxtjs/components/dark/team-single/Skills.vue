<template>
  <section class="skills section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="skil-progs md-mb80">
            <h3>Professionals <span class="fw-300">Skills</span></h3>
            <p class="fz-13 mt-15">
              Similique sunin culpa qui officia deserunt mollitia animi est
              laborum ets dolorum fuga. Et harum quidem rerum facilis esty
              expedita distinctioam nobis est eligendi optio cumquey.
            </p>

            <div class="skill-item mt-50">
              <h6 class="fz-16 mb-10">Product Design</h6>
              <div class="skill-progress">
                <div class="progres" data-value="82%"></div>
              </div>
            </div>
            <div class="skill-item mt-30">
              <h6 class="fz-16 mb-10">Brand Management</h6>
              <div class="skill-progress">
                <div class="progres" data-value="94%"></div>
              </div>
            </div>
            <div class="skill-item mt-30">
              <h6 class="fz-16 mb-10">Growth Analysis</h6>
              <div class="skill-progress">
                <div class="progres" data-value="89%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <div class="resume-exp">
            <h3>Educational <span class="fw-300">Experience</span></h3>
            <p class="fz-13 mt-15">
              Completely evisculates alone expertise through revolutionary
              strategic are theme areas fashion impactful paradigm for process
              centric relation whiteboard seamless capital with methods.
            </p>

            <div class="box-items row mt-50">
              <div class="col-md-6 item">
                <span class="num"> 1 <small>st</small> </span>
                <div class="text-center">
                  <h6 class="fz-16">Business Expert</h6>
                  <span class="opacity-7">2023 - Present(Themes)</span>
                </div>
              </div>
              <div class="col-md-6 item">
                <span class="num"> 2 <small>st</small> </span>
                <div class="text-center">
                  <h6 class="fz-16">Finance Manager</h6>
                  <span class="opacity-7">2020 - Present(Themes)</span>
                </div>
              </div>
              <div class="col-md-6 item">
                <span class="num"> 3 <small>st</small> </span>
                <div class="text-center">
                  <h6 class="fz-16">Senior Designer</h6>
                  <span class="opacity-7">2018 - Present(Themes)</span>
                </div>
              </div>
              <div class="col-md-6 item">
                <span class="num"> 4 <small>st</small> </span>
                <div class="text-center">
                  <h6 class="fz-16">Junior Architect</h6>
                  <span class="opacity-7">2016 - Present(Themes)</span>
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
