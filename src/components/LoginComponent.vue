<template>
  <div class="flex items-center justify-center min-h-screen px-4 sm:px-0">
    <div class="items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h1 class="text-3xl font-bold mb-8 text-center">Login Your Account</h1>
      <form class="mx-auto" action="" @submit.prevent="handleLogin">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            type="email"
            v-model="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            type="password"
            v-model="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            for="remember"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Remember me</label
          >
        </div>
        <button
          type="submit"
          class="text-white bg-[#3F2E3E] hover:bg-[#A78295] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <p class="text-slate-950 text-sm mt-2">
        Don't have an account yet?
        <a
          href="/SignUp"
          @click.prevent="handleSignup"
          class="text-[#3F2E3E] hover:underline"
          >Sign up</a
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from "vue";
import { useRouter } from "vue-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/init.js";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});

const router = useRouter();
const email = ref("");
const password = ref("");

const handleLogin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((credential) => {
      const user = credential.user;
      console.log(user);
      router.push({ name: "Dashboard" });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const handleSignup = () => {
  router.push({ name: "SignUp" });
};

defineExpose({
  handleLogin,
  handleSignup,
  email,
  password,
});
</script>
