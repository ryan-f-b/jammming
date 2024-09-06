import React from "react";
import styles from "./Track.module.css";

function Track(props) {

  // Function to include + or - buttons on the playlist or search results depending on whether it is 
  // populated.
  const renderAction = () => {
    
    // Checking whether there is any fields to remove from the playlist.
    if (props.isRemoval) {

      // Adding a - button if the playlist field is populated.
      return <button className={styles['Track-action']} onClick={passTrackToRemove}>-</button>
    } else {

      // Adding a + button to the search results field if populated.
      return <button className={styles['Track-action']} onClick={passTrack}>+</button>
    }
  }

  // Function to handle passing a track from the search results to playlist.
  const passTrack = () => {
    props.onAdd(props.track);
  }

  // Function to handle removing a track from the populated playlist.
  const passTrackToRemove = () => {
    props.onRemove(props.track);
  }

  return (
    <div className={styles.Track}>
      <div className={styles['Track-information']}>
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;