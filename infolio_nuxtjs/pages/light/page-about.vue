<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <Intro />
        <Marquee />
        <Intro2 />
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
import Header from '@/components/light/about/Header';
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Navbar from '@/components/light/creative-agency/Navbar';
import Intro from '@/components/light/about/Intro';
import Marquee from '@/components/light/about/Marquee';
import Intro2 from '@/components/light/about/Intro2';
import Testimonials from '@/components/light/about/Testimonials';
import Team from '@/components/light/about/Team';
import Blog from '@/components/light/about/Blog';
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
