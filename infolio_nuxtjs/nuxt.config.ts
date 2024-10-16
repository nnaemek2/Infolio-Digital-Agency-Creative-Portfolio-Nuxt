import { fileURLToPath } from 'node:url';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  typescript: {
    shim: false,
  },
  nitro: {},
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  app: {
    head: {
      title: 'infolio',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge',
        },
        {
          name: 'keywords',
          content: 'Vue Nuxtjs Template webfolio Multi-Purpose themeforest',
        },
        {
          name: 'description',
          content: 'webfolio - Multi-Purpose Vue Nuxtjs Template',
        },
        {
          name: 'author',
          content: 'Uicamp',
        },
      ],
      link: [
        { rel: 'shortcut icon', href: '/dark/assets/imgs/favicon.ico' },
        // Google Fonts
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
        },
      ],
      script: [
        { src: '/dark/assets/js/plugins.js' },
        { src: '/dark/assets/js/TweenMax.min.js' },
        { src: '/dark/assets/js/charming.min.js' },
        { src: '/dark/assets/js/countdown.js' },
        { src: '/dark/assets/js/ScrollTrigger.min.js' },
        { src: '/dark/assets/js/gsap.min.js' },
        { src: '/dark/assets/js/splitting.min.js' },
        { src: '/dark/assets/js/isotope.pkgd.min.js' },
        { src: '/dark/assets/js/imgReveal/imagesloaded.pkgd.min.js' },
        { src: '/dark/assets/js/ScrollSmoother.min.js' },
        // { src: '/showcase/dark/assets/js/anime.min.js' },
        { src: '/dark/assets/js/scripts.js', defer: true },
      ],
    },
  },
  css: ['swiper/css/bundle', '@/styles/globals.css'],

  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
      },
    },
  },
});
