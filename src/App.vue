<template>
  <div class="container">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Reg from "./components/reg.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Reg,
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
