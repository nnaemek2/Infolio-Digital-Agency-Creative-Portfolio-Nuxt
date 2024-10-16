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
        <Services />
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
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
import About from '@/components/light/home-freelancer/About';
import Blog from '@/components/light/home-freelancer/Blog';
import Contact from '@/components/light/home-freelancer/Contact';
import Footer from '@/components/light/home-freelancer/Footer';
import Header from '@/components/light/home-freelancer/Header';
import Navbar from '@/components/light/home-freelancer/Navbar';
import Portfolio from '@/components/light/home-freelancer/Portfolio';
import Services from '@/components/light/home-freelancer/Services';
import Skills from '@/components/light/home-freelancer/Skills';
import Testimonials from '@/components/light/home-freelancer/Testimonials';
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
