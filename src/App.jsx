import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';
import Playlist from './components/Playlist/Playlist.jsx';
import styles from './App.module.css';


const App = () => {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: 'Midnight City',
      artist: 'M83',
      album: 'Hurry Up, Were Dreaming',
    },
    {
      id: 2,
      name: 'Instant Crush',
      artist: 'Daft Punk',
      album: 'Random Access Memories',
    },
  ])

  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const updatePlaylistName = (newName) => {
    setPlaylistName(newName);
  };

  const addTrack = (track) => {
    setPlaylistTracks((prevTracks) => {
      if (!prevTracks.includes(track)) {
        [...prevTracks,
        {
          id: track.id,
          name: track.name,
          artist: track.artist,
          album: track.album,
        }]
      }
    })
  };

  const removeTrack = (trackId) => {
    setPlaylistTracks((prevTracks) => {
      prevTracks.filter((track) => track.id != trackId);
    })
  };

  return (
    <>
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults results={searchResults} onAdd={addTrack} />
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onNameChange={updatePlaylistName} onRemove={removeTrack} />
    </>
  )
}

export default App;
