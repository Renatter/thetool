<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <router-link to="/">
          <a class="flex items-center">
            <img
              src="../assets/logotip-1.png"
              class="h-[60px] mr-3"
              alt="Flowbite Logo"
            />
          </a>
        </router-link>
        <div class="flex md:order-2">
          <div v-if="isAuthenticated" class="flex">
            <router-link to="/Bracket">
              <button
                type="button"
                class="mr-[15px] relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  ></path>
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  ></path>
                </svg>
                <span class="sr-only">Notifications</span>
                {{ $t("header.basket") }}
                <div
                  class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"
                >
                  {{ itemsLength }}
                </div>
              </button>
            </router-link>
            <router-link to="/Like">
              <button
                type="button"
                class="mr-[15px] relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <svg
                  class="w-5 h-5 mr-[15px]"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4.753C6.278 1.1 0 5.252 0 10.41 0 15.188 4.58 19 12 23c7.42-4 12-7.812 12-12.59C24 5.25 17.71 1.1 12 4.753z"
                  ></path>
                </svg>
                <span class="sr-only">Notifications</span>
                {{ $t("header.Favoirt") }}
                <div
                  class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"
                >
                  {{ itemsLike }}
                </div>
              </button>
            </router-link>

            <button
              @click="logout"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {{ $t("header.leave") }}
            </button>
          </div>
          <div v-else>
            <router-link
              to="/Reg"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {{ $t("header.reg") }}
            </router-link>
            <router-link
              to="/Login"
              type="button"
              class="ml-[15px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {{ $t("header.login") }}
            </router-link>
          </div>
          <div class="">
            <button @click="setLocale('kz')" class="ml-[15px]">
              <img
                src="https://avatars.mds.yandex.net/i?id=21595e288846b0b961d3c27bea79fcf3-3871383-images-thumbs&n=13"
                alt=""
                class="h-[35px] w-[35px] rounded-[5000px]"
              />
            </button>
            <button @click="setLocale('ru')">
              <img
                src="https://cdn1.ozone.ru/s3/multimedia-e/6337266878.jpg"
                alt=""
                class="h-[30px] w-[30px] rounded-[5000px] ml-[10px]"
              />
            </button>
          </div>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <router-link to="/About">
                <a
                  href="#"
                  :class="{
                    'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500':
                      activeTab === 'about',
                  }"
                  @click="changeTab('about')"
                >
                  {{ $t("header.about") }}
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/Catalog">
                <a
                  href="#"
                  :class="{
                    'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500':
                      activeTab === 'about',
                  }"
                  @click="changeTab('about')"
                >
                  {{ $t("header.catalog") }}
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/Discount">
                <a
                  href="#"
                  :class="{
                    'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700':
                      activeTab === 'stocks',
                  }"
                  @click="changeTab('stocks')"
                >
                  {{ $t("header.discount") }}
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/Hit">
                <a
                  href="#"
                  :class="{
                    'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700':
                      activeTab === 'heat',
                  }"
                  @click="changeTab('heat')"
                >
                  {{ $t("header.hit") }}
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/New">
                <a
                  href="#"
                  :class="{
                    'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700':
                      activeTab === 'new',
                  }"
                  @click="changeTab('new')"
                >
                  {{ $t("header.New") }}
                </a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { auth, db } from "../firebase/index";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
export default {
  data() {
    return {
      isAuthenticated: false,
      itemsLength: null,
      itemsLike: null,
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    logout() {
      this.isAuthenticated = false;
      auth.signOut();
      this.$router.push("/");
    },
  },
  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.isAuthenticated = true;
        const docRef = doc(db, "users", user.uid);
        onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.itemsLength = docSnap.data().cart.length;

            console.log(this.itemsLength);
          } else {
            console.log("No such document!");
          }
        });
        const likeRef = doc(db, "likes", user.uid);
        onSnapshot(likeRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());

            this.itemsLike = docSnap.data().likes.length;
            console.log(this.itemsLike);
          } else {
            console.log("No such document!");
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
