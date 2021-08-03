// import { Label, Star, StarBorder } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { RatingInput } from '..';

// import Rating from 'react-rating-stars-component';
import { useContext, useState } from 'react';
import { getCurrentUser } from 'utils';
import { sendFeedBack } from 'pages/CourseDetail/utils';
import CourseDetailContext from 'pages/CourseDetail/CourseDetailContext';

const { TextField, Button, Grid } = require('@material-ui/core');
// const { CustomButton } = require('components');

function Comment() {
  const { state, dispatch } = useContext(CourseDetailContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // control,
  } = useForm();

  const [message, setMessage] = useState({
    content: '',
    ratingPoint: 1,
  });

  const [isSending, setIsSending] = useState(false);

  const handleRatingChange = (e) => {
    setMessage({
      ...message,
      ratingPoint: e,
    });
  };

  const onSubmit = (data) => {
    setIsSending(true);
    const body = {
      ratingPoint: message.ratingPoint,
      content: data.content,
      userId: getCurrentUser().userId,
    };
    console.log('body', body);
    sendFeedBack(state.course._id, body).then((result) => {
      console.log(result);
      setIsSending(false);
      dispatch({
        type: 'setCourse',
        payload: {
          course: {
            ...state.course,
            feedbacks: [...state.course.feedbacks, result],
          },
        },
      });
    });
  };

  return (
    <div style={{ width: '100%' }}>
      {!isSending && (
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={10}>
              <RatingInput onChange={handleRatingChange} />
            </Grid>
            <Grid item xs={10}>
              {errors.content && (
                <span style={{ color: 'red' }}>This field was required</span>
              )}
              <TextField
                {...register('content', { required: true })}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                width: '100%',
              }}
            >
              <Button type="submit" variant="contained" color="primary">
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
}

export default Comment;
