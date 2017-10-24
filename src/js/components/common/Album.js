import React from 'react'

const Album = ({ id, title, add, remove }) => {
  return (
    <div>
      {id} - {title}&nbsp;
      {
        add &&
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
