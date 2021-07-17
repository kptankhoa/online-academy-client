import React from 'react';
import Button from "../pureButton/Button";

function WishListButton({size}) {
  return (
    <Button className="p-0 ml-3">
      <i className="far fa-heart" style={{fontSize: size}}/>
    </Button>
  );
}

export default WishListButton;
