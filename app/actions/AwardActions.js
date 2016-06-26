import AppDispatcher from '../dispatcher/AppDispatcher'
import AwardConstants from '../constants/AwardConstants'
import ajaxMessenger from '../../lib/ajaxMessenger'

var AwardActions = {
  openModal(data) {
    AppDispatcher.dispatch({
      actionType: AwardConstants.OPEN_MODAL,
      data: data
    })
  },
  closeModal() {

    AppDispatcher.dispatch({
      actionType: AwardConstants.CLOSE_MODAL
    })
  },
  fetchInitialData() {
    ajaxMessenger('GET', '')
      .then(data => {
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
