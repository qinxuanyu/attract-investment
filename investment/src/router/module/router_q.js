export default [
    {
        path: '/news',
        name: 'news',
        component: () => import( '@/views/news/index.vue')
    },
    {
        path: '/activity',
        name: 'activity',
        component: () => import('@/views/activity/index.vue')
    },
    {
        path: '/serve',
        name: 'serve',
        component: () => import( '@/views/serve/index.vue')
    },
    {
        path: '/serve_info',
        name: 'serveInfo',
        component: () => import( '@/views/serve/info.vue')
    },
]