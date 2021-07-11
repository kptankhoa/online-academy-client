import React, { useEffect, useState } from 'react';

import './CategoryNav.css';
import Button from '../../../common/button/Button';
import NestedDropdown from './nestedDropdown/NestedDropdown';

const categoriesSample = {
  web: ['html', 'css', 'js'],
  mobile: ['android', 'ios', 'react native', 'flutter']
};


export default function CategoryNav(props) {
  const [categories, setCategories] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  // const [showNestedDropdown, setShowNestedDropdown] = useState(false);

  useEffect(() => {
    setCategories(categoriesSample);
  }, []);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  function onBlurHandler() {
    setTimeout(() => {
      setShowDropdown(false);
    }, 100);
  }

  return (
    <div className='category-nav px-2'
         onClick={toggleDropdown} onBlur={onBlurHandler}>
      <Button title='Categories' />
      {showDropdown ? (
        <NestedDropdown data={categories} />
      ) : ''}
    </div>
  );
}
