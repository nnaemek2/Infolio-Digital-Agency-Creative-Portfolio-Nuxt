<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <Interactive />
  <Header />
</template>
<script setup>
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Navbar from '@/components/light/portfolio-caption/Navbar';
import Interactive from '@/components/light/interactive-vertical/Interactive';

useHead({
  link: [
    { rel: 'stylesheet', href: '/light/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/light/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/light/assets/css/style.css' },
  ],
  // script: [{ src: '/light/assets/js/smoother-script.js', defer: true }],
});
</script>
