
import Nav from './nav'
import { lazy } from 'react';
const menus = [
  {
    name: '首页',
    path: '/',
    redirect: '/home',
    meta: {
      title: '首页'
    },
    children: [...Nav]
  },
  {
    name: '同步数据',
    path: '/crawling',
    component: lazy(() => import('@/views/crawling')),
    meta: {
      title: '同步数据'
    },
  },

]

export default menus