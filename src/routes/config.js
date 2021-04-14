
import Nav from './nav'
console.log('Nav: ', Nav);
const menus = [
  {
    name: '首页',
    path: '/',
    redirect: '/home',
    meta: {
      name: '首页'
    },
    children: [...Nav]
  },

]

export default menus