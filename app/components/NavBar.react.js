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
          Award
        </div>
        <div className='status'>
          login
        </div>
      </div>
    )
  }
}
