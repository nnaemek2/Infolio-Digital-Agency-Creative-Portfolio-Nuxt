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
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import About from '@/components/dark/home-freelancer/About';
import Blog from '@/components/dark/home-freelancer/Blog';
import Contact from '@/components/dark/home-freelancer/Contact';
import Footer from '@/components/dark/home-freelancer/Footer';
import Header from '@/components/dark/home-freelancer/Header';
import Navbar from '@/components/dark/home-freelancer/Navbar';
import Portfolio from '@/components/dark/home-freelancer/Portfolio';
import Services from '@/components/dark/home-freelancer/Services';
import Skills from '@/components/dark/home-freelancer/Skills';
import Testimonials from '@/components/dark/home-freelancer/Testimonials';
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
