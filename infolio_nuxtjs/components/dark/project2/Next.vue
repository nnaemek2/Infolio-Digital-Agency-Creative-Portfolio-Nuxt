<template>
  <section class="next-project sub-bg">
    <div class="container-fluid rest">
      <div class="row">
        <div class="col-md-6 rest">
          <div
            class="text-left box bg-img"
            data-background="/dark/assets/imgs/works/projects/2/1.jpg"
          >
            <div class="cont d-flex align-items-center">
              <div>
                <span class="mr-30 fz-30 ti-arrow-left"></span>
              </div>
              <div>
                <h6 class="sub-title fz-16 mb-5">Prev Project</h6>
                <a href="/dark/project2" class="fz-40 fw-600 stroke">
                  OPT Media Agency
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 rest">
          <div
            class="text-right d-flex box bg-img"
            data-background="/dark/assets/imgs/works/projects/4/1.jpg"
          >
            <div class="ml-auto">
              <div class="cont d-flex align-items-center">
                <div>
                  <h6 class="sub-title fz-16 mb-5">Next Project</h6>
                  <a href="/dark/project2" class="fz-40 fw-600 stroke">
                    TH3 Web Design
                  </a>
                </div>
                <div>
                  <span class="ml-30 fz-30 ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <a href="#0" class="all-works-butn text-center">
        <span class="ti-view-grid fz-24 mb-10"></span>
        <span class="d-block fz-12 text-u ls1">all Projects</span>
      </a>
    </div>
  </section>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
