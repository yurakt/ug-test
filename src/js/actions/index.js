import { FIND_REQUEST, FIND_LOADED, ADD, REMOVE } from '../constants'

const fetchData = (query, offset) => {
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

const add = (id, title) => {
  return {
    type: ADD,
    album: { id, title }
  }
}

const remove = (id, title) => {
  return {
    type: REMOVE,
    album: { id, title }
  }
}

export {
  find,
  add,
  remove
}
