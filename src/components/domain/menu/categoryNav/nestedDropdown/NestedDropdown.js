import React, {useState} from 'react';
import './NestedDropdown.css';
import {useHistory} from "react-router-dom";
import Button from "../../../../common/button/Button";

export default function NestedDropdown({data}) {
  const [showNested, setShowNested] = useState(false);
  const [categories, setCategories] = useState([]);

  const history = useHistory();

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

  function onClickHandler(categoryId) {
    history.push(`/category/${categoryId}`);
  }

  return (
    <div className='nested-dropdown'>
      <div className='nav-bar'>
        <ul className='sub-menu'>
          <li id='web' className='menu-item' onMouseEnter={onMouseEnterHandler}>
            <div className='mi-wrapper'>
              <div>Web Development</div>
              <i className='fas fa-chevron-right' style={inlineStyles.rightArrowIcon}/>
            </div>
          </li>
          <li id='mobile' className='menu-item' onMouseEnter={onMouseEnterHandler}>
            <div className='mi-wrapper'>
              <div>Mobile Development</div>
              <i className='fas fa-chevron-right' style={inlineStyles.rightArrowIcon}/>
            </div>
          </li>
        </ul>
      </div>
      {showNested ? (<>
          <div className='separator'/>
          <div className='nav-bar'>
            <ul className='sub-menu'>
              <li className='menu-item font-weight-bold'>Popular topics</li>
              {categories.map(category => (
                <li key={category._id} className='menu-item'>
                  <Button title={category.categoryName}
                          className='button-list-item'
                          onClick={() => onClickHandler(category._id)}>
                  </Button>
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
