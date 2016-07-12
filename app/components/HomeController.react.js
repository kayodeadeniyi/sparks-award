import React from 'react'

import routerUtils from '../../lib/routerUtils'
import { Link } from 'react-router'
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
    AuthStore.addChangeListener(this.onUpdate)
    if (this.props.location.pathname !== '/login') {
      if (this.props.location.query['token']) {
        AwardActions.fetchInitialData(this.props.location.query['token'])
      } else {
        window.location = '/login'
      }
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
