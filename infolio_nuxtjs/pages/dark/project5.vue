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
        <Challenge />
        <Works />
        <Solution />
        <Works2 />
        <Next />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Footer from '@/components/dark/blog-details/Footer';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Navbar from '@/components/dark/portfolio-caption/Navbar';
import Next from '@/components/dark/project2/Next';
import Challenge from '@/components/dark/project5/Challenge';
import Header from '@/components/dark/project5/Header';
import Solution from '@/components/dark/project5/Solution';
import Works from '@/components/dark/project5/Works';
import Works2 from '@/components/dark/project5/Works2';
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
