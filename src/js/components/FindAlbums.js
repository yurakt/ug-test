import React from 'react'
import { connect } from 'react-redux'

import Album from './common/Album'

import { find } from '../actions'

class FindAlbums extends React.Component {

  find = () => {
    const { query, offset, onFindClick } = this.props
    onFindClick(query, offset)
  }

  render() {
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
          <button onClick={this.find}>
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

  const { query, offset, albums } = state
  return { query, offset, albums }
}

const mapDispatchToProps = dispatch => {
  return {
    onFindClick: (query, offset) => {
      dispatch(find(query, offset))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindAlbums)
