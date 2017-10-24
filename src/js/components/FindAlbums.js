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
    const { albums, yourAlbums, onFindClick } = this.props
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

    return (
      <div>
        FindAlbums
        <div>
          <input onChange={this.onChangeQuery} />
          <button
            onClick={this.find}
            disabled={!query}
          >
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
