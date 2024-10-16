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
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Navbar from '@/components/light/creative-agency/Navbar';
import About from '@/components/light/modern-agency/About';
import Blog from '@/components/light/modern-agency/Blog';
import Brands from '@/components/light/modern-agency/Brands';
import Footer from '@/components/light/modern-agency/Footer';
import Header from '@/components/light/modern-agency/Header';
import Marquee from '@/components/light/modern-agency/Marquee';
import Number from '@/components/light/modern-agency/Number';
import Portfolio from '@/components/light/modern-agency/Portfolio';
import Services from '@/components/light/modern-agency/Services';
import ServicesTab from '@/components/light/modern-agency/ServicesTab';
import Team from '@/components/light/modern-agency/Team';
import Testimonials from '@/components/light/modern-agency/Testimonials';
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
