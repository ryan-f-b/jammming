import React from 'react';
import Track from '../Track/Track.jsx';

const Tracklist = ({ tracks, onRemove, onAdd, isRemoval }) => {

  return (
    <>
      {tracks.map((track) => (
        <Track 
          key={track.id} 
          track={track} 
          onAdd={() => onAdd && onAdd(track)} 
          onRemove={() => onRemove && onRemove(track.id)}
          isRemoval={isRemoval}
        />
      ))}
    </>
  )
}

export default Tracklist;
