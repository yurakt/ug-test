import React from 'react'
import { connect } from 'react-redux'

import Album from './common/Album'

import { add, find } from '../actions'

class FindAlbums extends React.Component {

  add = ({ id, title }) => {
    const { add } = this.props
    add(id, title)
  }

  find = () => {
    const { query, offset, find } = this.props
    find(query, offset)
  }

  render() {
    const { albums, yourAlbums, onFindClick } = this.props
    const albumViews = Object.keys(albums)
      .map((key, i) => {
        const item = albums[key]
        const added = yourAlbums[key] !== undefined
        return (
          <Album
            key={i}
            add={this.add}
            added={added}
            {...item}
          />
        )
      })

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

  const { query, offset, albums, yourAlbums } = state
  return { query, offset, albums, yourAlbums }
}

const mapDispatchToProps = dispatch => {
  return {
    find: (query, offset) => {
      dispatch(find(query, offset))
    },
    add: (id, title) => {
      dispatch(add(id, title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindAlbums)
