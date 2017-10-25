import React from 'react'

const Album = ({ id, title, added, add, remove }) => {
  return (
    <div className="album">
      <div className="album__title">
        {title}
      </div>
      {
        add && !added &&
        <span
          className="album__button"
          onClick={() => { add({ id, title }) }}
        >
          Add
        </span>
      }
      {
        remove &&
        <span
          className="album__button"
          onClick={() => { remove({ id, title }) }}
        >
          Del
        </span>
      }
    </div>
  )
}

export default Album
