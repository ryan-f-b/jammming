import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';
import Playlist from './components/Playlist/Playlist.jsx';
import Spotify from './Spotify.js';
import styles from './App.module.css';

const App = () => {

  //Initialising state for the user search results. I have hard-coded some tracks to begin with.
  const [searchResults, setSearchResults] = useState([])

  //Initialising state for the playlist name and playlist tracks. Default playlist name has been set to 'My Playlist'. 
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  //Creating a function to update the playlist name. This will be passed as a prop to the Playlist component. The newName argument is a placeholder and will be used to update whatever the user types in (e.target.value) as the playlist name.
  const updatePlaylistName = (newName) => {
    setPlaylistName(newName);
  };

  //Creating a function to add tracks to the playlist. The function accepts a track variable, which will be a track object, and uses the .find() method to determine if the selected track is already in the playlistTracks array. If it is not already in the playlist, the track is then added using the setPlaylistTracks useState function.
  const addTrack = (track) => {
    if (!playlistTracks.find(t => t.id === track.id)) {
      setPlaylistTracks(prev => [...prev, track]);
    }
  };

  //Creating a function to remove a selected track from the playlist. The function accepts the track ID of the track to remove, and uses the .filter() method to return a playlist that does not contain the selected track, which is found by comparing the track IDs.
  const removeTrack = (trackId) => {
    setPlaylistTracks(prevTracks => prevTracks.filter(track => track.id != trackId));
  };

  const search = async (term) => {
    const results = await Spotify.search(term);
    setSearchResults(results);
  }

  return (
    <>
      <h1>Jammming</h1>
      <h3>Spotify Playlist Creator</h3>
      <SearchBar onSearch={search} />
      <div className={styles.container}>
        <SearchResults results={searchResults} onAdd={addTrack} />
        <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onNameChange={updatePlaylistName} 
            onRemove={removeTrack} 
        />
      </div>
    </>
  )
}

export default App;
