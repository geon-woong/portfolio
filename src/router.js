import { createWebHistory, createRouter } from "vue-router";
import Profile from "./components/Profile.vue";
import About from "./components/About.vue";
import Publishing from "./components/Publishing"
import Contact from "./components/Contact.vue";
const routes = [
    {
        path: "/",
        component: Profile,
        // path: "/경로",
        // component: import해온 컴포넌트,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/work",
        component: Publishing,
    },
    {
        path: "/contact",
        component: Contact,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;