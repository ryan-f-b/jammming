import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  }

  const search = () => {
    console.log("SearchBar fired search with:", term);
    if (!term.trim()) {
      return;
    } else {
      onSearch(term);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  }

  return (
    <div className={styles.SearchBar}>
      <input 
        placeholder='Enter a song, album, or artist'
        value={term}
        onChange={handleTermChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={search}>Search</button>
    </div>
  )
}

export default SearchBar;