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
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import About from '@/components/dark/creative-portfolio/About';
import Blog from '@/components/dark/creative-portfolio/Blog';
import Footer from '@/components/dark/creative-portfolio/Footer';
import Header from '@/components/dark/creative-portfolio/Header';
import Marquee from '@/components/dark/creative-portfolio/Marquee';
import Navbar from '@/components/dark/creative-portfolio/Navbar';
import Portfolio from '@/components/dark/creative-portfolio/Portfolio';
import Services from '@/components/dark/creative-portfolio/Services';
import Team from '@/components/dark/creative-portfolio/Team';
import Testimonials from '@/components/dark/creative-portfolio/Testimonials';
import { onMounted } from 'vue';

useHead({
  bodyAttrs: {
    class: 'crev-portfolio',
  },
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
  // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
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
