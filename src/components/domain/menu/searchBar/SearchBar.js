import React from 'react';

import './SearchBar.css'

export default function SearchBar(props) {
  return (
    <div className="search-bar flex-grow-1 d-flex align-items-center">
      <button className="btn-search">
        <i className='fas fa-search' style={{fontSize: 20, color: 'gray'}}/>
      </button>
      <input type='text' className="search-input flex-grow-1" placeholder="Search for courses"/>
    </div>
  );
}
