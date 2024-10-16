<template>
  <div class="works thecontainer ontop">
    <div v-for="(item, i) in data" :key="i" class="panel">
      <div class="item">
        <div class="img">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
  <!-- <Script src="/dark/assets/js/hscroll.js"></Script> -->
</template>
<script setup>
import data from '@/data/portfolios/works0.json';
const handleResize = () => {
  const allTriggers = ScrollTrigger.getAll();
  if (
    (window.innerWidth < 991 && allTriggers.length) ||
    (window.innerWidth > 991 && !allTriggers.length)
  ) {
    window.location.reload();
  }

  allTriggers.forEach((trigger) => {
    trigger.update();
  });
};

// Register the ScrollTrigger plugin and animate on component mount
onMounted(() => {
  if (window.innerWidth > 991) {
    let sections = gsap.utils.toArray('.panel');
    gsap.registerPlugin(ScrollTrigger);
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
  window.addEventListener('resize', handleResize);
});

// Remove the resize event listener on component unmount
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
