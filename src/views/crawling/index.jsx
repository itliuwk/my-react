import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getLsCreate, getLsCreateUpdate, getLsAllDelete, getLsListCreate, getNavCreate, getToolsCreate } from './actions'

@connect(({ crawling }) => ({
  ...crawling
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

  render() {
    return (
      <div>
        <span>爬取</span>
      </div>
    )
  }
}


export default Crawling