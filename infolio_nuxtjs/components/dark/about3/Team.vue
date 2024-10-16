<template>
  <section class="team-tab bord-thin-bottom bord-thin-top">
    <div class="container-fluid rest">
      <div class="sec-head pb-30 pt-20 bord-thin-bottom">
        <div class="main-marq xlrg o-hidden">
          <div class="slide-har st1">
            <div class="box">
              <div class="item">
                <h4 class="d-flex align-items-center">
                  <span>Meet Our Team</span>
                  <span class="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div class="item">
                <h4 class="d-flex align-items-center">
                  <span>Meet Our Team</span>
                  <span class="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div class="item">
                <h4 class="d-flex align-items-center">
                  <span>Meet Our Team</span>
                  <span class="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div class="item">
                <h4 class="d-flex align-items-center">
                  <span>Meet Our Team</span>
                  <span class="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div class="item">
                <h4 class="d-flex align-items-center">
                  <span>Meet Our Team</span>
                  <span class="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
            </div>
            <div class="box">
              <div class="item">
                <h4 class="d-flex align-items-center">
                  <span>Meet Our Team</span>
                  <span class="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div class="item">
                <h4 class="d-flex align-items-center">
                  <span>Meet Our Team</span>
                  <span class="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div class="item">
                <h4 class="d-flex align-items-center">
                  <span>Meet Our Team</span>
                  <span class="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div class="item">
                <h4 class="d-flex align-items-center">
                  <span>Meet Our Team</span>
                  <span class="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div class="item">
                <h4 class="d-flex align-items-center">
                  <span>Meet Our Team</span>
                  <span class="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 rest">
          <div class="glry-img">
            <div
              id="tab-1"
              class="bg-img tab-img current"
              data-background="/dark/assets/imgs/team/1.jpg"
            ></div>
            <div
              id="tab-2"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/team/2.jpg"
            ></div>
            <div
              id="tab-3"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/team/3.jpg"
            ></div>
            <div
              id="tab-4"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/team/4.jpg"
            ></div>
            <div
              id="tab-5"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/team/3.jpg"
            ></div>
          </div>
        </div>
        <div class="col-lg-7 rest content">
          <div class="cluom current" data-tab="tab-1">
            <div class="info">
              <h6 class="sub-title opacity-7">Web Designer</h6>
              <h4>Robert De Niro</h4>
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/dark/page-team-single">
                View More <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>
          <div class="cluom" data-tab="tab-2">
            <div class="info">
              <h6 class="sub-title opacity-7">Project Manager</h6>
              <h4>Brendan Fraser</h4>
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/dark/page-team-single">
                View More <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>
          <div class="cluom" data-tab="tab-3">
            <div class="info">
              <h6 class="sub-title opacity-7">Web Developer</h6>
              <h4>Brendan Fraser</h4>
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/dark/page-team-single">
                View More <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>
          <div class="cluom" data-tab="tab-4">
            <div class="info">
              <h6 class="sub-title opacity-7">UI-UX Designer</h6>
              <h4>Brendan Fraser</h4>
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/dark/page-team-single">
                View More <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>
          <div class="cluom" data-tab="tab-5">
            <div class="info">
              <h6 class="sub-title opacity-7">SEO Manager</h6>
              <h4>Brendan Fraser</h4>
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/dark/page-team-single">
                View More <i class="ml-15 ti-arrow-top-right"></i>
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
</script>
