import React from 'react'
import { browserHistory } from 'react-router'

const routerUtils = {
  childrenWithProps(children, props) {
    if (children)
      return React.cloneElement(children, props)

    return null
  },
  push(hashLocation) {
    browserHistory.pushState(null, null, hashLocation)
  },
  replace(location) {
    browserHistory.replace(location)
  },
  setLocation(location) {
    if (window.location.pathname !== location) {
      browserHistory.pushState(null, null, location)
      window.location = location
    }
  }
}

export default routerUtils
