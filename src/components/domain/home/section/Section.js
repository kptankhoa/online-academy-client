import React from 'react';

export default function Section({title, className, children}) {
  const classes = 'section-list ' + className;
  return (
    <div className={classes} style={{color: '#454545'}}>
      <div className='title'>
        <h4 className='font-weight-bold'>{title}</h4>
      </div>
      {children}
    </div>
  );
}
