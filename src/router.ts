import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import BoardView from "./views/BoardView.vue";
import ThreadView from "./views/ThreadView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/:board", component: BoardView, name: "board" },
  { path: "/:board/:postNum", component: ThreadView, name: "post" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
