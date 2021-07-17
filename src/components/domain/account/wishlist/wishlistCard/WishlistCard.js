import React from 'react';
import CourseCard from "components/common/card/courseCard/CourseCard";
import Button from "components/common/button/pureButton/Button";

import "./WishlistCard.css";
import {academyAxios} from "config/axios.config";

function WishlistCard({courseData, className, userId, remove}) {
  const classes = "wishlist-card " + (className ? className : "");

  function handleClick() {
    academyAxios.patch(`/users/${userId}/wishList`, {
      courseIds: [courseData._id]
    }).then(() => {
      remove(courseData._id);
    }).catch(error => {
      console.log(error.response.config);
    });
  }

  return (
    <div className={classes}>
      <CourseCard courseData={courseData}/>
      <div className="icon-wrapper">
        <Button className="p-0" onClick={handleClick}>
          <i className="fas fa-heart" style={{color: "#e74c3c", fontSize: 20}}/>
        </Button>
      </div>
    </div>
  );
}

export default WishlistCard;
