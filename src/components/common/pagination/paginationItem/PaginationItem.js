import React from 'react';
import './PaginationItem.css'

function PaginationItem({className, children, ...rest}) {
  const classes = 'pagination-item ' + (className ? className : '');
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default PaginationItem;
