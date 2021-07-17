import React from "react";
import Button from "../../button/pureButton/Button";
import './ButtonList.css';

export default function ButtonList({titleList, className}) {
  const classes = 'pureButton-list ' + className;
  return (
    <div className={classes}>
      {titleList.map((title, index) => (
        <Button key={index} className='category-button'>
          {title}
        </Button>
      ))}
    </div>
  );
}
