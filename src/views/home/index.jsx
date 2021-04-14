import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHomeList } from './actions'

@connect(({ home }) => ({
  ...home
}), (dispatch) => ({
  dispatchGetHomeList(params) {
    return dispatch(getHomeList(params))
  }
}))
class Home extends Component {
  state = {}
  async componentDidMount() {
    let params = {
      page: 1,
    }
    this.props.dispatchGetHomeList(params).then(res => {
      console.log('res: ', res.value);

    })
  }

  render() {
    return (
      <div>
        <span>Home12</span>
      </div>
    )
  }
}


export default Home