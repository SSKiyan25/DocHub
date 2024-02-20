<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen px-4 sm:px-0">
    <div class="items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h1 class="text-3xl font-bold mb-8 text-center">Signup</h1>
      <form class="mx-auto" @submit.prevent ="handleSignup">
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" v-model="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
        </div>
        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" v-model="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div class="mb-5">
          <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
          <input type="password" v-model="repeatPassword" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>  
        <button type="submit" class="text-white bg-[#3F2E3E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
      </form>
      <p class="text-slate-950 text-sm mt-6 text-center underline-offset-[3px]">
        <a href="#" @click.prevent="handleLogin" class="text-[#3F2E3E] hover:text-[#A78295] hover:underline">Already have an account?</a>
        <p v-if="passwordMismatch" class="text-red-500">Passwords do not match.</p>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref, defineExpose} from 'vue'
  import { useRouter } from 'vue-router';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../firebase/init.js';
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'
  import { doc,setDoc } from 'firebase/firestore';
  import { db } from '../firebase/init.js';
  
  onMounted(() => {
    initFlowbite();
  })

  const router = useRouter();
  const email = ref('');
  const password = ref('');
  const repeatPassword = ref('');
  const passwordMismatch = ref(false);

  const handleSignup = () => {
    if (password.value !== repeatPassword.value) {
      passwordMismatch.value = true;
      return;
    }
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((credential) => {
      setDoc(doc(db, "users", credential.user.uid), {
        email: credential.user.email,
        uid: credential.user.uid
      }).then(() => {
        console.log("User details added to firestore");
        router.push({name: 'Dashboard'});
      }).catch((error) => {
        console.error("Error adding user details: ", error);
      });
    })
    .catch((error)=> {
      if(error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      }else {
        console.log(error.message);
      }
    });
  }
  const handleLogin = () => {
    router.push({name: 'Login'});
  }

  defineExpose({
    handleLogin,
    handleSignup,
    email,
    password,
    repeatPassword,
    passwordMismatch
  });

</script>