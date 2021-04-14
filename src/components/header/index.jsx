import {
  NavLink
} from 'react-router-dom'
import './index.less'

const Header = () => {
  let nav = [
    {
      name: '首页',
      path: '/',
    },
    {
      name: '分类',
      path: '',
    },
    {
      name: '最近更新',
      path: '',
    },
    {
      name: '在线工具',
      path: '',
    },
    {
      name: '排行榜',
      path: '',
    },
  ]
  return (
    <div className='nav'>
      {nav.map(item => {
        return (
          <NavLink to={item.path}></NavLink>
        )
      })}
    </div>
  )
}

export default Header