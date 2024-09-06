import React, { useState } from "react";
import styles from './App.module.css';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import SearchBar from '../SearchBar/SearchBar.js';
import { Spotify } from '../../util/Spotify/Spotify';

function App () {

  // Setting initial state for searchResults using the useState hook
  const [searchResults, setSearchResults] = useState([]);  

  // Setting initial state for playlistName using the useState hook
  const [playlistName, setPlaylistName] = useState('My Playlist');

  // Setting initial state for playlistTracks using the useState hook
  const [playlistTracks, setPlaylistTracks] = useState([]);
  
  // Funtion to handle adding tracks to the playlist. I use the .find array method to check 
  // whether the id for the requested track matches the id of any tracks currently in the playlist.
  // If the id matches, then I log this to the console. If the id doesn't match, the track is 
  // added to the playlist.
  const addTrack = (track) => {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log('Track already exists');
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  // Function to handle removing track from the playlist.
  const removeTrack = (track) => {
    
    // Filtering the existing playlist in the playlistTracks and returning a new playlist minus the 
    // track that was clicked to remove.
    const newPlaylist = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(newPlaylist);
  }

  // Function to handle the renaming of the playlist.
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  // Function to handle saving the created playlist to a user's Spotify account.
  const savePlaylist = () => {

    // Mapping through the playlistTracks and creating an array of the track URIs.
    const trackURIs = playlistTracks.map((t) => t.uri); 

    // Using the Spotify.savePlaylist method to save the playlist to our Spotify account using the chosen
    // playlist name and trackURIs variable as declared above.
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {

      // Resetting the playlist name back to 'New Playlist' once the playlist has been saved.
      setPlaylistName('New Playlist');

      // Clearing the tracks in the playlist once the playlist has been saved.
      setPlaylistTracks([]);
    })
  }

  // Function to handle searching for new tracks
  const search = (term) => {

    // Using the Spotify.search method to display the search results on the screen.
    Spotify.search(term).then(result => setSearchResults(result));
  }
  
  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar onSearch={search} />
          
        <div className={styles['App-playlist']}>
          <SearchResults 
            userSearchResults={searchResults} 
            onAdd={addTrack} 
          />
          <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;