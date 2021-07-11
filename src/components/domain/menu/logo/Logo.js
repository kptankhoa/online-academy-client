import React from 'react';
import './Logo.css';

export default function Logo() {
  return (
    <div className='logo d-flex align-items-center'>
      <i className='fas fa-fire' style={styles.icon} />
      <div className='brand ml-2 font-weight-bold text-lg'>
        Klearn
      </div>
    </div>
  );
}

const styles = {
  icon: {
    fontSize: 36,
    color: '#e74c3c'
  }
};
