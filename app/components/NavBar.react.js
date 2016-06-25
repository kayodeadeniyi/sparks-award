import React from 'react'
import './navbar.styl'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return(
      <div className='nav-bar'>
        <div className='logo'>
          <img src='https://skilltree.andela.com/img/andela.png' className='logo-img rotate'/>
          <div className='logo-text'>A</div>
          <div className="page-title">Awards</div>
        </div>
        <div className='status'>
          Logout
        </div>
      </div>
    )
  }
}
