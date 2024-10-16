<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg pt-80 o-hidden">
        <Header />
        <Marquee />
        <Services />
        <Skills />
        <Numbers />
        <Portfolio />
        <Testimonials />
        <Brands />
        <ImageScale />
        <Blog />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Blog from '@/components/light/creative-agency/Blog';
import Brands from '@/components/light/creative-agency/Brands';
import Footer from '@/components/light/creative-agency/Footer';
import Header from '@/components/light/creative-agency/Header';
import ImageScale from '@/components/light/creative-agency/ImageScale';
import Marquee from '@/components/light/creative-agency/Marquee';
import Navbar from '@/components/light/creative-agency/Navbar';
import Numbers from '@/components/light/creative-agency/Numbers';
import Portfolio from '@/components/light/creative-agency/Portfolio';
import Services from '@/components/light/creative-agency/Services';
import Skills from '@/components/light/creative-agency/Skills';
import Testimonials from '@/components/light/creative-agency/Testimonials';
import { onMounted } from 'vue';

useHead({
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
