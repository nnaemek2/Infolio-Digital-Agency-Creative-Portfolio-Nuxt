<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <Intro />
        <Numbers />
        <About />
        <Marquee />
        <Brands />
        <Services />
        <Testimonials />
        <Team />
        <Blog />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Footer from '@/components/light/blog-list/Footer';
import Header from '@/components/light/about2/Header';
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Navbar from '@/components/light/creative-agency/Navbar';
import Intro from '@/components/light/about2/Intro';
import Marquee from '@/components/light/about2/Marquee';
import Testimonials from '@/components/light/about/Testimonials';
import Team from '@/components/light/about/Team';
import Blog from '@/components/light/about/Blog';
import Numbers from '@/components/light/about2/Numbers';
import About from '@/components/light/about2/About';
import Brands from '@/components/light/about2/Brands';
import Services from '@/components/light/about2/Services';
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
