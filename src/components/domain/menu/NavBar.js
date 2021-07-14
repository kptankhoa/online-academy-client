import React, {useState} from 'react';
import Logo from './logo/Logo';
import SearchBar from './searchBar/SearchBar';
import CategoryNav from './categoryNav/CategoryNav';

import './NavBar.css';
import UserNav from "./userNav/UserNav";
import Button from "../../common/button/Button";
import {Link} from "react-router-dom";

export default function NavBar() {
  const accessToken = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
  return (
    <div className='menu d-flex align-items-center'>
      <Logo/>
      <CategoryNav/>
      <SearchBar/>

      {accessToken ? (
        <UserNav/>
      ) : (
        <>
          <Link to="/login">
            <div className='ml-2'>
              <Button title='Log in'
                      className='border border-info rounded text-info font-weight-bold py-2 px-4'/>
            </div>
          </Link>
          <Link to="/signup">
            <div className='ml-2'>
              <Button title='Sign up'
                      className='rounded text-white bg-info font-weight-bold py-2 px-4'/>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
