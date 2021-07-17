import React from 'react';
import './Logo.css';
import {useHistory} from "react-router-dom";

export default function Logo() {
  const history = useHistory();

  function onClickHandler() {
    history.push('/');
  }

  return (
    <button className='logo' onClick={onClickHandler}>
      <i className='fas fa-fire' style={styles.icon} />
      <div className='brand ml-2 font-weight-bold text-lg'>
        Klearn
      </div>
    </button>
  );
}

const styles = {
  icon: {
    fontSize: 36,
    color: '#e74c3c'
  }
};
