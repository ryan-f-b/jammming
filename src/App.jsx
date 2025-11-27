import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';
import Playlist from '../Playlist/Playlist.jsx';
import styles from './App.module.css';


const App = () => {
  return (
    <>
      <h1>Jammming</h1>
      <div className='App'>
        <SearchBar />
        
        <div className='App-playlist'>
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </>
  )
}

export default App
