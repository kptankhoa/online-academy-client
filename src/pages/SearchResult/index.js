import React from 'react';
import NavBar from 'components/domain/menu/NavBar';
import Footer from 'components/domain/footer/Footer';
import SearchResult from './components/SearchResult';

const SearchView = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <NavBar/>
      <SearchResult/>
      <Footer/>
    </div>
  );
}

export default SearchView;
