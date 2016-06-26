var AppDispatcher = require('../dispatcher/AppDispatcher')
var EventEmitter = require('events').EventEmitter
var AwardConstants = require('../constants/AwardConstants')
var assign = require('object-assign')

var CHANGE_EVENT = 'change'

function fetchInitialData() {
  // TODO
}

function submitData() {
  // TODO
}

var AwardStore = assign({}, EventEmitter.prototype, {
  _errors: [],
  _msg: null,
  _data: {},
  getMsg: function() {
    return this._msg;
  },
  setMsg: function(msg) {
    this._msg = msg
  },
  getErrors: function() {
    return this._errors;
  },
  pushError: function(error) {
    this._errors.push(error);
  },
  setErrors: function(errors) {
    this._errors = errors;
  },
  clearErrors: function() {
    this._errors = [];
  },
  hasErrors: function() {
    return (this._errors.length > 0)
  },
  setData: function(data) {
    this._data = data;
  },
  getData: function() {
    return this._data;
  },
  getState: function() {
    return {data: this._data, errors: this._errors, message: this._msg}
  },
  clearState: function(){
    this.setData({});
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
})

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case AwardConstants.AWARD_FETCH_INITIAL_DATA:
      fetchInitialData()
      AwardStore.setData({data: action.data})
      AwardStore.emitChange()
      break

    case AwardConstants.AWARD_SUBMIT_DATA:
      submitData()
      AwardStore.emitChange()
      break

    case AwardConstants.OPEN_MODAL:
      AwardStore.setData({openModal: true, modalContent: action.data})
      AwardStore.emitChange()
      break

    case AwardConstants.CLOSE_MODAL:
      AwardStore.setData({openModal: false})
      AwardStore.emitChange()
      break

    default:
      // no op
  }
})

module.exports = AwardStore
