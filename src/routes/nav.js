import { lazy } from 'react';

const nav = [
  {
    name: '首页',
    path: '/home',
    component: lazy(() => import('@/views/home')),
    meta: {
      title: '首页'
    }
  },
  {
    name: '分类',
    path: '/ls',
    component: lazy(() => import('@/views/ls')),
    meta: {
      title: '分类'
    }
  },
  {
    name: '在线工具',
    path: '/tools',
    component: lazy(() => import('@/views/tools')),
    meta: {
      title: '在线工具'
    }
  },
  {
    name: '最近更新',
    path: '/update',
    component: lazy(() => import('@/views/update')),
    meta: {
      title: '最近更新'
    }
  }
]

export default nav