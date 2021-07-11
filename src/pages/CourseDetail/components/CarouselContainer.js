import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import './styles.css';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';
import CourseInfo from './CourseInfo';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
      >
        <SwiperSlide>
          <CourseInfo></CourseInfo>
        </SwiperSlide>
        <SwiperSlide>
          <CourseInfo></CourseInfo>
        </SwiperSlide>
        <SwiperSlide>
          <CourseInfo></CourseInfo>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
