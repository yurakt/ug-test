import { FIND_REQUEST, FIND_LOADED } from '../constants'

const fetchData = () => {
  const url = 'http://musicbrainz.org/ws/2/release?query=shop&limit=5&fmt=json'
  return fetch(url)
}

const find = query => {
  return async (dispatch) => {
    const response = await fetchData()
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
