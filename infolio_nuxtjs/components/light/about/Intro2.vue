<template>
  <section class="page-intro-cerv section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 bord-thin-right rest">
          <div class="row justify-content-end rest">
            <div class="col-md-5 rest">
              <div class="cont">
                <div class="mb-40">
                  <h2 class="fz-100 numb-font">1.</h2>
                </div>
                <h4>Our Mission</h4>
                <div class="text mt-30">
                  <p>
                    Our journey is defined by a rich tapestry of achievements
                    and values that set us apart.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-5 rest">
              <div class="img fit-img bord-thin-left">
                <img src="/light/assets/imgs/intro/02.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="row justify-content-end bord-thin-top rest">
            <div class="col-md-5 rest">
              <div class="img fit-img">
                <img src="/light/assets/imgs/intro/03.jpg" alt="" />
              </div>
            </div>
            <div class="col-md-5 rest">
              <div class="cont bord-thin-left">
                <div class="mb-40">
                  <h2 class="fz-100 numb-font">2.</h2>
                </div>
                <h4>Our Vision</h4>
                <div class="text mt-30">
                  <p>
                    Our journey is defined by a rich tapestry of achievements
                    and values that set us apart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 rest">
          <div class="bord-thin-top mt-100 position-re">
            <div class="row">
              <div class="col-md-11">
                <div class="cont">
                  <div class="mb-40">
                    <h2 class="fz-100 numb-font">3.</h2>
                  </div>
                  <h4>Why Us?</h4>
                  <div class="text mt-30">
                    <p>
                      Our journey is defined by a rich tapestry of achievements
                      and values that set us apart.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-dots bg-img"
              data-background="/light/assets/imgs/patterns/dots.png"
            ></div>
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
