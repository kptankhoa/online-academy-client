import React, { useContext, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import useStyles from 'pages/CourseDetailv2/styles/Feedback.styles';
import CourseContext from 'pages/CourseDetailv2/CourseContext';
import { submitFeedback } from 'pages/CourseDetailv2/utils/submitFeedback';

const FeedbackForm = () => {
  const { state: { course }, dispatch } = useContext(CourseContext);
  const classes = useStyles();
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    const info = {
      courseId: course._id,
      content: data.content,
      ratingPoint: rating
    }
    submitFeedback(info, dispatch).then(() => alert('You feedback is submitted!'));
  });
  const onChangeRatingHandler = (newRating) => {
    setRating(newRating);
  };
  return (
    <div>
      <h4 className='mt-3 font-weight-bold'>Send your feedback:</h4>
      <form
        onSubmit={onSubmit}
      >
      <StarRatings
        rating={rating}
        starDimension='30px'
        starSpacing='3px'
        starRatedColor='#f39c12'
        starHoverColor='#f39c12'
        starEmptyColor='#696969'
        changeRating={onChangeRatingHandler} />
      <div>
        <TextField
          id='outlined-multiline-static'
          multiline
          placeholder='Tell us what you think'
          margin='normal'
          InputProps={{ disableUnderline: true }}
          className={classes.feedbackTxt}
          {...register('content')}
        />
        <Button className={classes.submitBtn} type='submit'>
          Submit
        </Button>
      </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
