import React from 'react'

import { IndexRoute, Route } from 'react-router'
import HomeController from '../components/HomeController.react'
import LeaderBoard from '../components/LeaderBoard.react'
import Category from '../components/Category.react'
import SignIn from '../components/SignIn.react'
import Error from '../components/Error.react'

export default (
  <Route  path='/' component={HomeController}>
    <Route path='vote' component={Category} />
    <Route  path='login' component={SignIn} />
    <Route  path='error' component={Error} />
    <Route path='leaderboard' component={LeaderBoard} />
  </Route>
)
