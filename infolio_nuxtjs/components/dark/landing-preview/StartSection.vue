<template>
  <section class="works showcases thecontainer ontop sub-bg">
    <div class="text">
      <h2 class="text-bg">Showcases</h2>
    </div>
    <div class="panel">
      <div class="item">
        <div class="img">
          <img src="/landing-preview/img/showcase/1.jpg" alt="" />
        </div>
        <div class="text-center">
          <h5>Fullscreen slider</h5>
        </div>
        <a href="/dark/showcase-fullscreen" class="plink" target="_blank"></a>
      </div>
    </div>

    <div class="panel">
      <div class="item">
        <div class="img">
          <img src="/landing-preview/img/showcase/2.jpg" alt="" />
        </div>
        <div class="text-center">
          <h5>Carousel Showcase</h5>
        </div>
        <a href="/dark/showcase-carousel" class="plink" target="_blank"></a>
      </div>
    </div>

    <div class="panel">
      <div class="item">
        <div class="img">
          <img src="/landing-preview/img/showcase/3.jpg" alt="" />
        </div>
        <div class="text-center">
          <h5>Creative slider</h5>
        </div>
        <a href="/dark/showcase-half-slider" class="plink" target="_blank"></a>
      </div>
    </div>

    <div class="panel">
      <div class="item">
        <div class="img">
          <img src="/landing-preview/img/showcase/4.jpg" alt="" />
        </div>
        <div class="text-center">
          <h5>Interactive Fullscreen</h5>
        </div>
        <a
          href="/dark/showcase-interactive-full"
          class="plink"
          target="_blank"
        ></a>
      </div>
    </div>

    <div class="panel">
      <div class="item">
        <div class="img">
          <img src="/landing-preview/img/showcase/5.jpg" alt="" />
        </div>
        <div class="text-center">
          <h5>Interactive Center</h5>
        </div>
        <a
          href="/dark/showcase-interactive-center"
          class="plink"
          target="_blank"
        ></a>
      </div>
    </div>

    <div class="panel">
      <div class="item">
        <div class="img">
          <img src="/landing-preview/img/showcase/6.jpg" alt="" />
        </div>
        <div class="text-center">
          <h5>Interactive Vertical</h5>
        </div>
        <a
          href="/dark/showcase-interactive-vertical"
          class="plink"
          target="_blank"
        ></a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
onMounted(() => {
  if (window.innerWidth > 991) {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray('.panel');
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.thecontainer',
        pin: true,
        scrub: 1,
        end: () => '+=' + document.querySelector('.thecontainer').offsetWidth,
      },
    });
  }

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  if (
    window.innerWidth < 991 &&
    document.querySelector('.thecontainer').style.maxHeight
  ) {
    location.reload();
  } else if (
    window.innerWidth > 991 &&
    !document.querySelector('.thecontainer').style.maxHeight
  ) {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray('.panel');
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.thecontainer',
        pin: true,
        scrub: 1,
        end: () => '+=' + document.querySelector('.thecontainer')?.offsetWidth,
      },
    });
  }
}
</script>
