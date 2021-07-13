import React, {useEffect, useState} from 'react';

import './CategoryNav.css';
import Button from '../../../common/button/Button';
import NestedDropdown from './nestedDropdown/NestedDropdown';
import {getDataFromAcademyApi} from "../../../../services/academyApi";

export default function CategoryNav() {
  const [categories, setCategories] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    getDataFromAcademyApi('/categories').then(data => {
      setCategories(data);
    });
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
      <Button title='Categories'/>
      {showDropdown ? (
        <NestedDropdown data={categories}/>
      ) : ''}
    </div>
  );
}
