<script setup>
defineProps(["post"]);
</script>

<template>
  <div class="post" :class="{ 'post--one-line': post?.files?.length > 1 }">
    <div
      class="post__image-wrapper"
      :class="{
        'post__image-wrapper--one-line': post?.files?.length > 1,
      }"
    >
      <div v-for="file in post.files">
        <img class="post__image" :src="'https://2ch.hk/' + file.path" alt="" />
      </div>
    </div>

    <!-- {{ post }} -->
    <Card v-if="post.posts_count" class="post__item post__item--first">
      <template #title>
        <div>
          <router-link
            v-if="post.posts_count"
            :to="{
              name: 'post',
              params: {
                postNum: post.num,
              },
            }"
            >Открыть</router-link
          >
        </div>

        Пост {{ post.name }} {{ post.date }} {{ post.email }} №{{ post.num }} 👀
        {{ post.views }}</template
      >
      <template #content>
        <p v-html="post.comment"></p>
      </template>
    </Card>
    <Card v-else class="post__item">
      <template #content>
        <p v-html="post.comment"></p>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.post {
  display: flex;
  width: 100%;

  &--one-line {
    flex-direction: column;
  }
  &__image {
    max-width: 400px;
  }
  &__image-wrapper {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  &__item {
    margin-bottom: 10px;
    width: 100%;
  }
}
</style>
