import React from 'react'

import routerUtils from '../../lib/routerUtils'
import SignIn from './SignIn.react'

import AuthActions from '../actions/AuthActions'
import AwardActions from '../actions/AwardActions'
import AuthStore from '../stores/AuthStore'
import './homeController.styl'

export default class HomeController extends React.Component {
  constructor(props) {
    super(props)
    this.onUpdate = this.onUpdate.bind(this)
  }
  componentDidMount() {
    var token = localStorage.getItem('authToken')
    if (token) {
      routerUtils.replace('vote')
    }
    else if (this.props.location.query['token']) {
      localStorage.setItem('authToken', this.props.location.query['token'])
      routerUtils.replace('vote')
    }
    else {
      routerUtils.replace('login')
    }
  }
  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onUpdate)
  }
  onUpdate() {
    var storeData = AwardStore.getState()
  }

  render() {
    return(
      <div className='home'>
        {routerUtils.childrenWithProps(this.props.children)}
      </div>
    )
  }
}
