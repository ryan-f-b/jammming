import React from 'react';

const Track = ({ track }) => {
  return (
    <>
      <h3>{track.name}</h3>
      <p>{track.artist} | {track.album}</p>
      <button>Add Track</button>
    </>
  )
}

export default Track;