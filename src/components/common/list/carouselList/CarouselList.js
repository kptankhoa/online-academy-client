import React from "react";
import CourseCard from "../../card/courseCard/CourseCard";
import Carousel from "react-material-ui-carousel";
import './CarouselList.css'

export default function CarouselList({courseList, className}) {
  function renderCarousel(courseList) {
    let ret = [];
    let slide = [];
    for (const course of courseList) {
      if (slide.length < 5) {
        slide.push(<CourseCard key={course._id} className='mr-2' style={{width: '20%'}} courseData={course}/>);
      } else {
        ret.push(<div key={course._id} className='d-flex overflow-hidden'>
          {slide}
        </div>);
        slide = [<CourseCard key={course._id} className='mr-2' style={{width: '20%'}} courseData={course}/>];
      }
    }
    if (slide.length > 0) {
      ret.push(<div key={courseList[courseList.length - 1]._id} className='d-flex overflow-hidden'>
        {slide}
      </div>);
    }
    return ret;
  }

  return <>
    {courseList.length ? (
      <Carousel indicators={false} navButtonsAlwaysVisible={true}
                cycleNavigation={false} autoPlay={false} className={className}>
        {renderCarousel(courseList)}
      </Carousel>
    ) : (
      <div className='spinner-wrapper'>
        <div className="spinner-grow spinner" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )}
  </>;
}
