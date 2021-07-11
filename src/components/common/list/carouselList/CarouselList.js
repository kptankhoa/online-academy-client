import React from "react";
import CourseCard from "../../card/CourseCard";
import Carousel from "react-material-ui-carousel";

export default function CarouselList({courseData, className}) {
  return (
    <Carousel indicators={false} navButtonsAlwaysVisible={false}
              cycleNavigation={false} autoPlay={false} className={className}>
      <div className='d-flex overflow-hidden'>
        <CourseCard className='mr-2' style={{width: '20%'}} courseData={courseData}/>
        <CourseCard className='mr-2' style={{width: '20%'}} courseData={courseData}/>
        <CourseCard className='mr-2' style={{width: '20%'}} courseData={courseData}/>
        <CourseCard className='mr-2' style={{width: '20%'}} courseData={courseData}/>
        <CourseCard className='mr-2' style={{width: '20%'}} courseData={courseData}/>
      </div>
      <div className='d-flex overflow-hidden'>
        <CourseCard className='mr-2' style={{width: '20%'}} courseData={courseData}/>
        <CourseCard className='mr-2' style={{width: '20%'}} courseData={courseData}/>
        <CourseCard className='mr-2' style={{width: '20%'}} courseData={courseData}/>
        <CourseCard className='mr-2' style={{width: '20%'}} courseData={courseData}/>
        <CourseCard className='mr-2' style={{width: '20%'}} courseData={courseData}/>
      </div>
      <div className='d-flex overflow-hidden'>
        <CourseCard className='mr-2' style={{width: '20%'}} courseData={courseData}/>
        <CourseCard className='mr-2' style={{width: '20%'}} courseData={courseData}/>
        <CourseCard className='mr-2' style={{width: '20%'}} courseData={courseData}/>
      </div>
    </Carousel>
  );
}
