import { lazy } from 'react';

const nav = [
  {
    name: '首页',
    path: '/home',
    component: lazy(() => import('@/views/home')),
    meta: {
      name: '首页'
    }
  },
  {
    name: '分类',
    path: '/ls',
    component: lazy(() => import('@/views/ls')),
    meta: {
      name: '分类'
    }
  },
  {
    name: '排行榜',
    path: '/rank',
    component: lazy(() => import('@/views/rank')),
    meta: {
      name: '排行榜'
    }
  },
  {
    name: '在线工具',
    path: '/tools',
    component: lazy(() => import('@/views/tools')),
    meta: {
      name: '在线工具'
    }
  },
  {
    name: '最近更新',
    path: '/update',
    component: lazy(() => import('@/views/update')),
    meta: {
      name: '最近更新'
    }
  }
]

export default nav