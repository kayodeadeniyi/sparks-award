import AppDispatcher from '../dispatcher/AppDispatcher'
import AuthConstants from '../constants/AuthConstants'
import ajaxMessenger from '../../lib/ajaxMessenger'

var AuthActions = {
  signOut(token) {
    ajaxMessenger('GET', 'auth/logout', token)
      .always(response => {
        AppDispatcher.dispatch({
          actionType: AuthConstants.DID_SIGNOUT_USER,
          data: response
        })
      })
  }
}

export default AuthActions
