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
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Services from '@/components/dark/modern-startup/Services';
import Header from '@/components/dark/modern-startup/Header';
import Navbar from '@/components/dark/modern-startup/Navbar';
import About from '@/components/dark/modern-startup/About';
import Marquee from '@/components/dark/modern-startup/Marquee';
import Portfolio from '@/components/dark/modern-startup/Portfolio';
import ImageScale from '@/components/dark/modern-startup/ImageScale';
import Skills from '@/components/dark/modern-startup/Skills';
import Testimonials from '@/components/dark/modern-startup/Testimonials';
import Clients from '@/components/dark/modern-startup/Clients';
import Blog from '@/components/dark/modern-startup/Blog';
import Contact from '@/components/dark/modern-startup/Contact';
import Footer from '@/components/dark/modern-startup/Footer';

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
