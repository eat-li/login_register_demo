import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/login' // 默认重定向到 /login
        },
        {
            name: 'login',
            path: '/login',
            component: () => import('@/views/LoginPage/index.vue')
        },
        {
            name: 'menu',
            path: '/menu',
            component: () => import('@/views/MenuPage/index.vue')
        }
    ]
});

export default router;