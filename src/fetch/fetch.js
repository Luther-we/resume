import axios from 'axios'

const goApi = (url, object) => {
  axios.post(url, object)
    .then((dataIn) => {
      const { status, statusText, data } = dataIn

      if (status === 200) {
        console.log('data', data)
        return(data)
      }
      return({ error: true })
    })
    .catch(e => {
      console.log('no', e)
      return(e)
    })
}

const goFetchApi = (url, object) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(object),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => console.log('--FETCH-- .then == ', res))
}


export {
  goApi,
  goFetchApi
}

