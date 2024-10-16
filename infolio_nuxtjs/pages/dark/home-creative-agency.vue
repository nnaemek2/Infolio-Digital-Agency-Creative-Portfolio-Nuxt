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
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Blog from '@/components/dark/creative-agency/Blog';
import Brands from '@/components/dark/creative-agency/Brands';
import Footer from '@/components/dark/creative-agency/Footer';
import Header from '@/components/dark/creative-agency/Header';
import ImageScale from '@/components/dark/creative-agency/ImageScale';
import Marquee from '@/components/dark/creative-agency/Marquee';
import Navbar from '@/components/dark/creative-agency/Navbar';
import Numbers from '@/components/dark/creative-agency/Numbers';
import Portfolio from '@/components/dark/creative-agency/Portfolio';
import Services from '@/components/dark/creative-agency/Services';
import Skills from '@/components/dark/creative-agency/Skills';
import Testimonials from '@/components/dark/creative-agency/Testimonials';
import { onMounted } from 'vue';

useHead({
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
