import { createRouter, createWebHistory } from "vue-router";


const scrollBehavior = () => {
    return { top: 0 }
};
const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../layouts/default.vue"),

        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                component: () => import("../pages/dashboard.vue"),
            }
        ]
    },
    // {
    //     path: "/about",
    //     name: "about",
    //     component: () => import("../pages/About.vue"),
    // },
    

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior,
});

export default router;
