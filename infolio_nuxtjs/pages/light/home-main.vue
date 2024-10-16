<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Header />
        <Intro />
        <Services />
        <Services2 />
        <Marquee />
        <Portfolio />
        <Testimonials />
        <Team />
        <Blog />
        <Clients />
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
import Blog from '@/components/light/home-main/Blog';
import Clients from '@/components/light/home-main/Clients';
import Footer from '@/components/light/home-main/Footer';
import Header from '@/components/light/home-main/Header';
import Intro from '@/components/light/home-main/Intro';
import Marquee from '@/components/light/home-main/Marquee';
import Navbar from '@/components/light/creative-agency/Navbar';
import Portfolio from '@/components/light/home-main/Portfolio';
import Services from '@/components/light/home-main/Services';
import Services2 from '@/components/light/home-main/Services2';
import Team from '@/components/light/home-main/Team';
import Testimonials from '@/components/light/home-main/Testimonials';
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
