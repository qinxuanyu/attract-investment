

export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/index/index')
    },
     {
        path: '/hd',
        name: 'hd',
        component: () => import('@/views/index/hd')
    },
]