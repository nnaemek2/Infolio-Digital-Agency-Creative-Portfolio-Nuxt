<template>
  <section
    class="main-feat section-padding bg-img"
    data-background="/light/assets/imgs/header/bg-4.png"
    data-overlay-dark="9"
  >
    <div class="container">
      <div class="sec-head mb-80">
        <div class="row justify-content-between">
          <div class="col-lg-6 md-mb50">
            <h6 class="sub-title main-color mb-15">Our Services</h6>
            <h2 class="fw-600 fz-70">
              What We Can Do For <span class="fw-300">Our Clients</span>
            </h2>
          </div>
          <div class="col-lg-5 d-flex align-items-end">
            <div class="text full-width pb-40 bord-thin-bottom">
              <p>
                Our design services starts and ends with a best-in-class
                experience strategy that builds brands. Through a process of
                iteration and prototyping design interfaces that bring joy to
                people
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-lg-6">
          <div class="img md-mb50">
            <img
              src="/light/assets/imgs/intro/2.jpg"
              alt=""
              class="radius-15"
            />
          </div>
        </div>
        <div class="col-lg-5">
          <div class="row">
            <div class="col-md-6">
              <div class="item mb-50">
                <h5 class="mb-15">UI-UX Design</h5>
                <ul class="rest dot-list">
                  <li class="mb-10">Website Design</li>
                  <li class="mb-10">UI/UX Design</li>
                  <li class="mb-10">Mobile App Development</li>
                  <li>Animations</li>
                </ul>
              </div>
              <div class="item sm-mb50">
                <h5 class="mb-15">Developments</h5>
                <ul class="rest dot-list">
                  <li class="mb-10">Website Design</li>
                  <li class="mb-10">UI/UX Design</li>
                  <li class="mb-10">Mobile App Development</li>
                  <li>Animations</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="item mb-50">
                <h5 class="mb-15">Product Design</h5>
                <ul class="rest dot-list">
                  <li class="mb-10">Website Design</li>
                  <li class="mb-10">UI/UX Design</li>
                  <li class="mb-10">Mobile App Development</li>
                  <li>Animations</li>
                </ul>
              </div>
              <div class="item">
                <h5 class="mb-15">Content</h5>
                <ul class="rest dot-list">
                  <li class="mb-10">Website Design</li>
                  <li class="mb-10">UI/UX Design</li>
                  <li class="mb-10">Mobile App Development</li>
                  <li>Animations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
