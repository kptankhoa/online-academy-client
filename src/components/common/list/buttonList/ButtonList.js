import React from "react";

export default function ButtonList({dataList, className, onItemClick}) {
  const classes = 'button-list ' + className;

  return (
    <div className={classes}>
      {dataList.map((data, index) => (
        <button key={index} className='pure-button category-button'
                onClick={() => onItemClick(data.id)}>
          {data.title}
        </button>
      ))}
    </div>
  );
}
