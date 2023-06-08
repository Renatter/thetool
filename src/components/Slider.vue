<template>
  <div class="flex justify-between">
    <div class="pt-[25px]">
      <h1 class="text-[30px] font-bold mb-[24px]">Малярные товары</h1>
      <swiper
        class="w-[500px] slider-container"
        v-if="swiperInitialized"
        :slides-per-view="2"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        ref="swiper"
      >
        <swiper-slide v-for="(item, key) in items" :key="key" class="mr-[15px]">
          <div
            class="max-w-sm h-[390px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                class="rounded-t-lg w-[150px] h-[150px] m-[15px] object-scale-down"
                :src="item.image"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ item.name }}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ item.price }} $
              </p>
              <router-link
                :to="{ path: '/InfoCard/' + item.name + '/' + 'product1' }"
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
        </swiper-slide>
      </swiper>
    </div>

    <div class="pt-[25px]">
      <h1 class="text-[30px] font-bold mb-[24px]">Спецодежда</h1>
      <swiper
        class="w-[500px] slider-container"
        v-if="swiperInitialized"
        :slides-per-view="2"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        ref="swiper"
      >
        <swiper-slide
          v-for="(Workwear, key) in Workwears"
          :key="key"
          class="mr-[15px]"
        >
          <div
            class="max-w-sm h-[390px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                class="rounded-t-lg w-[150px] h-[150px] m-[15px] object-scale-down"
                :src="Workwear.image"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ Workwear.name }}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ Workwear.price }} $
              </p>
              <router-link
                :to="{ path: '/InfoCard/' + Workwear.name + '/' + 'Workwear' }"
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
        </swiper-slide>
      </swiper>
    </div>
  </div>

  <div class="flex justify-between">
    <div class="pt-[25px]">
      <h1 class="text-[30px] font-bold mb-[24px]">Для дома и дачи</h1>
      <swiper
        class="w-[500px] slider-container"
        v-if="swiperInitialized"
        :slides-per-view="2"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        ref="swiper"
      >
        <swiper-slide
          v-for="(homeG, key) in HomeGarden"
          :key="key"
          class="mr-[15px]"
        >
          <div
            class="max-w-sm h-[390px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                class="rounded-t-lg w-[150px] h-[150px] m-[15px] object-scale-down"
                :src="homeG.image"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ homeG.name }}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ homeG.price }} $
              </p>
              <router-link
                :to="{ path: '/InfoCard/' + homeG.name + '/' + 'HomeGarden' }"
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
        </swiper-slide>
      </swiper>
    </div>

    <div class="pt-[25px]">
      <h1 class="text-[30px] font-bold mb-[24px]">Электрооборудование</h1>
      <swiper
        class="w-[500px] slider-container"
        v-if="swiperInitialized"
        :slides-per-view="2"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        ref="swiper"
      >
        <swiper-slide
          v-for="(Elec, key) in ElecEquim"
          :key="key"
          class="mr-[15px]"
        >
          <div
            class="max-w-sm h-[390px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                class="rounded-t-lg w-[150px] h-[150px] m-[15px] object-scale-down"
                :src="Elec.image"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ Elec.name }}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ Elec.price }} $
              </p>
              <router-link
                :to="{ path: '/InfoCard/' + Elec.name + '/' + 'ElecEquim' }"
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
        </swiper-slide>
      </swiper>
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
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      items: null, // Данные продуктов paintProducts1
      Workwears: null, // Данные продуктов Workwear
      ElecEquim: null, // Данные продуктов ElecEquim
      HomeGarden: null, // Данные продуктов HomeGarden
      swiperInitialized: false, // Флаг для инициализации Swiper
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.swiperInitialized) {
        console.log(this.$refs.swiper.swiper);
      }
    });
  },
  methods: {
    onSlideChange() {
      console.log("slide change");
    },
  },
  async created() {
    // Получение данных продуктов paintProducts1
    const docRef = doc(db, "paintProducts1", "product1");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      this.items = docSnap.data();
      console.log("Document data:", this.items);
      this.swiperInitialized = true;
    } else {
      console.log("No such document!");
    }

    // Получение данных продуктов Workwear
    const WorkwearRef = doc(db, "paintProducts1", "Workwear");
    const WorkwearSnap = await getDoc(WorkwearRef);
    if (WorkwearSnap.exists()) {
      this.Workwears = WorkwearSnap.data();
      console.log("Document data:", this.items);
      this.swiperInitialized = true;
    } else {
      console.log("No such document!");
    }

    // Получение данных продуктов ElecEquim
    const ElecEquimRef = doc(db, "paintProducts1", "ElecEquim");
    const ElecEquimSnap = await getDoc(ElecEquimRef);
    if (ElecEquimSnap.exists()) {
      this.ElecEquim = ElecEquimSnap.data();
      console.log("Document data:", this.items);
      this.swiperInitialized = true;
    } else {
      console.log("No such document!");
    }

    // Получение данных продуктов HomeGarden
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
