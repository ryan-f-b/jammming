import React from "react";
import styles from "./SearchResults.module.css";
import TrackList from '../TrackList/TrackList.js';

function SearchResults(props) {
  return (
    <div className={styles.SearchResults}>
      <TrackList userSearchResults={props.userSearchResults} isRemoval={false} onAdd={props.onAdd}/>
    </div>
  );
}

export default SearchResults;