import React from 'react'

import routerUtils from '../../lib/routerUtils'
import SignIn from './SignIn.react'

import './homeController.styl'

export default class HomeController extends React.Component {
  constructor(props) {
    super(props)
    this.onUpdate = this.onUpdate.bind(this)
  }
  componentDidMount() {
    let token = localStorage.getItem('authToken')
    
    if (token) {
      routerUtils.setLocation('/vote')
    }
    else if (this.props.location.query['token']) {
      localStorage.setItem('authToken', this.props.location.query['token'])
      routerUtils.setLocation('/vote')
    }
    else {
      routerUtils.setLocation('/login')
    }
  }

  render() {
    return(
      <div className='home'>
        {routerUtils.childrenWithProps(this.props.children)}
      </div>
    )
  }
}
