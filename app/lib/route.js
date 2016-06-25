import React from 'react'

import { IndexRoute, Route, Router } from 'react-router'
import HomeController from '../components/HomeController.react'
import Category from '../components/Category.react'
import SignIn from '../components/SignIn.react'

export default (
  <Route>
    <Route  path='/' component={HomeController}/>
    <Route  path='vote' component={Category} />
  </Route>
)
