<template>
  <section class="services-tab section-padding mb-80">
    <div class="container">
      <div class="row lg-marg" id="tabs">
        <div class="col-lg-6 valign">
          <div class="serv-tab-cont md-mb80">
            <div class="tab-content current" id="tabs-1">
              <div class="item">
                <div class="img">
                  <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img src="/dark/assets/imgs/serv-icons/0.png" alt="" />
                  </div>
                  <div class="text">
                    <p>
                      We are a creative studio specializing in design,
                      development and strategy many different skills and
                      disciplines in the production of all web.
                    </p>
                  </div>
                  <a href="/dark/page-services" class="mt-30">
                    <span class="mr-15">Read More</span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="tab-content" id="tabs-2">
              <div class="item">
                <div class="img">
                  <img src="/dark/assets/imgs/intro/02.jpg" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img src="/dark/assets/imgs/serv-icons/1.png" alt="" />
                  </div>
                  <div class="text">
                    <p>
                      We are a creative studio specializing in design,
                      development and strategy many different skills and
                      disciplines in the production of all web.
                    </p>
                  </div>
                  <a href="/dark/page-services" class="mt-30">
                    <span class="mr-15">Read More</span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="tab-content" id="tabs-3">
              <div class="item">
                <div class="img">
                  <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img src="/dark/assets/imgs/serv-icons/2.png" alt="" />
                  </div>
                  <div class="text">
                    <p>
                      We are a creative studio specializing in design,
                      development and strategy many different skills and
                      disciplines in the production of all web.
                    </p>
                  </div>
                  <a href="/dark/page-services" class="mt-30">
                    <span class="mr-15">Read More</span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="tab-content" id="tabs-4">
              <div class="item">
                <div class="img">
                  <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img src="/dark/assets/imgs/serv-icons/0.png" alt="" />
                  </div>
                  <div class="text">
                    <p>
                      We are a creative studio specializing in design,
                      development and strategy many different skills and
                      disciplines in the production of all web.
                    </p>
                  </div>
                  <a href="/dark/page-services" class="mt-30">
                    <span class="mr-15">Read More</span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="serv-tab-link tab-links full-width pt-40">
            <div class="sec-head mb-30">
              <h6 class="sub-title mb-15 main-color">What we do?</h6>
              <h2>The ultmiate guide to marketing success.</h2>
            </div>
            <div class="row justify-content-end">
              <div class="col-lg-11">
                <div class="text mb-50">
                  <p>
                    We shifted our talents to frontier science because we wanted
                    our work to have tangible. we get front row seats to the
                    future.
                  </p>
                </div>
                <ul class="rest">
                  <li
                    @click="openTab"
                    class="item-link current mb-15"
                    data-tab="tabs-1"
                  >
                    <h4>
                      <span class="fz-18 opacity-7 mr-15">01</span> UI-UX Design
                    </h4>
                  </li>
                  <li
                    @click="openTab"
                    class="item-link mb-15"
                    data-tab="tabs-2"
                  >
                    <h4>
                      <span class="fz-18 opacity-7 mr-15">02</span> Web
                      Development
                    </h4>
                  </li>
                  <li
                    @click="openTab"
                    class="item-link mb-15"
                    data-tab="tabs-3"
                  >
                    <h4>
                      <span class="fz-18 opacity-7 mr-15">03</span>
                      Digital Marketing
                    </h4>
                  </li>
                  <li @click="openTab" class="item-link" data-tab="tabs-4">
                    <h4>
                      <span class="fz-18 opacity-7 mr-15">04</span>
                      Product Design
                    </h4>
                  </li>
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
const openTab = (event) => {
  document
    .querySelectorAll('.tab-content')
    .forEach((element) => (element.style.display = 'none'));
  const tabid = event.currentTarget.getAttribute('data-tab');
  document.querySelector(`.tab-content#${tabid}`).style.display = 'block';
};
</script>
