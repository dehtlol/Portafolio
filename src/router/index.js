import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../view/home/home.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/:pathMatch(.*)*", redirect: "/" },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
