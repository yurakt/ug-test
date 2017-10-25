import React from 'react'
import { connect } from 'react-redux'

import Album from './common/Album'

import { remove } from '../actions'

class YourAlbums extends React.Component {

  remove = ({ id, title }) => {
    const { remove } = this.props
    remove(id, title)
  }

  render() {
    const { yourAlbums } = this.props
    const albumViews = Object.keys(yourAlbums)
      .map((key, i) => {
        const item = yourAlbums[key]
        return (
          <Album key={i} remove={this.remove} {...item} />
        )
      })

    let noAlbums
    if (albumViews.length === 0) {
      noAlbums = (
        <div className="albums__body_empty">
          No albums
        </div>
      )
    }

    return (
      <div className="albums root__your-albums">
        <div className="albums__title">
          Your Albums
        </div>
        <div className="albums__body">
          {albumViews}
          {noAlbums}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { yourAlbums } = state
  return { yourAlbums }
}

const mapDispatchToProps = dispatch => {
  return {
    remove: (id, title) => {
      dispatch(remove(id, title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourAlbums)