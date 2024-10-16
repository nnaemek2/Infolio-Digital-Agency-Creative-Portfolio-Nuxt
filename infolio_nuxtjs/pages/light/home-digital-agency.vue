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
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Navbar from '@/components/light/creative-agency/Navbar';
import Blog from '@/components/light/digital-agency/Blog';
import Brands from '@/components/light/digital-agency/Brands';
import Footer from '@/components/light/digital-agency/Footer';
import Header from '@/components/light/digital-agency/Header';
import Portfolio from '@/components/light/digital-agency/Portfolio';
import Price from '@/components/light/digital-agency/Price';
import Process from '@/components/light/digital-agency/Process';
import Services from '@/components/light/digital-agency/Services';
import Skills from '@/components/light/digital-agency/Skills';
import Team from '@/components/light/digital-agency/Team';
import Testimonials from '@/components/light/digital-agency/Testimonials';
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
