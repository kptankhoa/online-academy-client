import React from 'react';

function TabBar({className, children}) {
  const classes = "d-flex align-items-center " + (className ? className : "");
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default TabBar;
