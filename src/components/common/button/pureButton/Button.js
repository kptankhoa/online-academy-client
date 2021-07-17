import React from 'react';
import './Button.css';

export default function Button({ className, children, ...rest }) {
  const classes = 'pure-button ' + className;
  // console.log(className);
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
