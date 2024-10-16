<template>
  <header class="blog-header section-padding pb-0">
    <div class="container mt-80">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="caption">
            <div class="sub-title fz-12">
              <a href="#0">
                <span>Design , </span>
              </a>
              <a href="#0">
                <span>Development</span>
              </a>
            </div>
            <h1 class="fz-55 mt-30">
              Network of wormholes colonies extraordinary claims require.
            </h1>
          </div>
          <div class="info d-flex mt-40 align-items-center">
            <div class="left-info">
              <div class="d-flex align-items-center">
                <div class="author-info">
                  <div class="d-flex align-items-center">
                    <a href="#0" class="circle-60">
                      <img
                        src="/dark/assets/imgs/blog/author.png"
                        alt=""
                        class="circle-img"
                      />
                    </a>
                    <a href="#0" class="ml-20">
                      <span class="opacity-7">Author</span>
                      <h6 class="fz-16">UiCamp</h6>
                    </a>
                  </div>
                </div>
                <div class="date ml-50">
                  <a href="#0">
                    <span class="opacity-7">Published</span>
                    <h6 class="fz-16">August 6, 2021</h6>
                  </a>
                </div>
              </div>
            </div>
            <div class="right-info ml-auto">
              <div>
                <span class="pe-7s-comment fz-18 mr-10"></span>
                <span class="opacity-7">02 Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="background bg-img mt-80"
      data-background="/dark/assets/imgs/blog/b1.jpg"
    ></div>
  </header>
</template>
<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
