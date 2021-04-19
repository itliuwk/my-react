import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHomeList, getNavList } from './actions'
import Nav from '@/components/home/nav'

@connect(({ home }) => ({
  ...home
}), (dispatch) => ({
  dispatchGetHomeList(params) {
    return dispatch(getHomeList(params))
  },
  dispatchGetNavList(params) {
    return dispatch(getNavList(params))
  }
}))
class Home extends Component {
  state = {
    navData: []
  }
  async componentDidMount() {
    // let params = {
    //   page: 1,
    // }
    // this.props.dispatchGetHomeList(params).then(res => {
    //   console.log('res: ', res.value);
    // })

    this.props.dispatchGetNavList().then(res => {
      this.setState({
        navData: res.value
      })
    })
  }

  render() {
    let { navData } = this.state
    return (
      <div>
        <Nav navData={navData} />
      </div>
    )
  }
}


export default Home