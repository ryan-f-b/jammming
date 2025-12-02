import React from 'react';
import Tracklist from '../Tracklist/Tracklist.jsx';

//Creating a Playlist component using props passed down from App.jsx
const Playlist = ({ playlistName, playlistTracks, onNameChange, onRemove }) => {

  //Creating a function to handle changing the playlist name. The function using the onNameChange prop passed from App.jsx to update the playlist name to whatever has been typed into the input field (e.target.value)
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