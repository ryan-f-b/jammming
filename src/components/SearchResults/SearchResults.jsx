import React from 'react';
import Tracklist from '../Tracklist/Tracklist.jsx';
import styles from './SearchResults.module.css';

// Creating the SearchReslts component using the results and onAdd props passed down from App.jsx
const SearchResults = ({ results, onAdd }) => {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <Tracklist tracks={results} isRemoval={false} onAdd={onAdd} />
    </div>
  )
}

export default SearchResults;