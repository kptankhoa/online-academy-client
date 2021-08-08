import React from 'react';
import './Logo.css';
import {useHistory} from "react-router-dom";

export default function Logo({color}) {
  const history = useHistory();

  function onClickHandler() {
    history.push('/');
  }

  const textStyle = `ml-2 font-weight-bold text-lg ${color}`;
  return (
    <button className='logo' onClick={onClickHandler}>
      <i className='fas fa-fire' style={styles.icon}/>
      <div className={textStyle}>
        Klearn
      </div>
    </button>
  );
}

Logo.defaultProps = {
  color: ''
};


const styles = {
  icon: {
    fontSize: 36,
    color: '#e74c3c'
  }
};
