import React from 'react';
import Tracklist from '../Tracklist/Tracklist.jsx';

// Creating the SearchReslts component using the results and onAdd props passed down from App.jsx
const SearchResults = ({ results, onAdd }) => {
  return (
    <>
      <h2>Results</h2>
      <Tracklist tracks={results} isRemoval={false} onAdd={onAdd} />
    </>
  )
}

export default SearchResults;