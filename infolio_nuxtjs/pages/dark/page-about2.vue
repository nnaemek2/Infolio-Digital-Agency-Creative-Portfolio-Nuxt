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
import Footer from '@/components/dark/blog-list/Footer';
import Header from '@/components/dark/about2/Header';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Navbar from '@/components/dark/creative-agency/Navbar';
import Intro from '@/components/dark/about2/Intro';
import Marquee from '@/components/dark/about2/Marquee';
import Testimonials from '@/components/dark/about/Testimonials';
import Team from '@/components/dark/about/Team';
import Blog from '@/components/dark/about/Blog';
import Numbers from '@/components/dark/about2/Numbers';
import About from '@/components/dark/about2/About';
import Brands from '@/components/dark/about2/Brands';
import Services from '@/components/dark/about2/Services';
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
