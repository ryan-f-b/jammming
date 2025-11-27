import React from 'react';

const Track = () => {
  let inPlaylist = true;

  return (
    <>
      {inPlaylist ? <button>-</button> : <button>+</button>}
    </>
  )
}

export default Track;