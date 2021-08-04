import React from 'react';
import Logo from './logo/Logo';
import SearchBar from './searchBar/SearchBar';
import CategoryNav from './categoryNav/CategoryNav';

import UserNav from './userNav/UserNav';
import Button from '../../common/button/pureButton/Button';
import {Link} from 'react-router-dom';
import WishListButton from '../../common/button/wishListButton/WishListButton';

import './NavBar.css';
import {getCurrentUser} from 'utils';

export default function NavBar() {
  const accessToken = localStorage.getItem(
    process.env.REACT_APP_STORAGE_ACCESS_TOKEN
  );
  return (
    <div className="menu d-flex align-items-center">
      <Logo/>
      <CategoryNav/>
      <SearchBar/>
      {accessToken ? (
        <>
          {getCurrentUser().type === 'student' && (
            <Link to="/user/wishlist">
              <WishListButton size={20}/>
            </Link>
          )}
          <UserNav/>
        </>
      ) : (
        <>
          <Link to="/login">
            <div className="ml-2">
              <Button className="border border-info rounded text-info font-weight-bold py-2 px-4 text-smaller">
                Log in
              </Button>
            </div>
          </Link>
          <Link to="/signup">
            <div className="ml-2">
              <Button className="rounded text-white bg-info font-weight-bold py-2 px-4 text-smaller">
                Sign up
              </Button>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
