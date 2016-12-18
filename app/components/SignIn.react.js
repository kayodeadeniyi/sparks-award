import React from 'react'
import './signin.styl'

export default class SignIn extends React.Component {
  render() {
    return(
      <div className='signin-area'>
        <span className='logo'>
          <img src='http://mradeybee.com/wp-content/uploads/2016/06/Andela-logo-landscape-blue-400px.png' className='logo-img rotate'/>
          <div className='login-logo-text'> A </div>
          <div className='title-text'>Awards</div>
        </span>
        <p className='quote'>"When the Queen says 'well done,' it means so much - Prince William"</p>
        <a href={`${API_HOST}/auth/google`} className='login-btn'>Login with Andela email</a>
      </div>
    )
  }
}
