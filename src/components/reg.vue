<template>
  <div class="h-screen flex items-center justify-center">
    <div class="">
      <img src="../assets/logotip-1.png" class="ml-[120px]" alt="" />
      <p class="text-xl font-bold mb-2">Электронная почта</p>

      <input
        v-model="email"
        type="text"
        class="border border-gray-300 rounded px-4 py-2 mb-2 w-[400px]"
      />
      <p class="text-xl font-bold mb-2">Пароль</p>
      <input
        v-model="pass"
        type="text"
        class="border border-gray-300 rounded px-4 py-2 mb-2 w-[400px]"
      />
      <p class="text-xl font-bold mb-2">Имя</p>
      <input
        v-model="firstName"
        type="text"
        class="border border-gray-300 rounded px-4 py-2 mb-2 w-[400px]"
      />
      <p class="text-xl font-bold mb-2">Фамилия</p>
      <input
        v-model="lastName"
        type="text"
        class="border border-gray-300 rounded px-4 py-2 mb-2 w-[400px]"
      />
      <div>
        <button
          @click="register"
          class="bg-[#1D4ED8] hover:bg-[#1D4ED8] w-full text-white font-bold py-2 px-4 rounded"
        >
          Регистрация
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/index";

export default {
  data() {
    return {
      email: "", // Поле электронной почты пользователя
      pass: "", // Поле пароля пользователя
      firstName: "", // Поле имени пользователя
      lastName: "", // Поле фамилии пользователя
    };
  },
  methods: {
    async register() {
      try {
        // Создание пользователя с помощью адреса электронной почты и пароля
        await createUserWithEmailAndPassword(auth, this.email, this.pass);

        // Аутентификация пользователя с помощью адреса электронной почты и пароля
        await signInWithEmailAndPassword(auth, this.email, this.pass);

        // Установка текущего пользователя в переменную currentUser
        this.currentUser = auth.currentUser;

        // Создание профиля пользователя в коллекции "userProfile"
        await setDoc(doc(db, "userProfile", this.currentUser.uid), {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        });
      } catch (error) {
        console.log("Ошибка при регистрации пользователя:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
