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

      <div>
        <button
          @click="register"
          class="bg-[#1D4ED8] hover:bg-[#1D4ED8] w-full text-white font-bold py-2 px-4 rounded"
        >
          Войти
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
      email: "",
      pass: "",
    };
  },
  methods: {
    async register() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.pass);
      } catch (error) {
        console.log("Ошибка при регистрации пользователя:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}

.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.button {
  background-color: #3490dc;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>
