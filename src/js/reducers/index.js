import { FIND_REQUEST, FIND_LOADED } from '../constants'

const defaultState = {
  limit: 100,
  offset: 0,
  count: 0,
  query: '',
  albums: []
}

const albums = (state = defaultState, action) => {
  switch (action.type) {

    case FIND_REQUEST:
      console.log('FIND_REQUEST reducer', action);

      return {
        ...state,
        query: action.query
      }

    case FIND_LOADED:
      console.log('FIND_LOADED reducer', action);

      const { limit } = state
      let { offset } = action.data
      const { count } = action.data

      if (offset + limit < count) {
        offset += limit
      } else {
        console.log('offset limit!');
      }
      
      const albums = action.data.releases.map(
        item => {
          const { id, title } = item
          return { id, title }
        }
      )

      return {
        ...state,
        data: action.data,
        offset,
        count,
        albums: [...state.albums, ...albums]
      }

    default:
      return state
  }
}

export default albums
