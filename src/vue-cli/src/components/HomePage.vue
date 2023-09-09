<template>
  <div class="home">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="require(`@/assets/home/${image}`)" alt="Carousel Image"/>
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
      'StockImage2.jpg',
      'StockImage3.avif',
      'StockImage4.jpg',
      'StockImage5.jpg',
      'StockImage6.jpg',
      'StockImage7.png',
      'OrionNebula.jpg',
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