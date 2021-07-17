import React from "react";
import Button from "../../button/Button";
import './ButtonList.css';

export default function ButtonList({titleList, className}) {
  const classes = 'button-list ' + className;
  return (
    <div className={classes}>
      {titleList.map(title => (
        <Button key={title} title={title} className='category-button'/>
      ))}
    </div>
  );
}
