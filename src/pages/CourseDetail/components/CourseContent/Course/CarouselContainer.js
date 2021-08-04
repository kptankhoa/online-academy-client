import React, { useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import './styles.css';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';
// import CourseInfo from './CourseInfo';
import { Typography } from '@material-ui/core';

import CourseDetailContext from '../../../CourseDetailContext';
import Loading from '../../../../../components/Loading';
import CourseCard from '../../../../../components/common/card/courseCard/CourseCard';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function CarouselContainer() {
  const { state } = useContext(CourseDetailContext);
  // console.log('state', state);

  return (
    <>
      <Typography variant="h5" style={{ fontWeight: 'bold' }}>
        Students also bought
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
      >
        {state.sameCourses ? (
          state.sameCourses.map((courses, i) => {
            return (
              <SwiperSlide style={{ position: 'static' }} key={i}>
                <CourseCard
                  courseData={courses}
                  style={{ position: 'static' }}
                />
                {/* <CourseInfo></CourseInfo> */}
              </SwiperSlide>
            );
          })
        ) : (
          <Loading />
        )}
      </Swiper>
    </>
  );
}
