<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const route = useRoute();
import { useBoardsStore } from "../stores/boardsStore";

import Post from "../components/Post.vue";

const store = useBoardsStore();
const { getBoard } = store;
const { threads } = storeToRefs(store);

onMounted(() => {
  threads, getBoard(route.params.board);
});
</script>

<template>
  <div v-for="thread in threads" class="thread-preview">
    <div v-for="post in thread.posts">
      <post :post="post" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.thread-preview {
  margin-bottom: 80px;
}
</style>
