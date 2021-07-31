import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import CourseCard from './CourseCard';
import CourseContext from '../../CourseContext';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, {
  Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);

const SimilarCourses = () => {
  const { state: { sameCourses } } = useContext(CourseContext);
  return (
    <Grid container  style={{marginTop: '15px'}}>
      {sameCourses && (
        <Grid item md={8}>
          <h4 className='mt-3 font-weight-bold'>Students also bought:</h4>
          <Swiper
            pagination={{
              "dynamicBullets": true,
            }}
          >
            {sameCourses.map((course, i) => {
              return (
                <SwiperSlide style={{ position: 'static' }} key={i}>
                  <CourseCard
                    courseData={course}
                    style={{ position: 'static' }}
                  />
                  <div style={{height: '30px'}}/>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Grid>
      )}
    </Grid>
  );
};

export default SimilarCourses;
