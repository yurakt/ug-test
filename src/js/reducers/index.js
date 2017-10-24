import { FIND_REQUEST, FIND_LOADED } from '../constants'

const defaultState = {
  offset: 0,
  query: '',
  albums: []
}

const albums = (state = defaultState, action) => {
  switch (action.type) {

    case FIND_REQUEST:
      console.log('FIND_REQUEST reducer', action);
      let { offset } = state
      console.log('offset', offset);
      offset += 10
      console.log('offset after', offset);

      return {
        ...state,
        query: action.query,
        offset
      }

    case FIND_LOADED:
      console.log('FIND_LOADED reducer', action);
      const albums = action.data.releases.map(
        item => {
          const { id, title } = item
          return { id, title }
        }
      )

      return {
        ...state,
        data: action.data,
        albums: [...state.albums, ...albums]
      }

    default:
      return state
  }
}

export default albums
