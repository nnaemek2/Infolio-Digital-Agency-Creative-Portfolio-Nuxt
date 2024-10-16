<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg pt-80">
        <Header />
        <Brands />
        <Services />
        <Skills />
        <Portfolio />
        <Process />
        <Team />
        <Testimonials />
        <Price />
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
import Navbar from '@/components/dark/creative-agency/Navbar';
import Blog from '@/components/dark/digital-agency/Blog';
import Brands from '@/components/dark/digital-agency/Brands';
import Footer from '@/components/dark/digital-agency/Footer';
import Header from '@/components/dark/digital-agency/Header';
import Portfolio from '@/components/dark/digital-agency/Portfolio';
import Price from '@/components/dark/digital-agency/Price';
import Process from '@/components/dark/digital-agency/Process';
import Services from '@/components/dark/digital-agency/Services';
import Skills from '@/components/dark/digital-agency/Skills';
import Team from '@/components/dark/digital-agency/Team';
import Testimonials from '@/components/dark/digital-agency/Testimonials';
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
