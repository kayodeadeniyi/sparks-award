import AppDispatcher from '../dispatcher/AppDispatcher'
import AuthConstants from '../constants/AwardConstants'
import StorePrototype from '../../lib/StorePrototype'

var AuthStore = StorePrototype()

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case AuthConstants.DID_CONFIRM_TOKEN:
      AuthStore.setData({currentUser: action.data})
      AuthStore.emitChange()
      break

    default:
      // no op
  }
})

module.exports = AuthStore
