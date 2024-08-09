<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

import Post from "../components/Post.vue";

import { useThreadStore } from "../stores/threadStore.ts";
const route = useRoute();
const store = useThreadStore();
const { getThread } = store;
const { thread } = storeToRefs(store);

onMounted(() => {
  getThread(route.params.board, route.params.postNum);
});
</script>

<template>
  <div v-for="threads in thread?.threads">
    <div v-for="posts in threads">
      <post v-for="post in posts" :post="post" />
    </div>
  </div>
</template>
