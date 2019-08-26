export function gotData(url){
	return fetch(url, {mode: 'cors'})
    .then(function(response) {
      return response.json()
    })
}