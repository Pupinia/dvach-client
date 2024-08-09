import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import App from "./App.vue";
import router from "./router.js";

const pinia = createPinia();

const app = createApp(App);
app
  .use(router)
  .use(pinia)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .mount("#app");
