<template>
    <div class="home">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Carousel Image"/>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
  import 'swiper/swiper-bundle.css';
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        swiperOptions: {
          loop: true,
          autoplay: {
            delay: 3000, 
          },
          pagination: {
            el: '.swiper-pagination',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        images: [
        'home/StockImage2.jpg',
        'home/StockImage3.avif',
        'home/StockImage4.jpg',
        'home/StockImage5.jpg',
        'home/StockImage6.jpg',
        'home/StockImage7.png',
        'home/OrionNebula.jpg',
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  img{
    width: 75%;
  }
  .home{
    display: flex;
    justify-content: center;
  }
  </style>