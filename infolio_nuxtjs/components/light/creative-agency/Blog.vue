<template>
  <section class="blog-list-crev section-padding sub-bg">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Our Blog</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600">Read Latest <span class="fw-200">News</span></h2>
          <div class="ml-auto">
            <a href="/light/blog-list" class="go-more">
              <span class="text">View all posts</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="item sub-bg2 wow fadeInUp" data-wow-delay=".1s">
        <div class="row">
          <div class="col-lg-3">
            <div class="info md-mb30">
              <div class="d-flex align-items-center">
                <div class="author">
                  <div class="img">
                    <img src="/light/assets/imgs/blog/author.png" alt="" />
                  </div>
                </div>
                <div class="author-info">
                  <span class="fz-13 opacity-8 mb-5">Posted by</span>
                  <h6 class="fz-18">Olivia Rhye</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="cont">
              <h5 class="mb-10 underline">
                <a href="/light/blog-details">
                  The Highly Creative UI/UX Workflow from a Silicon Valley.
                </a>
              </h5>
              <div class="tags">
                <a href="/light/blog-classic">Design</a>
                <a href="/light/blog-classic">Marketing</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 d-flex align-items-center justify-end">
            <div class="ml-auto">
              <span class="date sub-title fz-13 opacity-8 mb-30">
                6 August 2022
              </span>
            </div>
          </div>
        </div>
        <div
          class="background bg-img valign text-center"
          data-background="/light/assets/imgs/blog/blog1.jpg"
          data-overlay-dark="4"
        >
          <div class="more ontop full-width">
            <a href="/light/blog-details">
              <span> Read More <i class="fas fa-arrow-right ml-10"></i> </span>
            </a>
          </div>
        </div>
      </div>
      <div class="item wow fadeInUp" data-wow-delay=".3s">
        <div class="row">
          <div class="col-lg-3">
            <div class="info md-mb30">
              <div class="d-flex align-items-center">
                <div class="author">
                  <div class="img">
                    <img src="/light/assets/imgs/blog/author.png" alt="" />
                  </div>
                </div>
                <div class="author-info">
                  <span class="fz-13 opacity-8 mb-5">Posted by</span>
                  <h6 class="fz-18">Olivia Rhye</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="cont">
              <h5 class="mb-10 underline">
                <a href="/light/blog-details">
                  Creativo Jóvenes: a Lead Designer&#39;s UI/UX Core Checklist.
                </a>
              </h5>
              <div class="tags">
                <a href="/light/blog-classic">Design</a>
                <a href="/light/blog-classic">Marketing</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 d-flex align-items-center justify-end">
            <div class="ml-auto">
              <span class="date sub-title fz-13 opacity-8 mb-30">
                6 August 2022
              </span>
            </div>
          </div>
        </div>
        <div
          class="background bg-img valign text-center"
          data-background="/light/assets/imgs/blog/blog2.jpg"
          data-overlay-dark="4"
        >
          <div class="more ontop full-width">
            <a href="/light/blog-details">
              <span> Read More <i class="fas fa-arrow-right ml-10"></i> </span>
            </a>
          </div>
        </div>
      </div>
      <div class="item sub-bg2 wow fadeInUp" data-wow-delay=".5s">
        <div class="row">
          <div class="col-lg-3">
            <div class="info md-mb30">
              <div class="d-flex align-items-center">
                <div class="author">
                  <div class="img">
                    <img src="/light/assets/imgs/blog/author.png" alt="" />
                  </div>
                </div>
                <div class="author-info">
                  <span class="fz-13 opacity-8 mb-5">Posted by</span>
                  <h6 class="fz-18">Olivia Rhye</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="cont">
              <h5 class="mb-10 underline">
                <a href="/light/blog-details">
                  Definitive Guide to Make a Daily More Productive Working Flow.
                </a>
              </h5>
              <div class="tags">
                <a href="/light/blog-classic">Design</a>
                <a href="/light/blog-classic">Marketing</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 d-flex align-items-center justify-end">
            <div class="ml-auto">
              <span class="date sub-title fz-13 opacity-8 mb-30">
                6 August 2022
              </span>
            </div>
          </div>
        </div>
        <div
          class="background bg-img valign text-center"
          data-background="/light/assets/imgs/blog/blog4.jpg"
          data-overlay-dark="4"
        >
          <div class="more ontop full-width">
            <a href="/light/blog-details">
              <span> Read More <i class="fas fa-arrow-right ml-10"></i> </span>
            </a>
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
