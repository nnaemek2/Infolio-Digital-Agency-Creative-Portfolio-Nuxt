<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <NavTop />

  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="sub-bg">
        <Header />
        <GridDemos />
        <StartSection />
        <InnerPages />
        <Porfolios />
        <Amazing />
        <Updates />
        <Testimonials />
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
import NavTop from '@/components/dark/landing-preview/NavTop';
import GridDemos from '@/components/dark/landing-preview/GridDemos';
import Header from '@/components/dark/landing-preview/Header';
import { onMounted } from 'vue';
import Amazing from '@/components/dark/landing-preview/Amazing';
import Footer from '@/components/dark/landing-preview/Footer';
import InnerPages from '@/components/dark/landing-preview/InnerPages';
import Porfolios from '@/components/dark/landing-preview/Porfolios';
import StartSection from '@/components/dark/landing-preview/StartSection';
import Testimonials from '@/components/dark/landing-preview/Testimonials';
import Updates from '@/components/dark/landing-preview/Updates';

useHead({
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
    { rel: 'stylesheet', href: '/landing-preview/css/preview-style.css' },
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
