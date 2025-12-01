import React from 'react';

const Track = ({ track, isRemoval, onAdd, onRemove }) => {
  return (
    <>
      <h3>{track.name}</h3>
      <p>{track.artist} | {track.album}</p>
      {isRemoval ? <button onClick={onRemove}>- Remove</button> : <button onClick={onAdd}>+ Add</button>}
    </>
  )
}

export default Track;