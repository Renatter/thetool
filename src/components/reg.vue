<template>
  <div>
    <input v-model="email" type="text" />
    <input v-model="pass" type="text" />
    <button @click="register">enter</button>
  </div>
</template>

<script>
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/index";
export default {
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    async register() {
      await createUserWithEmailAndPassword(auth, this.email, this.pass);
    },
  },
};
</script>

<style lang="scss" scoped></style>
