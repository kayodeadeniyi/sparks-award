import React from 'react'
import './signin.styl'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quote: "I don't need an award to inspire me to keep making music. - Jake Bugg"
    }
  }

  render() {
    return(
      <div className='signin-area'>
        <span className='logo'>
          <img src='http://mradeybee.com/wp-content/uploads/2016/06/Andela-logo-landscape-blue-400px.png' className='logo-img'/>
          <div className='login-logo-text'> A </div>
          <div className='title-text'>Awards</div>
        </span>
        <p className='quote'>{this.state.quote}</p>
        <a href='http://localhost:8080/vote' className='login-btn'>Login with Andela email</a>
      </div>
    )
  }
}
