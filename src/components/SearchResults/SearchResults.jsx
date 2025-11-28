import React from 'react';
import Tracklist from '../Tracklist/Tracklist.jsx';

const SearchResults = ({ results }) => {
  return (
    <>
      <h2>Results</h2>
      <Tracklist tracks={results}/>
    </>
  )
}

export default SearchResults;