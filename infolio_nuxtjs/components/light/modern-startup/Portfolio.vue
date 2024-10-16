<template>
  <section class="portfolio-tab crev section-padding" data-scroll-index="3">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Our Portfolio</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 text-u ls1">
            Featured <span class="fw-200">projects</span>
          </h2>
          <div class="ml-auto">
            <a href="/light/portfolio-outline" class="go-more">
              <span class="text">View all Works</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 d-flex align-items-center justify-content-center">
          <div class="glry-img">
            <div
              id="tab-1"
              class="bg-img tab-img current"
              data-background="/light/assets/imgs/works/1/1.jpg"
            ></div>
            <div
              id="tab-2"
              class="bg-img tab-img"
              data-background="/light/assets/imgs/works/1/2.jpg"
            ></div>
            <div
              id="tab-3"
              class="bg-img tab-img"
              data-background="/light/assets/imgs/works/1/3.jpg"
            ></div>
            <div
              id="tab-4"
              class="bg-img tab-img"
              data-background="/light/assets/imgs/works/1/4.jpg"
            ></div>
            <div
              id="tab-5"
              class="bg-img tab-img"
              data-background="/light/assets/imgs/works/1/5.jpg"
            ></div>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 content">
          <div
            @mouseenter="handleMouseEnter"
            class="cluom mb-30 current"
            data-tab="tab-1"
          >
            <div class="info">
              <h6 class="sub-title opacity-7">UI-UX Design</h6>
              <h4>Iridescent Wallpapers</h4>
            </div>
            <div class="img">
              <img src="/light/assets/imgs/works/1/1.jpg" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/light/project6">
                View Project <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>
          <div
            @mouseenter="handleMouseEnter"
            class="cluom mb-30"
            data-tab="tab-2"
          >
            <div class="info">
              <h6 class="sub-title opacity-7">UI-UX Design</h6>
              <h4>Proof Template</h4>
            </div>
            <div class="img">
              <img src="/light/assets/imgs/works/1/2.jpg" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/light/project5">
                View Project <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>
          <div
            @mouseenter="handleMouseEnter"
            class="cluom mb-30"
            data-tab="tab-3"
          >
            <div class="info">
              <h6 class="sub-title opacity-7">UI-UX Design</h6>
              <h4>Ledge Phone</h4>
            </div>
            <div class="img">
              <img src="/light/assets/imgs/works/1/3.jpg" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/light/project4">
                View Project <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>
          <div
            @mouseenter="handleMouseEnter"
            class="cluom mb-30"
            data-tab="tab-4"
          >
            <div class="info">
              <h6 class="sub-title opacity-7">UI-UX Design</h6>
              <h4>Frame Sans</h4>
            </div>
            <div class="img">
              <img src="/light/assets/imgs/works/1/4.jpg" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/light/project3">
                View Project <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>
          <div @mouseenter="handleMouseEnter" class="cluom" data-tab="tab-5">
            <div class="info">
              <h6 class="sub-title opacity-7">UI-UX Design</h6>
              <h4>Modern Minimalist</h4>
            </div>
            <div class="img">
              <img src="/light/assets/imgs/works/1/5.jpg" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/light/project2">
                View Project <i class="ml-15 ti-arrow-top-right"></i>
              </a>
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

function handleMouseEnter(event) {
  var tab_id = event.currentTarget.getAttribute('data-tab');

  document.querySelectorAll('.links-text li').forEach((el) => {
    el.classList.remove('current');
    // el.classList.add('no-active');
  });
  event.currentTarget.classList.add('current');
  // event.currentTarget.classList.remove('no-active');

  document
    .querySelectorAll('.glry-img .tab-img')
    .forEach((el) => el.classList.remove('current'));
  document.querySelector('#' + tab_id).classList.add('current');

  if (event.currentTarget.classList.contains('current')) return false;
}

function handleMouseLeave() {
  document
    .querySelectorAll('.glry-img .tab-img')
    .forEach((el) => el.classList.remove('current'));
}
</script>
