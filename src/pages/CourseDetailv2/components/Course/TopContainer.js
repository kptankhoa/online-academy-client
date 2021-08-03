import React, { useContext } from 'react';
import { Button, Grid } from '@material-ui/core';
import CourseRating from 'components/common/rating/CourseRating';
import CourseContext from 'pages/CourseDetailv2/CourseContext';
import useStyles from 'pages/CourseDetailv2/styles/CourseDetail.styles';
import moment from 'moment';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/all';
import { enrollCourse } from 'pages/CourseDetailv2/utils/enroll';
import { addToWishList, removeFromWishList } from 'pages/CourseDetailv2/utils/wishList';
import { convertNumberWithComma } from 'utils/commonUtils';
import { isStudent } from 'pages/CourseDetailv2/utils/isStudent';

const TopContainer = () => {
  const classes = useStyles();
  const { state: { course, isEnrolled, isInWishList }, dispatch } = useContext(CourseContext);

  const onEnrollBtnClick = async () => {
    await enrollCourse(dispatch, course);
  };

  const onWishListBtnClick = async () => {
    await addToWishList(dispatch, course);
  };

  const onUnWishListBtnClick = async () => {
    await removeFromWishList(dispatch, course);
  };

  const renderPrice = ({ price, promotionalPrice }) => {
    if (promotionalPrice < price) {
      return (
        <div className={classes.promotionalPrice}>
          Price:&nbsp;
          {convertNumberWithComma(promotionalPrice)}vnd
          &nbsp;
          <span className={classes.originalPrice}>
              {convertNumberWithComma(price)}vnd
            </span>
        </div>
      );
    } else {
      return (
        <div className={classes.promotionalPrice}>
          Price:&nbsp;
          {convertNumberWithComma(price)}vnd
        </div>
      )
    }
  };

  const renderButtons = () => (
    isStudent() &&  (
      <div>
        {isInWishList ? (
          <Button
            variant='contained' className={classes.buttonT}
            onClick={onUnWishListBtnClick}>
            <AiFillHeart style={{ fontSize: '1.3em' }} />&nbsp;Wishlisted
          </Button>
        ) : (
          <Button
            variant='outlined' className={classes.buttonF}
            onClick={onWishListBtnClick}>
            <AiOutlineHeart style={{ fontSize: '1.3em' }} />&nbsp;Wishlist
          </Button>
        )}
        {isEnrolled ? (
          <Button
            variant='contained' className={classes.buttonT}
            onClick={() => alert('You have already enrolled in this course!')}>
            Enrolled
          </Button>
        ) : (
          <Button
            variant='outlined' className={classes.buttonF}
            onClick={onEnrollBtnClick}>
            Enroll
          </Button>
        )}
      </div>
    )
  );
  return (
    <div className={`container-fluid text-white p-4 ${classes.topContainer}`}>
      <div className='container-xl'>
        <Grid container spacing={2}>
          {course && (
            <>
              <Grid item md={8}>
                <h2>{course.courseName}</h2>
                <p>{course.briefDescription}</p>
                <div className='mb-2 d-flex'>
                  <CourseRating ratingPoint={course.ratingPoint} ratedNumber={course.feedbacks.length} />
                  <p className='mx-4 my-0'>Views: {course.view}</p>
                </div>
                <div>
                  Created by <span className={classes.name}>{course.courseLecturers[0].fullName}</span>
                </div>
                <div>
                  <small>Last Updated: {moment(new Date(course.updatedAt).getTime()).format('MM/YYYY')}</small>
                </div>
                {renderPrice(course)}
                {renderButtons()}
              </Grid>
              <Grid item md={4}>
                <img className={classes.courseImg} src={course.courseImage} alt='CourseImage' />
              </Grid>
            </>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default TopContainer;
