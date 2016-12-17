import React from 'react'
import NavBar from './NavBar.react'
import routerUtils from '../../lib/routerUtils'
import AwardActions from '../actions/AwardActions'
import AwardStore from '../stores/AwardStore'
import $ from 'jquery'
import loader from '../assets/gears.svg'

import './leaderboard.styl'

export default class LeaderBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }

    this.onUpdate = this.onUpdate.bind(this)
  }
  componentDidMount() {
    let token = localStorage.getItem('authToken')

    if (token) { AwardActions.fetchVotes(token) }
    else { routerUtils.replace('login') }

    AwardStore.addChangeListener(this.onUpdate)
  }
  componentWillUnmount() {
    AwardStore.removeChangeListener(this.onUpdate)
  }
  onUpdate() {
    let storeData = AwardStore.getState().data
    if (!$.isEmptyObject(storeData && storeData.votes)) {
      this.setState({data: storeData})
    }

    if (AwardStore.hasErrors()) {
      routerUtils.replace('error')
    }
  }
  loading() {
    return (<img className='loader' src={loader} />)
  }

  render() {
    return (
      <div>
        <div className='leaderboard'>
          { $.isEmptyObject(this.state.data) ? this.loading() : <Cards votes={this.state.data.votes}/> }
        </div>
      </div>
    )
  }
}

const Cards = props => {
  return (
    <div>
      <h1>Leaderboard</h1>
      <div className='leaderboard-card'>
        {
          props.votes.map((vote) => {
            return (
              <div className='card' key={vote.category.id}>
                <h2>{vote.category.title}</h2>
                <p><i>{vote.category.short_description}</i></p>
                <h4>{vote.user.name}({vote.user.email})</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

Cards.defaultProps = {
  votes: []
}
