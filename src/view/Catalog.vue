<template>
  <div class="h-full">
    <div
      class="inline-flex rounded-md shadow-sm ml-[270px] pt-[35px]"
      role="group"
    >
      <button
        @click="itemsTab(1)"
        type="button"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
      >
        <svg
          aria-hidden="true"
          class="w-4 h-4 mr-2 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          ></path>
        </svg>
        {{ $t("slider.Painting") }}
      </button>
      <button
        @click="WorkwearsTab(2)"
        type="button"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
      >
        <svg
          aria-hidden="true"
          class="w-4 h-4 mr-2 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
          ></path>
        </svg>
        {{ $t("slider.Workwear") }}
      </button>
      <button
        @click="HomeGardenTab(3)"
        type="button"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
      >
        <svg
          aria-hidden="true"
          class="w-4 h-4 mr-2 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
          ></path>
        </svg>
        {{ $t("slider.hag") }}
      </button>

      <button
        @click="ElecEquimTab(4)"
        type="button"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
      >
        <svg
          aria-hidden="true"
          class="w-4 h-4 mr-2 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
            clip-rule="evenodd"
          ></path>
        </svg>
        {{ $t("slider.elec") }}
      </button>
    </div>

    <div v-if="activeTab == 1">
      <Card :items="items" :prodcut="productTab" />
    </div>
    <div v-if="activeTab == 2">
      <Card :items="Workwears" :prodcut="productTab" />
    </div>
    <div v-if="activeTab == 3">
      <Card :items="HomeGarden" :prodcut="productTab" />
    </div>
    <div v-if="activeTab == 4">
      <Card :items="ElecEquim" :prodcut="productTab" />
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
      productTab: "product1", // Выбранный продукт
      activeTab: 1, // Активная вкладка
      items: null, // Данные для вкладки "Малярные"
      Workwears: null, // Данные для вкладки "Спецодежда"
      ElecEquim: null, // Данные для вкладки "Электрооборудование"
      HomeGarden: null, // Данные для вкладки "Для дома и дачи"
    };
  },
  methods: {
    itemsTab(id) {
      // Метод для переключения на вкладку "Малярные"
      this.activeTab = id;
      this.productTab = "product1";
    },
    WorkwearsTab(id) {
      // Метод для переключения на вкладку "Спецодежда"
      this.activeTab = id;
      this.productTab = "Workwear";
    },
    ElecEquimTab(id) {
      // Метод для переключения на вкладку "Электрооборудование"
      this.activeTab = id;
      this.productTab = "ElecEquim";
    },
    HomeGardenTab(id) {
      // Метод для переключения на вкладку "Для дома и дачи"
      this.activeTab = id;
      this.productTab = "HomeGarden";
    },
  },
  async created() {
    // Загрузка данных для каждой вкладки при создании компонента
    const docRef = doc(db, "paintProducts1", "product1");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      this.items = docSnap.data();
      console.log("Document data:", this.items);
      this.swiperInitialized = true;
    } else {
      console.log("No such document!");
    }

    const WorkwearRef = doc(db, "paintProducts1", "Workwear");
    const WorkwearSnap = await getDoc(WorkwearRef);
    if (WorkwearSnap.exists()) {
      this.Workwears = WorkwearSnap.data();
      console.log("Document data:", this.items);
      this.swiperInitialized = true;
    } else {
      console.log("No such document!");
    }

    const ElecEquimRef = doc(db, "paintProducts1", "ElecEquim");
    const ElecEquimSnap = await getDoc(ElecEquimRef);
    if (ElecEquimSnap.exists()) {
      this.ElecEquim = ElecEquimSnap.data();
      console.log("Document data:", this.items);
      this.swiperInitialized = true;
    } else {
      console.log("No such document!");
    }

    const HomeGardenRef = doc(db, "paintProducts1", "HomeGarden");
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
