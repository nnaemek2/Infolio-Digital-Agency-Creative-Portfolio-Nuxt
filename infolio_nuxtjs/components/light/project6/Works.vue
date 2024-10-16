<template>
  <section class="section-padding pt-0">
    <div class="container-xl">
      <div class="row lg-marg">
        <div class="col-lg-6">
          <div class="imgs md-mb80">
            <div class="mb-30">
              <img src="/light/assets/imgs/works/projects/4/1.jpg" alt="" />
            </div>
            <div class="mb-30">
              <img src="/light/assets/imgs/works/projects/4/2.jpg" alt="" />
            </div>
            <div>
              <img src="/light/assets/imgs/works/projects/4/3.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="sticky_item">
            <div class="text">
              <h2 class="mb-30">The Challenge</h2>
              <h5 class="mb-30 line-height-40">
                The goal is there are many variations of passages of but the
                majority have suffered alteration in some form, by injected
                humour, or randomised words which don&apos;t look even slightly
                believable.
              </h5>
              <p class="fz-18">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
            </div>
            <div class="info pt-80 mt-80 bord-thin-top">
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
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

function stuck() {
  const sticky_item = document.querySelector('sticky_item');

  console.log(sticky_item);
}
onMounted(() => {
  stuck();
});
</script>
