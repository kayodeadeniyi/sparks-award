var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')

var CHANGE_EVENT = 'change'

export default () => assign({}, EventEmitter.prototype, {
  errors: [],
  msg: null,
  data: {},
  getMsg() {
    return this.msg;
  },
  setMsg(msg) {
    this.msg = msg
  },
  getErrors() {
    return this.errors;
  },
  pushError(error) {
    this.errors.push(error);
  },
  setErrors(errors) {
    this.errors = [errors];
  },
  clearErrors() {
    this.errors = [];
  },
  hasErrors() {
    return (this.errors.length > 0)
  },
  setData(data) {
    this.data = data;
  },
  receiveData(data) {
    if (data.errors)
      this.setErrors(data.errors.message);
    else {
      this.setData(data);
      this.clearErrors();
    }
    this.emitChange();
  },
  getData() {
    return this.data;
  },
  getState() {
    return {data: this.data, errors: this.errors, message: this.msg}
  },
  clearState(){
    this.setData({});
  },
  emitChange() {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
})
