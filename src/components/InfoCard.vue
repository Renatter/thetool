<template>
  <div class="h-[100vh]">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a
            href="#"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              class="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            Home
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <router-link
              to="/Catalog"
              href="#"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >Каталог</router-link
            >
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
              >{{ this.$route.params.id }} {{ this.$route.params.id2 }}
            </span>
          </div>
        </li>
      </ol>
    </nav>
    <div v-if="productInfo" class="bg-white">
      <div class="flex">
        <img :src="productInfo.image" class="w-[400px]" alt="" />
        <div class="ml-[50px]">
          <h1 class="text-[30px]">{{ productInfo.name }}</h1>
          <p class="text-[#22c55e] my-[20px]" v-if="productInfo.availability">
            В наличии
          </p>
          <p class="w-[380px]">{{ productInfo.minInfo }}</p>
          <p class="my-[50px] font-bold text-[30px]">
            {{ productInfo.price }} тг
          </p>
          <button
            type="button"
            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/index";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

export default {
  data() {
    return {
      item: null,
      productInfo: null,
    };
  },

  async created() {
    const docRef = doc(db, "paintProducts1", `${this.$route.params.id2}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      this.item = docSnap.data();
      console.log("Document data:", this.item);
      this.swiperInitialized = true;
    } else {
      console.log("No such document!");
    }
    const filteredData = Object.values(this.item).filter(
      (x) => x.name === `${this.$route.params.id}`
    );
    this.productInfo = filteredData[0];
    console.log("Filtered data:", this.productInfo);
  },
};
</script>

<style lang="scss" scoped></style>
