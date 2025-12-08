import React from 'react';
import styles from './Track.module.css';

const Track = ({ track, isRemoval, onAdd, onRemove }) => {
  return (
    <div className={styles.Track}>
      <div className={styles.TrackInformation}>
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>

      <div className={styles.TrackAction}>
        {isRemoval ? <button onClick={onRemove}>-</button> : <button onClick={onAdd}>+</button>}
      </div>
    </div>
  )
}

export default Track;