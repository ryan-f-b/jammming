import React from "react";
import styles from "./Playlist.module.css";
import TrackList from '../TrackList/TrackList.js';

function Playlist(props) {
  const handleNameChange = (event) => {
    props.onNameChange(event.target.value);
  }

  return (
    <div className={styles.Playlist}>
      <input defaultValue={props.playlistName} onChange={handleNameChange}/>
      <TrackList userSearchResults={props.playlistTracks} onRemove={props.onRemove} isRemoval={true} />
      <button className={styles['Playlist-save']} onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;