<template>
  <section class="work-minimal section-padding sub-bg">
    <div class="container-xxl">
      <div class="row">
        <div class="filtering col-12 mb-50 text-center">
          <div class="filter">
            <span class="text">Filter By :</span>
            <span data-filter="*" class="active"> Show All </span>
            <span data-filter=".art">Art</span>
            <span data-filter=".brand">Branding</span>
            <span data-filter=".design">Design</span>
            <span data-filter=".marketing">Marketing</span>
          </div>
        </div>
      </div>
      <div class="gallery2 row sm-marg">
        <div class="col-lg-6 items design brand">
          <div class="item mt-10">
            <div class="img">
              <img src="/light/assets/imgs/works/4/h1.jpg" alt="" />
              <div class="cont inline d-flex align-items-center">
                <div>
                  <h5>
                    <a href="/light/project3">Nice guy with a smile</a>
                  </h5>
                </div>
                <div class="ml-auto">
                  <p>
                    <a href="/light/portfolio-standard">Graphic Designing</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 items width2 brand marketing">
          <div class="item mt-10">
            <div class="img">
              <img src="/light/assets/imgs/works/4/1.jpg" alt="" />
              <div class="cont">
                <h5>
                  <a href="/light/project3">A Nice guy</a>
                </h5>
                <p>
                  <a href="/light/portfolio-standard">Graphic Design</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 items width2 art design">
          <div class="item mt-10">
            <div class="img">
              <img src="/light/assets/imgs/works/4/2.jpg" alt="" />
              <div class="cont">
                <h5>
                  <a href="/light/project3">A Nice guy</a>
                </h5>
                <p>
                  <a href="/light/portfolio-standard">Graphic Design</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 items width2 brand">
          <div class="item mt-10">
            <div class="img">
              <img src="/light/assets/imgs/works/4/3.jpg" alt="" />
              <div class="cont">
                <h5>
                  <a href="/light/project3">A Nice guy</a>
                </h5>
                <p>
                  <a href="/light/portfolio-standard">Graphic Design</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 items width2 design">
          <div class="item mt-10">
            <div class="img">
              <img src="/light/assets/imgs/works/4/4.jpg" alt="" />
              <div class="cont">
                <h5>
                  <a href="/light/project3">A Nice guy</a>
                </h5>
                <p>
                  <a href="/light/portfolio-standard">Graphic Design</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 items art marketing">
          <div class="item mt-10">
            <div class="img">
              <img src="/light/assets/imgs/works/4/h2.jpg" alt="" />
              <div class="cont inline d-flex align-items-center">
                <div>
                  <h5>
                    <a href="/light/project3">Nice guy with a smile</a>
                  </h5>
                </div>
                <div class="ml-auto">
                  <p>
                    <a href="/light/portfolio-standard">Graphic Designing</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 items design marketing">
          <div class="item mt-10">
            <div class="img">
              <img src="/light/assets/imgs/works/4/h3.jpg" alt="" />
              <div class="cont inline d-flex align-items-center">
                <div>
                  <h5>
                    <a href="/light/project3">Nice guy with a smile</a>
                  </h5>
                </div>
                <div class="ml-auto">
                  <p>
                    <a href="/light/portfolio-standard">Graphic Designing</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 items">
          <div class="item mt-10">
            <div class="img">
              <img src="/light/assets/imgs/works/4/h4.jpg" alt="" />
              <div class="cont inline d-flex align-items-center">
                <div>
                  <h5>
                    <a href="/light/project3">Nice guy with a smile</a>
                  </h5>
                </div>
                <div class="ml-auto">
                  <p>
                    <a href="/light/portfolio-standard">Graphic Designing</a>
                  </p>
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
import initIsotope2 from '@/common/initIsotope2';
onMounted(() => {
  initIsotope2();
});
</script>
