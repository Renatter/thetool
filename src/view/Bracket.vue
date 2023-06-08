<template>
  <div class="h-full">
    <h1 class="text-[50px]">Корзина</h1>

    <div>
      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Product</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
              <th scope="col" class="px-6 py-3">Quantity</th>
              <th scope="col" class="px-6 py-3">Total Price</th>
              <th scope="col" class="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in items"
              :key="item.currentUser"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <router-link
                :to="{ path: '/InfoCard/' + item.name + '/' + item.category }"
              >
                <td class="flex items-center px-6 py-4 whitespace-nowrap">
                  <img
                    :src="item.image"
                    alt="Product Image"
                    class="w-8 h-8 mr-4"
                  />
                  <span class="font-medium text-gray-900 dark:text-white">{{
                    item.name
                  }}</span>
                </td>
              </router-link>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">{{ item.category }}</td>
              <td class="px-6 py-4">{{ item.price }} тг</td>
              <td class="px-6 py-4">
                <input
                  type="number"
                  min="0"
                  v-model="item.quantity"
                  @change="updateTotalPrice(item)"
                  class="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </td>
              <td class="px-6 py-4">{{ item.totalPrice }} тг</td>
              <td class="px-6 py-4">
                <button @click="deleteItem(item)" class="text-red-500">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <h1 class="text-[25px]">Оформление заказа</h1>
    <div class="mt-[55px] bg-white">
      <div class="w-full flex justify-between">
        <div class="Input w-[700px] p-[25px]">
          <div class="flex text-[20px]"></div>
          <div v-if="tab === 1">
            <p>Данные покупателя</p>
            <div class="flex gap-14 mt-[20px]">
              <div class="">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Фамилия</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Фамилия"
                  required
                />
              </div>
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Имя</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Имя"
                  required
                />
              </div>
            </div>
            <div class="flex gap-14 mt-[20px]">
              <div class="">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Телефон</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Телефон"
                  required
                />
              </div>
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Электронная почта</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Электронная почта"
                  required
                />
              </div>
            </div>
            <button
              @click="tabItem(2)"
              type="button"
              class="mt-[25px] w-[180px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              ДАЛЕЕ
            </button>
          </div>
          <div v-if="tab === 2">
            <p>Доставка</p>
            <div class="flex items-center pt-[15px]">
              <div class="flex items-center">
                <input
                  @click="deliver = 1"
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Доставка курьером</label
                >
              </div>
              <div class="flex items-center ml-[30px]">
                <input
                  @click="deliver = 2"
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Самовывоз</label
                >
              </div>
            </div>
            <div v-if="deliver === 1">
              <p class="font-bold pt-[15px]">Введите адрес доставки</p>

              <div class="flex gap-8 mt-[20px]">
                <div class="">
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Город</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Город"
                    required
                  />
                </div>
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Корпус</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="w-[380px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Корпус"
                    required
                  />
                </div>
              </div>

              <div class="flex gap-8 mt-[20px]">
                <div class="">
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Улица</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Улица"
                    required
                  />
                </div>
                <div class="flex gap-6">
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Дом</label
                    >
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Дом"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Квартира</label
                    >
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Квартира"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="deliver === 2">
              <p class="font-bold pt-[15px]">Пункт доставки</p>
              <p class="pt-[7px]">Москва, ул Первомайская 14</p>

              <p class="pt-[7px]">Срок хранения заказа 14 дней</p>
            </div>
            <button
              @click="tabItem(3)"
              type="button"
              class="mt-[25px] w-[180px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              ДАЛЕЕ
            </button>
          </div>
          <div v-if="tab === 3">
            <p class="font-bold">Оплата</p>
            <p class="pt-[20px]">Выберите подходящий вам вариант оплаты:</p>
            <div class="flex items-center pt-[15px]">
              <div class="flex items-center">
                <input
                  @click="pay = 1"
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Оплата при получении</label
                >
              </div>
              <div class="flex items-center ml-[30px]">
                <input
                  @click="pay = 2"
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Оплата онлайн</label
                >
              </div>
            </div>
            <div v-if="pay === 1" class="pt-[30px]">
              <button
                type="button"
                class="focus:outline-none text-white bg-[#EAB308] hover:bg-[#EAB308] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
              >
                ПОДТВЕРДИТЬ ЗАКАЗ
              </button>
            </div>
          </div>
        </div>
        <div class="Price bg-[#212526] text-white h-[250px] w-[420px]">
          <div class="text-bold text-[30px] p-[25px]">
            Итого:
            <span class="text-[#EAB308]">{{ totalSum }} тг </span>
          </div>
          <div class="text-bold text-[30px] p-[25px]">
            Товаров:
            <span class="text-[#EAB308]"> {{ calculateTotalQuantity() }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from "../firebase/index";
import {
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";

export default {
  data() {
    return {
      currentUser: null, // Текущий пользователь
      firstName: null, // Имя пользователя
      lastName: null, // Фамилия пользователя
      items: null, // Элементы корзины
      id: null, // Идентификатор пользователя
      tab: 1, // Текущая вкладка
      deliver: 1, // Опция доставки
      pay: 1, // Опция оплаты
    };
  },
  methods: {
    calculateTotalQuantity() {
      // Метод для вычисления общего количества товаров в корзине
      if (this.items) {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
      }
      return 0;
    },
    tabItem(index) {
      // Метод для изменения текущей вкладки
      this.tab = index;
    },
    updateTotalPrice(item) {
      // Метод для обновления общей стоимости товара
      item.totalPrice = item.price * item.quantity;
    },
    async deleteItem(item) {
      // Асинхронный метод для удаления товара из корзины
      const docRef = doc(db, "users", this.id);
      await updateDoc(docRef, {
        cart: arrayRemove(item),
      });
    },
  },
  computed: {
    totalSum() {
      // Вычисляемое свойство для получения общей суммы заказа
      if (this.items) {
        return this.items.reduce((sum, item) => sum + item.totalPrice, 0);
      }
      return 0;
    },
  },
  async created() {
    // Хук created: выполняется при создании компонента
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user;
        this.id = user.uid;

        // Получение профиля пользователя
        const userDocRef = doc(db, "userProfile", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          this.loginCount = userDoc.data().loginCount || 0;
          this.firstName = userDoc.data().firstName;
          this.lastName = userDoc.data().lastName;
        } else {
          console.log("No such document!");
        }

        // Получение данных корзины пользователя
        const docRef = doc(db, "users", this.id);
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.items = docSnap.data().cart;
          } else {
            console.log("No such document!");
          }
        });

        // Добавление функции отписки от обновлений в экземпляр компонента
        this.unsubscribe = unsubscribe;
      }
    });
  },
  beforeUnmount() {
    // Выполняется перед размонтированием компонента
    // Отписываемся от прослушивания изменений в базе данных
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
};
</script>

<style lang="scss" scoped></style>
