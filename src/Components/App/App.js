import React, { useState } from "react";
import styles from './App.module.css';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import SearchBar from '../SearchBar/SearchBar.js';
import { Spotify } from '../../util/Spotify/Spotify';

function App () {
  const [searchResults, setSearchResults] = useState([]);  

  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log('Track already exists');
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  const removeTrack = (track) => {
    const newPlaylist = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(newPlaylist);
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((t) => t.uri); 
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    })
  }

  const search = (term) => {
    Spotify.search(term).then(result => setSearchResults(result));
    console.log(term);
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