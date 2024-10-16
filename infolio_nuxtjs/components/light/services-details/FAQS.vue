<template>
  <section class="faqs section-padding pt-0">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5 valign">
          <div class="faq-img md-mb50">
            <img src="/light/assets/imgs/intro/03.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="full-width">
            <div class="sec-head mb-50">
              <h6 class="sub-title main-color mb-15">FAQS</h6>
              <h3>Frequently asked questions</h3>
            </div>
            <div class="list-serv">
              <div class="accordion bord">
                <div
                  class="item active mb-15 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div @click="openAccordion" class="title">
                    <h6>Designing Content With AI Power</h6>
                    <span class="ico ti-plus"></span>
                  </div>
                  <div class="accordion-info">
                    <p class="">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
                    </p>
                  </div>
                </div>

                <div class="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div @click="openAccordion" class="title">
                    <h6>Talented, Professional & Expert Team</h6>
                    <span class="ico ti-plus"></span>
                  </div>
                  <div class="accordion-info">
                    <p class="">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
                    </p>
                  </div>
                </div>

                <div class="item wow fadeInUp" data-wow-delay=".5s">
                  <div @click="openAccordion" class="title">
                    <h6>We Build and Activate Brands</h6>
                    <span class="ico ti-plus"></span>
                  </div>
                  <div class="accordion-info">
                    <p class="">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
                    </p>
                  </div>
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
function openAccordion(event) {
  document.querySelectorAll('.accordion-info').forEach((element) => {
    element.classList.remove('active');
    element.style.maxHeight = 0;
    element.parentElement.classList.remove('active');
  });
  event.currentTarget.parentElement.classList.add('active');
  event.currentTarget.nextElementSibling.style.maxHeight = '300px';
  event.currentTarget.nextElementSibling.classList.add('active');
}
</script>
