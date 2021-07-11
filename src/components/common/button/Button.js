import React from 'react';
import './Button.css';

export default function Button({ className, title, ...rest }) {
  const classes = 'pure-button ' + className;
  console.log(className);
  return (
    <button className={classes} {...rest}>
      {title}
    </button>
  );
}
