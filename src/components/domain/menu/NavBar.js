import React from 'react';
import Logo from './logo/Logo';
import SearchBar from './searchBar/SearchBar';
import CategoryNav from './categoryNav/CategoryNav';
import Button from '../../common/button/Button';

import './NavBar.css';

export default function NavBar() {
  return (
    <div className='menu d-flex align-items-center'>
      <Logo />
      <CategoryNav />
      <SearchBar />
      <div className='ml-2'>
        <Button title='Log in'
                className='border border-info rounded text-info font-weight-bold py-2 px-4' />
      </div>
      <div className='ml-2'>
        <Button title='Sign up'
                className='rounded text-white bg-info font-weight-bold py-2 px-4' />
      </div>
    </div>
  );
}
