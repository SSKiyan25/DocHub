<template>
  <nav
    class="bg-[#3F2E3E] dark:bg-gray-900 border-b-2 border-[#331D2C] top-0 w-full fixed height-[60px] z-10"
  >
    <div
      class="flex flex-wrap items-center justify-between max-w-screen md:mx-8 mx-auto p-4 shadow-lg"
    >
      <div class="flex flex-row">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/1.png"
            class="h-8 filter brightness-100 saturate-0"
            alt="Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-white"
            >DocHub</span
          >
        </a>
      </div>
      <div v-if="route.name !== 'Dashboard' && route.name !== 'SignUp'">
        <!---->
        <div
          class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse"
        >
          <button
            v-if="showLoginButton"
            @click="navigateToLogin"
            class="text-white dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Login
          </button>
          <a
            href="/signup"
            class="text-white bg-[#A78295] hover:bg-[#795266] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >Sign up</a
          >
        </div>
      </div>
      <div v-if="route.name === 'Dashboard'" class="text-white">
        <button @click.prevent="handleSignout">
          <span class="material-symbols-outlined"> logout </span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, defineExpose } from "vue";
import { useRoute, useRouter } from "vue-router";
import { initFlowbite } from "flowbite";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/init.js";

onMounted(() => {
  initFlowbite();
});

const showLoginButton = ref(true);
const route = useRoute();
const router = useRouter();

watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/login") {
      showLoginButton.value = false;
    } else {
      showLoginButton.value = true;
    }
  }
);

const handleSignout = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out");
      router.push({ name: "Login" });
    })
    .catch((error) => {
      console.log("Error signing out: ", error);
    });
};

function navigateToLogin() {
  showLoginButton.value = false;
  router.push("/login");
}

defineExpose({
  showLoginButton,
  navigateToLogin,
});
</script>
