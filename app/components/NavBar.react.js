import React from 'react'

import AuthActions from '../actions/AuthActions'
import routerUtils from '../../lib/routerUtils'

import './navbar.styl'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  signOut() {
    let token = localStorage.getItem('authToken')
    localStorage.removeItem('authToken')
    AuthActions.signOut(token)
    routerUtils.replace('login')
  }

  render() {
    return(
      <div className='nav-bar'>
        <div className='logo'>
          <img src='https://skilltree.andela.com/img/andela.png' className='logo-img rotate'/>
          <div className='logo-text'>A</div>
          <div className="page-title">Awards</div>
        </div>
        <a className='status' onClick={this.signOut}>Sign out</a>
      </div>
    )
  }
}
