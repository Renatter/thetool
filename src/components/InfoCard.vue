<template>
  <div class="h-full">
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
    <div v-if="productInfo" class="bg-white h-full">
      <div class="flex">
        <img :src="productInfo.image" class="w-[400px]" alt="" />
        <div class="ml-[50px]">
          <h1 class="text-[30px]">{{ productInfo.name }}</h1>
          <p class="text-[#22c55e] my-[20px]" v-if="productInfo.availability">
            {{ $t("infoCard.quant") }}
          </p>
          <p class="w-[380px]">{{ productInfo.minInfo }}</p>
          <p class="my-[50px] font-bold text-[30px]">
            {{ productInfo.price }} тг
          </p>
          <div>
            <div>
              <button
                v-if="currentUser"
                @click="addToCart"
                type="button"
                class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
              >
                {{ $t("infoCard.pay") }}
              </button>
              <router-link v-else to="/Reg">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                >
                  {{ $t("infoCard.join") }}
                </button>
              </router-link>

              <button
                @click="addLike"
                type="button"
                class="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-red-800"
              >
                {{ $t("infoCard.like") }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="full-info">
        <div
          class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
        >
          <ul class="flex flex-wrap -mb-px cursor-pointer">
            <li class="mr-2">
              <a
                @click="atcivTab = 1"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >{{ $t("infoCard.text") }}</a
              >
            </li>
            <li class="mr-2">
              <a
                @click="atcivTab = 2"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >{{ $t("infoCard.del") }}</a
              >
            </li>
            <li class="mr-2">
              <a
                @click="atcivTab = 3"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >{{ $t("infoCard.otzvL") }}</a
              >
            </li>
          </ul>
        </div>
        <div v-if="atcivTab == 1">
          <p class="m-[25px]">
            {{ productInfo.maxInfo }}
          </p>
        </div>
        <div v-if="atcivTab == 2">
          <p class="m-[25px]">
            {{ productInfo.Delivery }}
          </p>
        </div>
        <div v-if="atcivTab == 3" class="flex flex-wrap">
          <div class="border h-[160px] w-[540px] m-[15px]">
            <div class="m-[15px]">
              <p class="text-[#E3A008]">{{ productInfo.otzv1[0] }}</p>
              <p>{{ productInfo.otzv1[1] }}</p>
              <p>{{ productInfo.otzv1[2] }}</p>
            </div>
          </div>
          <div class="border h-[160px] w-[540px] m-[15px]">
            <div class="m-[15px]">
              <p class="text-[#E3A008]">{{ productInfo.otzv2[0] }}</p>
              <p>{{ productInfo.otzv2[1] }}</p>
              <p>{{ productInfo.otzv2[2] }}</p>
            </div>
          </div>
        </div>
      </div>
      <p class="font-bold text-[25px] m-[25px]">{{ $t("infoCard.pohozh") }}</p>
      <div class="flex p-[15px]">
        <div v-for="(NewProduct, key) in fullItem" :key="key" class="mr-[15px]">
          <div
            class="w-[220px] h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                class="rounded-t-lg w-[150px] h-[150px] m-[15px]"
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
                {{ NewProduct.price }} тг
              </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from "../firebase/index";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";

export default {
  data() {
    return {
      item: null, // Данные продукта
      productInfo: null, // Информация о продукте
      atcivTab: 1, // Текущая активная вкладка
      fullItem: null, // Полные данные о продукте
      firstName: null, // Имя пользователя
      currentUser: null, // Текущий пользователь
      cart: null, // Корзина пользователя
      likes: [], // Массив "Нравится" пользователя
      newComment: {
        name: "",
        date: "",
        comment: "",
      },
    };
  },
  methods: {
    async addLike() {
      // Метод для добавления отметки "Нравится"
      const docRef = doc(db, "likes", `${this.currentUser.uid}`);
      const newLike = {
        category: this.$route.params.id2,
        name: this.productInfo.name,
        image: this.productInfo.image,
        price: this.productInfo.price,
        currentUser: this.currentUser.uid,
      };
      const likeExists = (this.likes || []).some(
        (like) => like.name === newLike.name
      );

      if (likeExists) {
        alert("Вы уже отметили, что вам нравится этот товар");
        // Отобразите пользователю сообщение, указывающее, что товар уже был отмечен
        return;
      }

      // Добавьте новый элемент в массив существующих отметок "Нравится"
      const updatedLikes = [...(this.likes || []), newLike];

      // Обновите данные пользователя с обновленным массивом отметок "Нравится"
      await setDoc(docRef, { likes: updatedLikes }, { merge: true });

      console.log("Item added to likes:", newLike);
    },
    async addToCart() {
      // Метод для добавления товара в корзину
      const docRef = doc(db, "users", `${this.currentUser.uid}`);
      const newItem = {
        category: this.$route.params.id2,
        name: this.productInfo.name,
        image: this.productInfo.image,
        price: this.productInfo.price,
        availability: true,
        currentUser: this.currentUser.uid,
        quantity: 1,
        totalPrice: this.productInfo.price,
      };
      const itemExists = (this.cart || []).some(
        (item) => item.name === newItem.name
      );

      if (itemExists) {
        alert("уже есть этот товар");
        // Отобразите пользователю сообщение, указывающее, что товар уже присутствует в корзине
        return;
      }
      // Добавьте новый товар в существующий массив корзины
      const updatedCart = [...(this.cart || []), newItem];

      // Обновите корзину пользователя с обновленным массивом корзины
      await setDoc(docRef, { cart: updatedCart }, { merge: true });

      console.log("Item added to cart:", newItem);
    },
  },

  async created() {
    // Получите данные продукта по его идентификатору
    const docRef = doc(db, "paintProducts1", `${this.$route.params.id2}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      this.item = docSnap.data();
      console.log("Document data:", this.item);
      this.swiperInitialized = true;
    } else {
      console.log("No such document!");
    }

    // Фильтрация данных для получения информации о конкретном продукте
    const filteredData = Object.values(this.item).filter(
      (x) => x.name === `${this.$route.params.id}`
    );
    this.productInfo = filteredData[0];
    console.log("Filtered data:", this.productInfo);

    // Получите полные данные о продукте
    const fullRef = doc(db, "paintProducts1", `${this.$route.params.id2}`);
    const fullSnap = await getDoc(fullRef);
    if (fullSnap.exists()) {
      this.fullItem = fullSnap.data();
      console.log("Document data:", this.fullItem);

      // Выбираем только пять продуктов
      const fiveProducts = Object.keys(this.fullItem)
        .slice(0, 5)
        .map((key) => this.fullItem[key]);

      console.log("Five products:", fiveProducts);

      this.swiperInitialized = true;
    } else {
      console.log("No such document!");
    }

    // Отслеживание состояния аутентификации пользователя
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user;
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          this.cart = userDoc.data().cart;
        } else {
          console.log("No such document!");
        }
        const likeDocRef = doc(db, "likes", user.uid);
        const likeDoc = await getDoc(likeDocRef);
        if (likeDoc.exists()) {
          this.likes = likeDoc.data().likes;
        } else {
          console.log("No such document!");
        }
      }
    });
  },
};
</script>

<style>
a.active {
  /* Ваши стили для активной кнопки */
  color: red;
  border-color: red;
  /* Другие стили */
}
</style>
