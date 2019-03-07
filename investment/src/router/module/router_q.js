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
    {
        path: '/garden',  //园区详情
        name: 'garden',
        component: () => import( '@/views/serve/garden.vue')
    },
    {
        path: '/about',  //联系我们
        name: 'about',
        component: () => import( '@/views/index/about.vue')
    },
    {
        path: '/dynamic',  //三圈动态
        name: 'dynamic',
        component: () => import( '@/views/dynamic/index.vue')
    },
]