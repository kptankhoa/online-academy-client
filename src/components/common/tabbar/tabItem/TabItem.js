import React from 'react';
import Button from "../../button/pureButton/Button";

import "../../../../styles/pseudo.style.css";

function TabItem({id, className, children}) {
  const classes = "tab-item mr-4 hover-border-bottom d-block " + (className ? className : "");
  return (
    <div className={classes}>
      <Button className="px-0 py-1">{children}</Button>
    </div>
  );
}

export default TabItem;
