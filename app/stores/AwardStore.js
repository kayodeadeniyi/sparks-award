import AppDispatcher from '../dispatcher/AppDispatcher'
import AwardConstants from '../constants/AwardConstants'
import StorePrototype from '../../lib/StorePrototype'

var AwardStore = StorePrototype()

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case AwardConstants.AWARD_FETCH_INITIAL_DATA:
      AwardStore.receiveData(action.data)
      AwardStore.emitChange()
      break

    case AwardConstants.AWARD_SUBMIT_DATA:
      AwardStore.receiveData(action.data)
      AwardStore.emitChange()
      break

    case AwardConstants.AWARD_FETCH_VOTES:
      AwardStore.receiveData(action.data)
      AwardStore.emitChange()
      break

    default:
      // no op
  }
})

module.exports = AwardStore
