import { createWebHistory, createRouter } from "vue-router";
import Profile from "./components/Profile.vue";
import About from "./components/About.vue";
import Work from "./components/Work.vue";
import Contact from "./components/Contact.vue";
const routes = [
    {
        path: "/profile",
        component: Profile,
        // path: "/경로",
        // component: import해온 컴포넌트,
    },
    {
        path: "/About",
        component: About,
    },
    {
        path: "/Work",
        component: Work,
    },

    {
        path: "/contact",
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;