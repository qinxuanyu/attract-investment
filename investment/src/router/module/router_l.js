export default [{
    path: '/',
    name: 'home',
    component: () =>
      import ('@/views/index/index')
  },
  {
    path: '/hd',
    name: 'hd',
    component: () =>
      import ('@/views/index/hd')
  },
  {
    path: '/dj',
    name: 'dj',
    component: () =>
      import ('@/views/index/dj')
  },
  {
    path: '/zyxw',
    name: 'zyxw',
    component: () =>
      import ('@/views/Details-page/zyxw')
  },
  {
    path: '/zshd',
    name: 'zshd',
    component: () =>
      import ('@/views/Details-page/zshd')
  },
  {
    path: '/zyfu-zs',
    name: 'zyfu-zs',
    component: () =>
      import ('@/views/Details-page/zyfu-zs')
  },
    {
    path: '/zyfu-index',
    name: 'zyfu-index',
    component: () =>
      import ('@/views/zyfu-xq/index')
  },
]
