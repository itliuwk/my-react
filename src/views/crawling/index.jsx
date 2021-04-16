import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';


import { getLsCreate, getLsCreateUpdate, getLsAllDelete, getLsListCreate, getNavCreate, getToolsCreate } from './actions'

@connect(({ crawling, home }) => ({
  ...crawling,
  home
}), (dispatch) => ({
  dispatchGetLsCreate() {
    return dispatch(getLsCreate())
  },
  dispatchGetLsCreateUpdate() {
    return dispatch(getLsCreateUpdate())
  },
  dispatchGetLsAllDelete() {
    return dispatch(getLsAllDelete())
  },
  dispatchGetLsListCreate() {
    return dispatch(getLsListCreate())
  },
  dispatchGetNavCreate() {
    return dispatch(getNavCreate())
  },
  dispatchGetToolsCreate() {
    return dispatch(getToolsCreate())
  },
}))
class Crawling extends Component {
  state = {}

  componentWillUnmount() {

  }

  crawling = async () => {
    this.props.dispatchGetLsCreate()
    this.props.dispatchGetLsCreateUpdate()
    this.props.dispatchGetNavCreate()
    this.props.dispatchGetToolsCreate()
  }

  del = () => {
    this.props.dispatchGetLsAllDelete()
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={() => this.crawling()}>同步分类数据</Button>
        

        <Button type="primary" danger onClick={() => this.del()}>删除分类</Button>
      </div>
    )
  }
}


export default Crawling