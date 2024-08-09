<script setup>
import { useRouter } from "vue-router";

defineProps(["items"]);

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <Menubar :model="items">
    <template #start>
      <img class="menu-bar__logo" src="../assets/logo.svg" alt="Двач" />
    </template>
    <template #item="{ item, props, hasSubmenu }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <router-link v-else-if="item.back" custom>
        <a v-ripple v-bind="props.action" @click.prevent="goBack">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a
        v-else
        v-ripple
        :href="item.url"
        :target="item.target"
        v-bind="props.action"
      >
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
      </a>
    </template>
  </Menubar>
</template>

<style scoped lang="scss">
:global(.p-menubar) {
  // max-width: 1280px;
  text-align: center;
  display: flex;
  margin: 0 auto !important;
  justify-content: center;
  width: 100%;
  position: sticky;
  top: 0;
}

.menu-bar {
  &__logo {
    max-width: 100px;
    width: 100px;
  }
}
</style>
