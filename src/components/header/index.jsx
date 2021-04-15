

import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";

import './index.less'
import menus from '@/routes/nav'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  async componentDidMount() {


  }

  toPath = (item) => {
    // this.props.history.push(item.path);
    console.log('this.props: ', this.props);

  }
  render() {
    return (
      <header className='header'>
        <div className='nav'>
          <a href="/" class="logo">
            <img src="//static.daohangtx.com/static/img/logo.png" alt="" />
          </a>
          <div className='nav-content'>
            {menus.map(item => {
              return (
                <NavLink key={item.path} to={item.path}>{item.name}</NavLink>
              )
            })}
          </div>
          <div class="time-winter">
            <div class="time"><span>04</span> <small>月</small> <span>14</span> <small>16:28:31 周三</small></div>
            <a class="winter" href="/html/article/82330.html">
              加入官方Q群<img src="//static.daohangtx.com/static/img/qq.png" alt="" />
            </a>
          </div>
        </div>
      </header>
    )
  }
}


export default Header