<template>
  <section class="faqs section-padding position-re">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-4">
          <div class="sec-head md-mb80">
            <h6 class="sub-title main-color mb-15">FAQS</h6>
            <h2>
              Frequently <br />
              asked questions
            </h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="list-serv">
            <div class="accordion bord">
              <div class="item mb-15 wow fadeInUp" data-wow-delay=".1s">
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

              <div class="item active mb-15 wow fadeInUp" data-wow-delay=".3s">
                <div @click="openAccordion" class="title">
                  <h6>Talented, Professional & Expert Team</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="mb-30">
                    Taken possession of my entire soul, like these sweet
                    mornings of spring which i enjoy with my whole.
                  </p>
                  <p class="mb-10">
                    Taken possession of my entire soul, like these sweet
                    mornings of spring which i enjoy with my whole.
                  </p>
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
    <div class="line-overlay up opacity-7">
      <svg
        viewBox="0 0 1728 1101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
          style="stroke-dasharray: 3246.53, 0"
        ></path>
      </svg>
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
