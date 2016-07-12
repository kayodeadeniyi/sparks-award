import AppDispatcher from '../dispatcher/AppDispatcher'
import AwardConstants from '../constants/AwardConstants'
import ajaxMessenger from '../../lib/ajaxMessenger'

var AwardActions = {
  fetchInitialData(token) {
    ajaxMessenger('GET', '/categories', token)
      .always(data => {
        AppDispatcher.dispatch({
          actionType: AwardConstants.AWARD_FETCH_INITIAL_DATA,
          data: data
        })
      })
  },
  submitData(data) {
    AppDispatcher.dispatch({
      actionType: AwardConstants.AWARD_SUBMIT_DATA,
      data: data
    })
  }
}

export default AwardActions
