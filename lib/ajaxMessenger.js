import jQuery from 'jquery'

export default (method, path, data=null) => {
  var url = process.env.API_HOST ? `${process.env.API_HOST}/${path}` : 'https://script.google.com/macros/s/AKfycbwVPjEhtp4Jg7kWnVmvYLt6rL6UKrq-5kyIaXWVuZ1wDduqMdSl/exec'
  var request = {
    method: method,
    data: data,
    url: url
  }
  return sendRequest(request)
}

var sendRequest = request => {
  var promise = jQuery.Deferred()
  jQuery.ajax(request)
    .done((data, result, response) => {
      return promise.resolve(data, response.status)
    })
    .fail(error => {
      var errorJSON = {errors: ["An error occurred"]}
      promise.reject(errorJSON)
    })
  return promise
}
