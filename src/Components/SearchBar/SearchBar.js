import React, { useState } from "react";
import styles from './SearchBar.module.css';

function SearchBar (props) {

  // Using the useState hook to update the search term.
  const [term, setTerm] = useState('');


  // Function to submit the search term to the API whenever the search button is clicked
  const passTerm = () => {
    props.onSearch(term);
  }
  
  // Function to handle term change by setting the term value to whatever is typed into the input form.
  const handleTermChange = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div className={styles.SearchBar}>
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
      <button className={styles.SearchButton} onClick={passTerm}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;