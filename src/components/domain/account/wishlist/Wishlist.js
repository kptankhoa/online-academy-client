import React, {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
import {academyAxios} from "../../../../config/axios.config";
import CourseCard from "../../../common/card/courseCard/CourseCard";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const decoded = jwt_decode(localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN));

  useEffect(() => {
    academyAxios.get(`/users/${decoded.userId}/wishList`)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          setWishlist(response.data);
        }
      });
  }, [decoded.userId]);
  return (
    <div className="d-flex flex-wrap align-items-center">
      {wishlist.length > 0 ? (
        <>
          {wishlist.map((course, index) => (
            <CourseCard key={index} courseData={course} className="mr-4 mb-4"/>
          ))}
        </>
      ) : (
        <div className="m-auto">
          <div className="spinner-grow spinner" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
