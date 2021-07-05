import CourseListItem from '../../../components/ListItem';
import CourseItem from '../../../components/CourseItem';
import { useContext, useEffect } from 'react';
import { axiosInstance } from '../../../utils/auth';

import HomeContext from '../HomeContext';

import GridList from '../../../components/GridList';
import CardItem from '../../../components/CardItem';

import { Typography, Box, Container } from '@material-ui/core';

import AccordingTitle from '../../../components/AccordingTitle';

function Top10New(props) {
  const { state, dispatch } = useContext(HomeContext);

  console.log(state.top10New);
  useEffect(() => {
    async function getList() {
      const res = await axiosInstance.get('/statistics/newestCourses');
      dispatch({
        type: 'setTop10New',
        payload: {
          top10New: res.data,
        },
      });
    }
    getList();
  }, [dispatch, state.top10New.length]);

  return (
    <div>
      <Container maxWidth="lg">
       
        <AccordingTitle style={{marginBottom: 10}}>Top 10 newest</AccordingTitle>

        <GridList spacing={2}>
          {state.top10New.map((course, i) => {
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

export default Top10New;
