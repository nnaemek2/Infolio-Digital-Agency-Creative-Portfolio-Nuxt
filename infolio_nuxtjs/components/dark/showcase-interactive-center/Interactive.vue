<template>
  <section class="interactive-center">
    <div class="container text-center">
      <div
        v-for="(item, i) in data"
        :key="i"
        @mouseleave="handleMouseLeave"
        class="item-d item block"
        data-fx="1"
      >
        <a :href="item.link" class="block__link">
          <div class="hover-i">
            <img :src="item.img" alt="" class="item-im" />
          </div>
          <div class="cont">
            <h4 class="f-bold">{{ item.title }}</h4>
            <p>{{ item.subTitle }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
import data from '@/data/portfolios/worksfull.json';
const handleMouseLeave = () => {
  const image = document.querySelector('.item-im');
  image.classList.add('out-ani');
  // // document.querySelector('.item-im').style.transform = 'translateX(100%)';
  setTimeout(() => {
    //   image.style.transform = 'translateX(-100%)';
    image.classList.remove('out-ani');
  }, 500); // Adjust this value to change the delay
};
</script>
