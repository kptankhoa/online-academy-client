import React, { useState } from 'react';
import './NestedDropdown.css';

export default function NestedDropdown({ data }) {
  const [showNested, setShowNested] = useState(false);
  const [categories, setCategories] = useState([]);

  function onMouseEnterHandler(e) {
    console.log(e.target.id);
    switch (e.target.id) {
      case 'web':
        setCategories(data.web);
        break;
      case 'mobile':
        setCategories(data.mobile);
        break;
      default:
        break;
    }
    setShowNested(true);
  }

  return (
    <div className='nested-dropdown'>
      <div className='nav-bar'>
        <ul className='sub-menu'>
          <li id='web' className='menu-item' onMouseEnter={onMouseEnterHandler}>
            <a href='#'>
              <div>Web Development</div>
              <i className='fas fa-chevron-right' style={inlineStyles.rightArrowIcon} />
            </a>
          </li>
          <li id='mobile' className='menu-item' onMouseEnter={onMouseEnterHandler}>
            <a href='#'>
              <div>Mobile Development</div>
              <i className='fas fa-chevron-right' style={inlineStyles.rightArrowIcon} />
            </a>
          </li>
        </ul>
      </div>
      {showNested ? (<>
          <div className='separator' />
          <div className='nav-bar'>
            <ul className='sub-menu'>
              <li className='menu-item font-weight-bold'>Popular topics</li>
              {categories.map(category => (
                <li key={category._id} className='menu-item'>
                  <a href='#'>
                    {category.categoryName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : ''}
    </div>
  );
}

const inlineStyles = {
  rightArrowIcon: {
    color: '#888',
    fontSize: 10
  }
};
