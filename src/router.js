import { createWebHistory, createRouter } from "vue-router";
import About from "./components/About.vue";
import Publishing from "./components/Publishing"
import Work from "./components/Work.vue"
const routes = [
    {
        path: "/",
        component: About,
    },
    {
        path: "/work",
        component: Work,
    },
    {
        path: "/publishing",
        component: Publishing,
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;