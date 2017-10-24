import { FIND_REQUEST, FIND_LOADED } from '../constants'

const albums = (state = {}, action) => {
  switch (action.type) {

    case FIND_REQUEST:
      console.log('FIND_REQUEST reducer', action);
      return {
        ...state,
        query: action.query
      }

    case FIND_LOADED:
      console.log('FIND_LOADED reducer', action);
      return {
        ...state,
        data: action.data,
        albums: []
      }

    default:
      return state
  }
}

export default albums
