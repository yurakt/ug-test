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
    const { albums, onFindClick } = this.props
    const albumViews = albums.map(
      (item, i) => {
        return (
          <Album key={i} add={this.add} {...item} />
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
    find: (query, offset) => {
      dispatch(find(query, offset))
    },
    add: (id, title) => {
      dispatch(add(id, title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindAlbums)
