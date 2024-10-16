<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <Services />
        <About />
        <Number />
        <Portfolio />
        <Marquee />
        <Brands />
        <ServicesTab />
        <Testimonials />
        <Team />
        <Blog />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script setup>
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Navbar from '@/components/dark/creative-agency/Navbar';
import About from '@/components/dark/modern-agency/About';
import Blog from '@/components/dark/modern-agency/Blog';
import Brands from '@/components/dark/modern-agency/Brands';
import Footer from '@/components/dark/modern-agency/Footer';
import Header from '@/components/dark/modern-agency/Header';
import Marquee from '@/components/dark/modern-agency/Marquee';
import Number from '@/components/dark/modern-agency/Number';
import Portfolio from '@/components/dark/modern-agency/Portfolio';
import Services from '@/components/dark/modern-agency/Services';
import ServicesTab from '@/components/dark/modern-agency/ServicesTab';
import Team from '@/components/dark/modern-agency/Team';
import Testimonials from '@/components/dark/modern-agency/Testimonials';
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
