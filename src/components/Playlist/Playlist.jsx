import React from 'react';
import Tracklist from '../Tracklist/Tracklist.jsx';
import Spotify from '../../Spotify.js';
import styles from './Playlist.module.css';

//Creating a Playlist component using props passed down from App.jsx
const Playlist = ({ playlistName, playlistTracks, onNameChange, onRemove }) => {

  //Creating a function to handle changing the playlist name. The function using the onNameChange prop passed from App.jsx to update the playlist name to whatever has been typed into the input field (e.target.value)
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  }

  //Creating a function to handle saving a user's created playlist to Spotify
  const handleSave = async () => {
    const trackUris = playlistTracks.map((track) => track.uri);

    if (!playlistName || trackUris.length === 0) {
      alert("Please add tracks and choose a playlist name.");
      return;
    }

    try {
      await Spotify.savePlaylistToSpotify(playlistName, trackUris);
      alert("Playlist saved to Spotify!");
      
    } catch (error) {
      console.error("Error saving playlist:", error);
      alert("Failed to save playlist. Check console for details.");
    }
  };

  return (
    <div className={styles.Playlist}>
      <h2>{playlistName}</h2>
      <input type='text' id='playlistName' onChange={handleNameChange} value={playlistName} placeholder='Playlist Name' maxLength={30}></input>
      <Tracklist tracks={playlistTracks} isRemoval={true} onRemove={onRemove}/>
      <button onClick={handleSave}>Save to Spotify</button>
    </div>
  )
}

export default Playlist;