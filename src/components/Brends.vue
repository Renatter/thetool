<template>
  <div
    class="bg-[#212526] w-full h-[246px] text-white mt-[80px] rounded-[25px] mb-[80px]"
  >
    <h1 class="text-[32px] pt-[30px] ml-[15px]">Наши бренды</h1>
    <swiper
      :pagination="{
        type: 'progressbar',
      }"
      :loop="true"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        ><img
          src="https://www.logolynx.com/images/logolynx/15/159a15c190f3e78a5524021490f2d58a.jpeg"
          class="w-[200px] ml-[50px] pt-[15px] h-[70px]"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://m.godesigner.ru/solutions/5/5d/5d5/5d5c64152219b6f0fbacef2bba43dff1_gallerySiteSize.jpg"
          class="w-[200px] ml-[50px] pt-[15px] h-[70px] object-cover"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://i.pinimg.com/originals/3c/35/c8/3c35c8abfd083e6f9f52a2cfb211e43b.jpg"
          class="w-[200px] ml-[50px] pt-[15px] h-[70px] object-cover"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://i.pinimg.com/originals/c3/bf/73/c3bf73823cf78a457bc38db8c94a36cf.jpg"
          class="w-[200px] ml-[50px] pt-[15px] h-[70px] object-cover"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://s.tmimgcdn.com/scr/1200x750/95200/building-logo-template_95221-original.jpg"
          class="w-[200px] ml-[50px] pt-[15px] h-[70px] object-cover"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://cdn.freelance.ru/img/portfolio/pics/00/3D/20/4006012.jpg?mt=4f56f772"
          class="w-[200px] ml-[50px] pt-[15px] h-[70px] object-cover"
          alt=""
      /></swiper-slide>
      ...
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-button-prev,
.swiper-button-next {
  color: #ff0000;
}
</style>
