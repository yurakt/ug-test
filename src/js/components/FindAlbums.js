import React from 'react'
import { connect } from 'react-redux'

import Album from './common/Album'

import { add, find } from '../actions'

class FindAlbums extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  add = ({ id, title }) => {
    const { add } = this.props
    add(id, title)
  }

  find = () => {
    const { offset, find } = this.props
    const { query } = this.state
    find(query, offset)
  }

  onChangeQuery = (e) => {
    console.log('e', e.target.value);
    this.setState({
      query: e.target.value
    });
  }

  render() {
    const { albums, yourAlbums, loaded } = this.props
    const { query } = this.state

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

    let noAlbums
    if (loaded && albumViews.length === 0) {
      noAlbums = (
        <div className="albums__body_empty">
          No albums
        </div>
      )
    }

    return (
      <div className="albums root__find-albums">
        <div className="albums__title">
          Find Albums
        </div>
        <div>
          <input onChange={this.onChangeQuery} />
          <button
            onClick={this.find}
            disabled={!query}
          >
            Find!
          </button>
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
  const { query, offset, albums, yourAlbums, loaded } = state
  return { query, offset, albums, yourAlbums, loaded }
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
