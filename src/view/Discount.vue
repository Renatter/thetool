<template>
  <div class="flex justify-between">
    <div class="pt-[25px]">
      <h1 class="text-[30px] font-bold mb-[24px]">
        {{ $t("header.discount") }}
      </h1>
      <div class="flex flex-wrap gap-[30px]">
        <Card
          discount="true"
          img="https://cdn-icons-png.flaticon.com/128/10963/10963017.png"
          :items="HomeGarden"
          :prodcut="productTab"
        />
      </div>
    </div>
  </div>
</template>

<style>
.slider-container {
  justify-content: flex-start;
}
.swiper {
  margin-left: 0;
}
</style>

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
      productTab: "Discount",

      HomeGarden: null,
    };
  },

  async created() {
    const HomeGardenRef = doc(db, "paintProducts1", "Discount");
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
