import { FIND_REQUEST, FIND_LOADED } from '../constants'

const fetchData = (query, offset) => {
  // temp!
  query = 'shop'

  let url = `http://musicbrainz.org/ws/2/release`
  url += `?query=${query}&limit=1&offset=${offset}&fmt=json`
  return fetch(url)
}

const find = (query, offset) => {
  return async (dispatch) => {
    dispatch({ type: FIND_REQUEST, query, offset })

    const response = await fetchData(query, offset)
    const data = await response.json()
    dispatch({
      type: FIND_LOADED,
      data
    })
  }
}

export {
  find
}
