import React from 'react';
import './Comps.css';

function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input className="search-bar" type="text" placeholder="Buscar...                    " onChange={(e) => onSearch(e.target.value)} />
    </div>
  );
}

export default SearchBar;
