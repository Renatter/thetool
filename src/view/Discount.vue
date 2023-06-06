<template>
  <div class="flex justify-between">
    <div class="pt-[25px]">
      <h1 class="text-[30px] font-bold mb-[24px]">Акция</h1>

      <div class="flex flex-wrap gap-[30px]">
        <div v-for="(NewProduct, key) in NewProducts" :key="key" class="">
          <div
            class="w-[250px] h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                class="rounded-t-lg w-[150px] m-[15px]"
                :src="NewProduct.image"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ NewProduct.name }}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ NewProduct.price }} $
              </p>
              <router-link
                :to="{
                  path: '/InfoCard/' + NewProduct.name + '/' + 'Discount',
                }"
              >
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Купить
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </router-link>
            </div>
          </div>
        </div>
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

export default {
  data() {
    return {
      NewProducts: null,
    };
  },

  methods: {
    onSlideChange() {
      console.log("slide change");
    },
  },
  async created() {
    const docRef = doc(db, "paintProducts1", "Discount");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      this.NewProducts = docSnap.data();
      console.log("Document data:", this.NewProducts);
      this.swiperInitialized = true;
    } else {
      console.log("No such document!");
    }
  },
};
</script>
