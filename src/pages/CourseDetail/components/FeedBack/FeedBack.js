import {
  Grid,
  Typography,
  Grow,
  Divider,
  Badge,
  CircularProgress,
  IconButton,
} from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { useContext, useEffect, useMemo, useState } from 'react';
import Rating from './Rating';
import Feed from './Feed';

import CourseDetailContext from '../../CourseDetailContext';
import { Loading } from '../../../../components';
import Comment from './Comment';

const LIMIT_PAGE = 5;

function FeedBack(props) {
  const { state, dispatch } = useContext(CourseDetailContext);

  const [FeedBack, setFeedBack] = useState({
    feedBacks: state.course.feedbacks,
    currentFeedBacks: [],
    currentPage: 1,
    isNextPage: false,
    isPreviousPage: false,
    totalPage: 0,
  });

  // useMemo(() => {
  //   if (state.course.feedbacks) {
  //     const index = (FeedBack.currentPage - 1) * LIMIT_PAGE;

  //     const total = state.course.feedbacks;
  //     const currentFeedBacks = state.course.feedbacks.slice(
  //       index,
  //       index + LIMIT_PAGE
  //     );
  //     const totalPage = Math.ceil(total.length / LIMIT_PAGE);
  //     const isNextPage = totalPage > 1;
  //     setFeedBack({
  //       feedBacks: total,
  //       currentFeedBacks: currentFeedBacks,
  //       currentPage: 1,
  //       isNextPage: isNextPage,
  //       isPreviousPage: false,
  //       totalPage: totalPage,
  //     });
  //   }
  // }, [state.course.feedbacks]);

  useEffect(() => {
    if (state.course.feedbacks) {
      const index = (FeedBack.currentPage - 1) * LIMIT_PAGE;

      const total = state.course.feedbacks;
      const currentFeedBacks = state.course.feedbacks.slice(
        index,
        index + LIMIT_PAGE
      );
      const totalPage = Math.ceil(total.length / LIMIT_PAGE);
      const isNextPage = totalPage > 1;
      setFeedBack({
        feedBacks: total,
        currentFeedBacks: currentFeedBacks,
        currentPage: 1,
        isNextPage: isNextPage,
        isPreviousPage: false,
        totalPage: totalPage,
      });
    }
  }, [state.course.feedbacks]);

  function onRight_Clicked(e) {
    const currentPage = FeedBack.currentPage + 1;
    const index = (currentPage - 1) * LIMIT_PAGE;

    const currentFeedBacks = FeedBack.feedBacks.slice(
      index,
      index + LIMIT_PAGE
    );
    const isNextPage = FeedBack.totalPage > currentPage;
    const isPreviousPage = currentPage > 1;
    setFeedBack({
      ...FeedBack,
      currentPage: currentPage,
      currentFeedBacks: currentFeedBacks,
      isNextPage: isNextPage,
      isPreviousPage: isPreviousPage,
    });
  }
  function onLeft_Clicked(e) {
    // console.log(FeedBack);
    const currentPage = FeedBack.currentPage - 1;

    const index = (currentPage - 1) * LIMIT_PAGE;
    const currentFeedBacks = FeedBack.feedBacks.slice(
      index,
      index + LIMIT_PAGE
    );
    const isNextPage = FeedBack.totalPage > currentPage;
    const isPreviousPage = currentPage > 1;
    setFeedBack({
      ...FeedBack,
      currentPage: currentPage,
      currentFeedBacks: currentFeedBacks,
      isNextPage: isNextPage,
      isPreviousPage: isPreviousPage,
    });
  }

  let render;
  if (FeedBack && FeedBack.currentFeedBacks) {
    render = (
      <div>
        {FeedBack.currentFeedBacks.map((feed, i) => {
          return (
            <div key={i}>
              <Divider></Divider>
              <Grow in={true} timeout={5000}>
                <Feed
                  comment={feed.content}
                  userId={feed.userId}
                  rating={feed.ratingPoint}
                ></Feed>
              </Grow>
            </div>
          );
        })}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {FeedBack.isPreviousPage && (
            <>
              <IconButton onClick={onLeft_Clicked}>
                <ArrowBackIosIcon />
              </IconButton>
            </>
          )}
          {FeedBack.isNextPage && (
            <>
              <IconButton onClick={onRight_Clicked}>
                <ArrowForwardIosIcon />
              </IconButton>
            </>
          )}
        </div>
      </div>
    );
  } else {
    render = <Loading></Loading>;
  }

  // console.log(FeedBack);

  return (
    <div style={{ display: 'block' }}>
      <Typography variant="h5">
        <SupervisorAccountIcon />
        Feedback
      </Typography>
      {state.isEnrolled && <Comment />}
      {render}
    </div>
  );
}

export default FeedBack;
