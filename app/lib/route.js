import React from 'react'

import { IndexRoute, Route } from 'react-router'
import HomeController from '../components/HomeController.react'
import Category from '../components/Category.react'
import SignIn from '../components/SignIn.react'

export default (
  <Route  path='/' component={HomeController}>
    <IndexRoute component={Category} />
    <Route  path='login' component={SignIn} />
  </Route>
)
