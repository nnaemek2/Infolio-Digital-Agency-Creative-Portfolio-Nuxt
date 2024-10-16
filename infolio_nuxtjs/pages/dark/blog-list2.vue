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
        <Blogs />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Blogs from '@/components/dark/blog-list2/Blogs';
import Footer from '@/components/dark/blog-list2/Footer';
import Header from '@/components/dark/blog-list2/Header';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Navbar from '@/components/dark/creative-agency/Navbar';
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
