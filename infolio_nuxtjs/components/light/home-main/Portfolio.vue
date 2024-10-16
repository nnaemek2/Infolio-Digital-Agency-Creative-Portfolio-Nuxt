<template>
  <section class="inter-fixed-text section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Our Portfolio</h6>
        <div class="bord pt-25 bord-thin-top d-flex justify-content-end">
          <h2 class="fw-600 d-rotate wow">
            <span class="rotate-text">
              Our featured <span class="fw-200">projects</span>
            </span>
          </h2>
        </div>
      </div>
    </div>
    <div class="container position-re">
      <div class="links-img">
        <div class="row">
          <div class="col-lg-4 items">
            <div class="item">
              <div
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                class="img"
                data-tab="tab-1"
              >
                <img src="/light/assets/imgs/works/1/1.jpg" alt="" />
                <a href="/light/project1" class="link-overlay"></a>
              </div>
              <div class="cont">
                <span class="tag">Branding</span>
                <h2>Earthmade Aroma</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-4 items">
            <div class="item">
              <div
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                class="img"
                data-tab="tab-2"
              >
                <img src="/light/assets/imgs/works/1/2.jpg" alt="" />
                <a href="/light/project2" class="link-overlay"></a>
              </div>
              <div class="cont">
                <span class="tag">Branding</span>
                <h2>Blom Air Purifier</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-4 items">
            <div class="item">
              <div
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                class="img"
                data-tab="tab-3"
              >
                <img src="/light/assets/imgs/works/1/3.jpg" alt="" />
                <a href="/light/project3" class="link-overlay"></a>
              </div>
              <div class="cont">
                <span class="tag">Branding</span>
                <h2>Bank Rebranding</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="links-text">
        <ul class="rest">
          <li id="tab-1">
            <span class="tag">Branding</span>
            <h2>Earthmade Aroma</h2>
          </li>
          <li id="tab-2">
            <span class="tag">Branding</span>
            <h2>Blom Air Purifier</h2>
          </li>
          <li id="tab-3">
            <span class="tag">Branding</span>
            <h2>Bank Rebranding</h2>
          </li>
        </ul>
      </div>
    </div>
    <div class="container mt-40">
      <div class="sec-bottom mt-100">
        <div class="main-bg d-flex align-items-center">
          <p>Here are some select projects that showcase.</p>
          <a
            href="/light/portfolio-metro"
            class="butn main-color ml-40 underline"
          >
            <span>View All</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
function handleMouseEnter(event) {
  var tab_id = event.currentTarget.getAttribute('data-tab');

  document.querySelectorAll('.links-text li').forEach((el) => {
    el.classList.remove('current');
    // el.classList.add('no-active');
  });
  document.querySelectorAll('.links-img .img').forEach((el) => {
    el.classList.remove('current');
    // el.classList.add('no-active');
  });
  event.currentTarget.classList.add('current');
  // event.currentTarget.classList.remove('no-active');

  document
    .querySelectorAll('.links-img .img')
    .forEach((el) => el.classList.remove('current'));
  document.querySelector('#' + tab_id).classList.add('current');

  if (event.currentTarget.classList.contains('current')) return false;
}

function handleMouseLeave() {
  document
    .querySelectorAll('.links-img .img')
    .forEach((el) => el.classList.remove('current'));
  document
    .querySelectorAll('.links-text li')
    .forEach((el) => el.classList.remove('current'));
}
</script>
