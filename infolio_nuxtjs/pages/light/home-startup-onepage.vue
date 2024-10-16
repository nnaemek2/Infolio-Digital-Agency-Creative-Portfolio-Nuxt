<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Header />
        <Services />
        <About />
        <Marquee />
        <Portfolio />
        <ImageScale />
        <Skills />
        <Testimonials />
        <Clients />
        <Blog />
        <Contact />
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
import Services from '@/components/light/modern-startup/Services';
import Header from '@/components/light/modern-startup/Header';
import Navbar from '@/components/light/modern-startup/Navbar';
import About from '@/components/light/modern-startup/About';
import Marquee from '@/components/light/modern-startup/Marquee';
import Portfolio from '@/components/light/modern-startup/Portfolio';
import ImageScale from '@/components/light/modern-startup/ImageScale';
import Skills from '@/components/light/modern-startup/Skills';
import Testimonials from '@/components/light/modern-startup/Testimonials';
import Clients from '@/components/light/modern-startup/Clients';
import Blog from '@/components/light/modern-startup/Blog';
import Contact from '@/components/light/modern-startup/Contact';
import Footer from '@/components/light/modern-startup/Footer';

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
