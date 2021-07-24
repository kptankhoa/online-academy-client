import React from 'react';

export default function Button({ className, children, ...rest }) {
  const classes = 'pure-button ' + className;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
