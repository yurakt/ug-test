import React from 'react'
import { connect } from 'react-redux'

import Album from './common/Album'

import { find } from '../actions'

class FindAlbums extends React.Component {
  render () {
    const { albums, onFindClick } = this.props
    const albumViews = albums.map(
      (item, i) => {
        return (
          <Album key={i} {...item} />
        )
      }
    )

    return (
      <div>
        FindAlbums
        <div>
          <input />
          <button onClick={onFindClick}>
            Find!
          </button>
        </div>
        <div>
          {albumViews}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    albums: state.albums || []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFindClick: (query) => {
      dispatch(find(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindAlbums)
