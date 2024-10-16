<template>
  <section
    class="about-crev section-padding sub-bg position-re ontop"
    data-scroll-index="4"
  >
    <div class="container">
      <div class="row lg-marg">
        <div class="col-lg-6">
          <div class="left-block mt-100 md-mb50">
            <div class="d-flex align-items-center">
              <div>
                <div class="info">
                  <h6>
                    Sam <br />
                    Peterson
                  </h6>
                  <p class="nowrap">Ceo Manager</p>
                </div>
              </div>
              <div>
                <div class="img fit-img radius-30">
                  <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="mz-shap">
              <svg
                height="100%"
                viewBox="0 0 610 547"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z"
                  fill="#1a1a1a"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="content full-width">
            <div class="sec-head mb-30">
              <h6 class="sub-title mb-15 main-color">Our Skills</h6>
              <h2>The ultmiate guide to marketing success.</h2>
            </div>
            <div class="row justify-content-end">
              <div class="col-lg-11">
                <div class="text">
                  <p>
                    We shifted our talents to frontier science because we wanted
                    our work to have tangible, human-positive impact. Also, we
                    get front row seats to the future.
                  </p>
                </div>
                <div class="mt-50">
                  <div class="skills-box">
                    <div class="skill-item mb-40">
                      <h5 class="sub-title mb-15">UI / UX Design</h5>
                      <div class="skill-progress">
                        <div class="progres" data-value="90%"></div>
                      </div>
                    </div>
                    <div class="skill-item">
                      <h5 class="sub-title mb-15">Apps Development</h5>
                      <div class="skill-progress">
                        <div class="progres" data-value="80%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="team section-padding pb-0">
        <div class="row">
          <div class="col-lg-4">
            <div class="item md-mb50">
              <div class="img">
                <img src="/dark/assets/imgs/team/1.jpg" alt="" />
                <div class="info">
                  <span class="fz-12">Web Designer</span>
                  <h6 class="fz-18">Robert De Niro</h6>
                </div>
              </div>
              <div class="social">
                <div class="links">
                  <a href="#0">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0">
                    <i class="fab fa-behance"></i>
                  </a>
                  <a href="#0">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="item md-mb50">
              <div class="img">
                <img src="/dark/assets/imgs/team/2.jpg" alt="" />
                <div class="info">
                  <span class="fz-12">Web Designer</span>
                  <h6 class="fz-18">Brendan Fraser</h6>
                </div>
              </div>
              <div class="social">
                <div class="links">
                  <a href="#0">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0">
                    <i class="fab fa-behance"></i>
                  </a>
                  <a href="#0">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="item">
              <div class="img">
                <img src="/dark/assets/imgs/team/3.jpg" alt="" />
                <div class="info">
                  <span class="fz-12">Web Designer</span>
                  <h6 class="fz-18">Brendan Fraser</h6>
                </div>
              </div>
              <div class="social">
                <div class="links">
                  <a href="#0">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0">
                    <i class="fab fa-behance"></i>
                  </a>
                  <a href="#0">
                    <i class="fab fa-instagram"></i>
                  </a>
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
