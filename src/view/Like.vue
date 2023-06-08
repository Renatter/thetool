<template>
  <div class="h-full">
    <h1 class="text-[50px]">Избранные</h1>

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
                    class="w-[50px] h-[50px] mr-4 object-scale-down"
                  />
                  <span class="font-medium text-gray-900 dark:text-white">{{
                    item.name
                  }}</span>
                </td>
              </router-link>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">${{ item.price }}</td>

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
      items: null, // Избранные элементы
      id: null, // ID пользователя
    };
  },
  methods: {
    updateTotalPrice(item) {
      // Обновление общей стоимости товара
      item.totalPrice = item.price * item.quantity;
    },
    async deleteItem(item) {
      // Удаление элемента из избранного
      const docRef = doc(db, "likes", this.id);
      await updateDoc(docRef, {
        likes: arrayRemove(item),
      });
    },
  },
  computed: {
    totalSum() {
      // Вычисление общей суммы стоимости всех избранных элементов
      if (this.items) {
        return this.items.reduce((sum, item) => sum + item.totalPrice, 0);
      }
      return 0;
    },
  },
  async created() {
    // Обработчик события создания компонента
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user;
        this.id = user.uid;
        const userDocRef = doc(db, "userProfile", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          this.loginCount = userDoc.data().loginCount || 0;
          this.firstName = userDoc.data().firstName;
          this.lastName = userDoc.data().lastName;
        } else {
          console.log("No such document!");
        }

        const docRef = doc(db, "likes", this.id);
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.items = docSnap.data().likes;
          } else {
            console.log("No such document!");
          }
        });

        // Добавление функции отписки от обновлений к экземпляру компонента
        this.unsubscribe = unsubscribe;
      }
    });
  },
  beforeUnmount() {
    // Отписка от обновлений при размонтировании компонента
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
};
</script>

<style lang="scss" scoped></style>
