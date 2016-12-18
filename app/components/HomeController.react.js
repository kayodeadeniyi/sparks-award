import React from 'react'

import routerUtils from '../../lib/routerUtils'
import SignIn from './SignIn.react'
import NavBar from './NavBar.react'
import Footer from './Footer.react'
import AwardActions from '../actions/AwardActions'
import AwardStore from '../stores/AwardStore'
import $ from 'jquery'

import './homeController.styl'

export default class HomeController extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      error: false,
      login: false
    }

    this.onUpdate = this.onUpdate.bind(this)
  }
  componentWillMount() {
    let token = localStorage.getItem('authToken')
    if (token) {
      AwardActions.fetchInitialData(token)
      this.setState({login: true})
      if (this.props.location.pathname === '/')
        routerUtils.replace('/vote')
    }
    else if (this.props.location.query['token']) {
      localStorage.setItem('authToken', this.props.location.query['token'])
      AwardActions.fetchInitialData(this.props.location.query['token'])
      this.setState({login: true})
      routerUtils.replace('/vote')
    }
    else {
      routerUtils.setLocation('/login')
    }
  }
  componentDidMount() {
    AwardStore.addChangeListener(this.onUpdate)
  }
  componentWillUnmount() {
    AwardStore.removeChangeListener(this.onUpdate)
  }
  onUpdate() {
    let storeData = AwardStore.getState().data
    if (!$.isEmptyObject(storeData && storeData.categories)) {
      this.setState({data: storeData})
    }
    let hasErrors = AwardStore.hasErrors()
    if (hasErrors) {
      this.setState({error: hasErrors})
      routerUtils.replace('error')
    }
  }

  render() {
    if (!this.state.login)
      return null
    return(
      <div className='home'>
        <div>
          <NavBar currentUser={this.state.data.current_user}/>
          {routerUtils.childrenWithProps(this.props.children, {data: this.state.data})}
        </div>
        <Footer />
      </div>
    )
  }
}
