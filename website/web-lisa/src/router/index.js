import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Portf from '../views/Portf.vue';
import Contact from '../views/Contact.vue';
import Samenwerking from '../views/Samenwerking.vue';

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Home,
            name: "Home"
        },
        {
            path: '/about',
            component: About,
            name: "About"
        },
        {
            path: '/portfolio',
            component: Portf,
            name: "Portfolio"
        },
        {
            path: '/contact',
            component: Contact,
            name: "Contact"
        },
        {
            path: '/samenwerking',
            component: Samenwerking,
            name: "Samenwerking"
        }
    ]
});

export default router;