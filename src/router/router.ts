const routes = [
    {
        path: '/',
        component: () => import('@/views/index/index.vue'),
        redirect: '/main',
        meta: { label: '主页' },
        children: [
            {
                path: '/main',
                name: '工作台',
                component: () => import('@/views/main/main.vue'),
                meta: { label: '工作台', openKeys: ['0'], selectKeys: ['0_0'] },
            },
            {
                path: '/data',
                name: '数据可视化',
                redirect: '/data/analyse',
                meta: { label: '数据可视化' },
                children: [
                    {
                        path: 'analyse',
                        name: '分析页',
                        component: () => import('@/views/data/analyse.vue'),
                        meta: {
                            label: '分析页',
                            openKeys: ['1'],
                            selectKeys: ['1_0'],
                        },
                    },
                    {
                        path: 'mutil',
                        name: '多维数据分析',
                        component: () => import('@/views/data/mutil.vue'),
                        meta: {
                            label: '多维数据分析',
                            openKeys: ['1'],
                            selectKeys: ['1_1'],
                        },
                    },
                ],
            },
            {
                path: '/personal',
                name: '个人中心',
                redirect: '/personal/info',
                meta: {
                    label: '个人中心',
                },
                children: [
                    {
                        path: 'info',
                        name: '个人信息',
                        component: () => import('@/views/personal/info.vue'),
                        meta: {
                            label: '个人信息',
                            openKeys: ['2'],
                            selectKeys: ['2_0'],
                        },
                    },
                    {
                        path: 'setting',
                        name: '个人设置',
                        component: () => import('@/views/personal/setting.vue'),
                        meta: {
                            label: '个人设置',
                            openKeys: ['2'],
                            selectKeys: ['2_1'],
                        },
                    },
                ],
            },
        ],
    },
]
export default routes
