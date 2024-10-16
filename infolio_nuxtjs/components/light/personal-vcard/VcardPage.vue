<template>
  <div
    id="smooth-wrapper"
    class="bg-img vcard-bg"
    data-background="/light/assets/imgs/intro/vcard0.png"
  >
    <Navbar />
    <div id="smooth-content">
      <main>
        <section class="container">
          <div class="row justify-content-end">
            <div class="col-lg-6 bord-thin-top">
              <Intro />
              <Skills />
              <Resume />
              <Services />
              <Portfolio />
              <Testimonials />
              <Contact />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  </div>
</template>

<script setup>
import Navbar from './Navbar';
import Intro from './Intro';
import Skills from './Skills';
import Resume from './Resume';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
