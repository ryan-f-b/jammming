import React from 'react';
import Tracklist from '../Tracklist/Tracklist.jsx';

const SearchResults = ({ results, onAdd }) => {
  return (
    <>
      <h2>Results</h2>
      <Tracklist tracks={results} isRemoval={false} onAdd={onAdd} />
    </>
  )
}

export default SearchResults;