<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg pt-15">
        <div class="sub-bg radius-30 o-hidden">
          <Header />
          <Portfolio />
        </div>
        <Services />
        <About />
        <Testimonials />
        <Team />
        <Marquee />
        <Blog />
        <Footer />
      </main>
    </div>
  </div>
</template>
<script setup>
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import About from '@/components/light/creative-portfolio/About';
import Blog from '@/components/light/creative-portfolio/Blog';
import Footer from '@/components/light/creative-portfolio/Footer';
import Header from '@/components/light/creative-portfolio/Header';
import Marquee from '@/components/light/creative-portfolio/Marquee';
import Navbar from '@/components/light/creative-portfolio/Navbar';
import Portfolio from '@/components/light/creative-portfolio/Portfolio';
import Services from '@/components/light/creative-portfolio/Services';
import Team from '@/components/light/creative-portfolio/Team';
import Testimonials from '@/components/light/creative-portfolio/Testimonials';
import { onMounted } from 'vue';

useHead({
  bodyAttrs: {
    class: 'crev-portfolio',
  },
  link: [
    { rel: 'stylesheet', href: '/light/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/light/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/light/assets/css/style.css' },
  ],
  // script: [{ src: '/light/assets/js/smoother-script.js', defer: true }],
});
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>
