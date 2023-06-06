<template>
  <div class="my-[25px]">
    <h1 class="text-[30px] font-bold">
      Отличные предложения: хиты сезона в магазине строительных материалов!
    </h1>
    <div class="pt-[15px]">
      <Card :items="HomeGarden" :prodcut="productTab" />
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/index";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      productTab: "HomeGarden",

      HomeGarden: null,
    };
  },

  async created() {
    const HomeGardenRef = doc(db, "paintProducts1", "Hit");
    const HomeGardenSnap = await getDoc(HomeGardenRef);
    if (HomeGardenSnap.exists()) {
      this.HomeGarden = HomeGardenSnap.data();
      console.log("Document data:", this.items);
      this.swiperInitialized = true;
    } else {
      console.log("No such document!");
    }
  },
};
</script>

<style lang="scss" scoped></style>
