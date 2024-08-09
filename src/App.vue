<script setup>
// import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import MenuBar from "./components/MenuBar.vue";

const links = ref([
  {
    label: "Главная",
    icon: "pi pi-home",
    route: "/",
  },
  {
    label: "Назад",
    icon: "pi pi-arrow-left",
    back: true,
  },
]);
</script>

<template>
  <menu-bar :items="links" />

  <main class="container">
    <RouterView />
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import "primeicons/primeicons.css";

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
