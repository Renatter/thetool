<template>
  <div class="mb-[50px]">
    <div>home</div>
    <TopCard />
    <Slider />
    <Brends />
    <aboutTeam />
    <NewProd />
    <News />
  </div>
</template>

<script>
import TopCard from "../components/TopCard.vue";
import Slider from "../components/Slider.vue";
import Brends from "../components/Brends.vue";
import aboutTeam from "../components/aboutTeam.vue";
import NewProd from "../components/NewProd.vue";
import News from "../components/News.vue";
export default {
  components: {
    TopCard,
    Slider,
    Brends,
    aboutTeam,
    NewProd,
    News,
  },
};
</script>

<style lang="scss" scoped></style>
