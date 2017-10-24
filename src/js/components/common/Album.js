import React from 'react'

const Album = ({ id, title, isFavorite = false }) => {
  return (
    <div>
      {id} - {title}&nbsp;
      {
        isFavorite
          ? <span>Del</span>
          : <span>Add</span>
      }
    </div>
  )
}

export default Album
