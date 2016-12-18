import React from 'react'

import AuthActions from '../actions/AuthActions'
import routerUtils from '../../lib/routerUtils'
import { Link, IndexLink } from 'react-router'

import './navbar.styl'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
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
          <div className='nav-link-container'>
            <IndexLink to='vote' activeClassName='active' className='nav-link'>Vote</IndexLink>
            <Link to='leaderboard' activeClassName='active' className='nav-link'>Leaderboard</Link>
          </div>
        </div>
        <div className='right-column'>
          <div className='user-details'>
            <img src={this.props.currentUser.avatar_url} className='user-avatar'/>
            <span>{this.props.currentUser.name}</span>
          </div>
          <a className='status' onClick={this.signOut}>Sign out</a>
        </div>
      </div>
    )
  }
}

NavBar.defaultProps = {
  currentUser: {}
}
