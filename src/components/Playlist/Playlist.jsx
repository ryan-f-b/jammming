import React from 'react';
import Tracklist from '../Tracklist/Tracklist.jsx';

const Playlist = ({ playlistName, playlistTracks, onNameChange, onRemove }) => {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  }

  return (
    <>
      <h2>{playlistName}</h2>
      <form>
          <label for='playlistName'>Rename Playlist: </label>
          <input type='text' id='playlistName' onChange={handleNameChange} value={playlistName}></input>
      </form>

      <Tracklist tracks={playlistTracks} isRemoval={true} onRemove={onRemove}/>

      <button>Save to Spotify</button>
    </>
  )
}

export default Playlist;