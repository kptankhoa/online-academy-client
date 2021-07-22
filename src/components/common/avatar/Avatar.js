import React from 'react';

function Avatar({ src, size, className }) {
  const classes = 'rounded-circle overflow-hidden ' + (className ? className : '');
  return (
    <div className={classes} style={{ height: size, width: size }}>
      <img src={src} alt='avatar'
           height='100%' width='100%' />
    </div>
  );
}

export default Avatar;
