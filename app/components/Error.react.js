import React from 'react'
import routerUtils from '../../lib/routerUtils'

import './error.styl'

export default class Error extends React.Component {
  constructor(props) {
    super(props)
  }
  resetToken() {
    localStorage.removeItem('authToken')
    routerUtils.setLocation('/')
  }

  render() {
    return(
      <div className='error'>
        <h1>An error occurred</h1>
        <center>Try to contact the owner of this application or click <a onClick={this.resetToken}>here</a> to go to homepage</center>
      </div>
    )
  }
}
