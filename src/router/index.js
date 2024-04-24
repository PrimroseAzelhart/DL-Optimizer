import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const Block = () => import('@/views/Block.vue');
const Setting = () => import('@/views/Setting.vue');

const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '/block',
                name: 'Block',
                component: Block
            },
            {
                path: '/setting',
                name: 'Setting',
                component: Setting
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/block'
    }
];

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes
});

export default router;
