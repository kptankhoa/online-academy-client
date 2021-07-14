import React from 'react';

function Avatar({src, size}) {
  return (
    <div className="rounded-circle overflow-hidden" style={{height: size, width: size}}>
      <img src={src} alt="avatar"
           height='100%' width='100%'/>
    </div>
  );
}

export default Avatar;
