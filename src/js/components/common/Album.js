import React from 'react'

const Album = ({ id, title, added, add, remove }) => {
  return (
    <div>
      {title} - &nbsp;
      {
        add && !added &&
        <span onClick={() => { add({ id, title }) }}>
          Add
        </span>
      }
      {
        remove &&
        <span onClick={() => { remove({ id, title }) }}>
          Del
        </span>
      }
    </div>
  )
}

export default Album
