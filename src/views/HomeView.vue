<template>
  <div class="home-view">
    <div class="home-view__logo">
      <img class="home-view__logo-img" src="../assets/logo.svg" alt="Двач" />
    </div>
    <h2 class="home-view__description">Оставайся дома. Снова.</h2>
    <p class="home-view__text">
      Два.ч - это система форумов, где можно общаться быстро и свободно, где
      любая точка зрения имеет право на жизнь. Здесь нет регистрации и
      подписываться не нужно, хотя это не избавляет вас от необходимости
      соблюдать правила. Все форумы (кроме /Б/реда), а их список находится
      снизу, имеют собственную чётко ограниченную тематику. Словом, всё, что не
      запрещено правилами отдельно взятого форума и относится к его тематике, на
      этом форуме разрешено.
    </p>
    <p class="home-view__text">
      На данный момент открыто 164 досок. Общая скорость постинга на имиджборде
      2102, за все время существования было оставлено 652346101 постов.
    </p>
    <div v-for="(value, key) in filteredBoards">
      <h3>{{ key }}</h3>
      <div v-for="category in value">
        <RouterLink
          :to="{
            name: 'board',
            params: {
              board: category.id,
            },
          }"
        >
          {{ category.name }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

import { useBoardsStore } from "../stores/boardsStore";

const store = useBoardsStore();
const { getBoards } = store;
const { filteredBoards } = storeToRefs(store);

onBeforeMount(() => {
  getBoards();
});
</script>

<style lang="scss">
.home-view {
  &__logo {
    display: flex;
    justify-content: center;
  }
  &__logo-img {
    width: 300px;
  }
  &__description {
    text-align: center;
  }
}
</style>
