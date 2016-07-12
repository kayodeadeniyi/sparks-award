import React from 'react'
import { browserHistory } from 'react-router'

const routerUtils = {
  childrenWithProps(children, props) {
    if (children)
      return React.cloneElement(children, props)

    return null
  },
  push(hashLocation) {
    // Obscure the lowerlevel implementation.
    browserHistory.pushState(null, null, hashLocation)
  },
  replace(location) {
    browserHistory.replaceState(location)
  },
  setLocation(location) { window.location = location }
}

export default routerUtils
