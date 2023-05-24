<template>
  <div class="h-full bg-white">
    <h1 class="text-[50px]">Корзина</h1>
    {{ currentUser.uid }}
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
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">${{ item.price }}</td>
              <td class="px-6 py-4">
                <input
                  type="number"
                  min="0"
                  v-model="item.quantity"
                  @change="updateTotalPrice(item)"
                  class="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </td>
              <td class="px-6 py-4">${{ item.totalPrice }}</td>
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
    <div class="mt-4">Total: ${{ totalSum }}</div>
    <button @click="show">add</button>
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
      currentUser: null,
      firstName: null,
      lastName: null,
      items: null,
      id: null,
    };
  },
  methods: {
    updateTotalPrice(item) {
      item.totalPrice = item.price * item.quantity;
    },
    async deleteItem(item) {
      const docRef = doc(db, "users", this.id);
      await updateDoc(docRef, {
        cart: arrayRemove(item),
      });
    },
  },
  computed: {
    totalSum() {
      if (this.items) {
        return this.items.reduce((sum, item) => sum + item.totalPrice, 0);
      }
      return 0;
    },
  },
  async created() {
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
        const docRef = doc(db, "users", this.id);
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.items = docSnap.data().cart;
          } else {
            console.log("No such document!");
          }
        });

        // Add unsubscribe function to component instance
        this.unsubscribe = unsubscribe;
      }
    });
  },
  beforeUnmount() {
    // Unsubscribe from the snapshot listener when component is unmounted
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
};
</script>

<style lang="scss" scoped></style>
