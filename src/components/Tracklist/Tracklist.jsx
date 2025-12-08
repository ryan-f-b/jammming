import React from 'react';
import Track from '../Track/Track.jsx';
import styles from './Tracklist.module.css';

//Creating a Tracklist component with props passed down from SearchResults.jsx and Playlist.jsx
const Tracklist = ({ tracks, onRemove, onAdd, isRemoval }) => {

  return (
    <div className={styles.Tracklist}>
      {tracks.map(track => (
        <Track 
          key={track.id} 
          track={track} 
          onAdd={() => onAdd && onAdd(track)} 
          onRemove={() => onRemove && onRemove(track.id)}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  )
}

export default Tracklist;
