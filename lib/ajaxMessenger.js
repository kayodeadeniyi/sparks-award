import jQuery from 'jquery'

export default (method, path, authToken=null, data=null) => {
  var url = API_HOST ? `${API_HOST}/${path}` : 'https://script.google.com/macros/s/AKfycbwVPjEhtp4Jg7kWnVmvYLt6rL6UKrq-5kyIaXWVuZ1wDduqMdSl/exec'

  var request = {
    method: method,
    data: data,
    url: url,
    headers: {'Content-Type': 'application/json', Authorization: `Token token ${authToken}`}
  }
  return sendRequest(request)
}

var sendRequest = request => {
  var promise = jQuery.Deferred()
  jQuery.ajax(request)
    .done((data, result, response) => {promise.resolve(data, response.status)})
    .fail(error => {
      var errorJSON
      if (error.responseJSON)
        errorJSON = error.responseJSON
      else if (error.responseText)
        errorJSON = JSON.parse(error.responseText)
      else
        errorJSON = {errors: ["An error occurred"]}
      promise.reject(errorJSON)
    })
  return promise
}
