import React from 'react';
import Track from '../Track/Track.jsx';

const Tracklist = ({ tracks }) => {

  return (
    <>
      {tracks.map((track) => (
        <Track key={track.id} track={track}/>
      ))}
    </>
  )
}

export default Tracklist;
