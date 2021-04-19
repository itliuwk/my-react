import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import menus from './config'
import Header from '@/components/header'


function getChildren(arr, newarr) {
  let i = 0
  let len = arr.length
  for (; i < len; i++) {
    if (!newarr.includes(arr[i].name)) {

      newarr.push(arr[i])
    }
    if (arr[i].children && arr[i].children.length > 0) {
      getChildren(arr[i].children, newarr)
    }
  }
  return newarr
}
let newMenus = []
getChildren(menus, newMenus)



const RouteWithSubRoutes = route => {
  if (!route.path) return <div>无路径</div>
  return (<Route
    exact
    path={route.path}
    render={props => (
      route.redirect ?
        <Redirect push to={route.redirect} from={route.path}></Redirect> :
        <route.component {...props} routes={route.routes} />
    )}
  />)
}


const RoutesMenus = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <Header />
        <article>
          {newMenus.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}
        </article>
      </Router>
    </Suspense>
  )
}

export default RoutesMenus