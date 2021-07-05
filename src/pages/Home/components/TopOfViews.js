import CourseListItem from '../../../components/ListItem';
import CourseItem from '../../../components/CourseItem';
import { useContext, useEffect } from 'react';
import { axiosInstance } from '../../../utils/auth';

import HomeContext from '../HomeContext';

import GridList from '../../../components/GridList';
import CardItem from '../../../components/CardItem';

import { Typography, Box, Container } from '@material-ui/core';

import AccordingTitle from '../../../components/AccordingTitle';

function TopOfView(props) {
  const { state, dispatch } = useContext(HomeContext);

  useEffect(() => {
    async function getList() {
      const res = await axiosInstance.get('/statistics/mostViewedCourses');
      dispatch({
        type: 'setTopOfView',
        payload: {
          topOfView: res.data,
        },
      });
    }
    getList();
  }, [dispatch, state.topOfView.length]);

  return (
    <div>
      <Container maxWidth="lg">
       
        <AccordingTitle style={{marginBottom: 10}}>Top Of Views</AccordingTitle>

        <GridList spacing={2}>
          {state.topOfView.map((course, i) => {
            return (
              <CardItem
                key={i}
                title={course.courseName}
                image={course.courseImage}
                link={''}
                category={course.category.categoryName}
              />
            );
          })}
        </GridList>
      </Container>
    </div>
  );
}

export default TopOfView;
