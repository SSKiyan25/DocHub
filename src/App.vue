<script setup lang="ts">
import Navigation from "../src/components/NavigationBar.vue";
import Footer from "../src/components/Footer.vue";
import { RouterView } from "vue-router";

import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <Navigation />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
/* For desktop: */
.container {
  width: 75%;
}

/* For tablets: */
@media (max-width: 1024px) {
  .container {
    width: 100%;
  }
}

/* For mobile phones: */
@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}
</style>
