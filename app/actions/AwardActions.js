var AppDispatcher = require('../dispatcher/AppDispatcher')
var AwardConstants = require('../constants/AwardConstants')

var AwardActions = {
  openModal() {
    AppDispatcher.dispatch({
      actionType: AwardConstants.OPEN_MODAL
    })
  },
  closeModal() {
    AppDispatcher.dispatch({
      actionType: AwardConstants.CLOSE_MODAL
    })
  },
  fetchInitialData() {
    AppDispatcher.dispatch({
      actionType: AwardConstants.AWARD_FETCH_INITIAL_DATA
    })
  },

  submitData(data) {
    AppDispatcher.dispatch({
      actionType: AwardConstants.AWARD_SUBMIT_DATA,
      data: data
    })
  }
}

module.exports = AwardActions
