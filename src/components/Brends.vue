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
          class="w-[200px] ml-[50px] pt-[15px]"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://www.logolynx.com/images/logolynx/15/159a15c190f3e78a5524021490f2d58a.jpeg"
          class="w-[200px] ml-[50px] pt-[15px]"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://www.logolynx.com/images/logolynx/15/159a15c190f3e78a5524021490f2d58a.jpeg"
          class="w-[200px] ml-[50px] pt-[15px]"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://www.logolynx.com/images/logolynx/15/159a15c190f3e78a5524021490f2d58a.jpeg"
          class="w-[200px] ml-[50px] pt-[15px]"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://www.logolynx.com/images/logolynx/15/159a15c190f3e78a5524021490f2d58a.jpeg"
          class="w-[200px] ml-[50px] pt-[15px]"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://www.logolynx.com/images/logolynx/15/159a15c190f3e78a5524021490f2d58a.jpeg"
          class="w-[200px] ml-[50px] pt-[15px]"
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
