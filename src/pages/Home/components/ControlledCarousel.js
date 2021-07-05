import { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { axiosInstance } from '../../../utils/auth';

import HomeContext from '../HomeContext';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const { state, dispatch } = useContext(HomeContext);
  useEffect(() => {
    async function getList() {
      const res = await axiosInstance.get('/statistics/featuredCourses');
      console.log("trending",res.data);
      dispatch({
        type: 'setTrendingCourse',
        payload: {
          trendingCourse: res.data,
        },
      });
    }
    getList();
  }, [dispatch, state.trendingCourse.length]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {state.trendingCourse.map((course, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={course.courseImage}
              alt={course.courseName}
            />
            <Carousel.Caption>
              <h3>{course.courseName}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ControlledCarousel;
