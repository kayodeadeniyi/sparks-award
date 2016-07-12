import AppDispatcher from '../dispatcher/AppDispatcher'
import AuthConstants from '../constants/AuthConstants'
import ajaxMessenger from '../../lib/ajaxMessenger'

var AuthActions = {
  getCurrentUser() {
    AppDispatcher.dispatch({
      actionType: AuthConstants.GET_USER
    })
  },
  confirmToken(data) {
    console.log(data, 'I should confirm token here');
    AppDispatcher.dispatch({
      actionType: AuthConstants.DID_CONFIRM_TOKEN,
      data: data
    })
  }
}

export default AuthActions
