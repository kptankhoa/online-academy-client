import React from 'react';
import {useParams} from "react-router-dom";
import BasicInformation from "./basicInfomation/BasicInformation";
import CourseImageTab from "./courseImage/CourseImageTab";

const EditCourseTabContent = ({className}) => {
  const {tabId} = useParams();

  function renderTabContent(tabId) {
    switch (tabId) {
      case "basic":
        return <BasicInformation/>;
      case "image":
        return <CourseImageTab/>;
      case "video":
        return <div>Video</div>;
      default:
        return <div className="text-center">Not found</div>;
    }
  }

  return (
    <div className={className}>
      {renderTabContent(tabId)}
    </div>
  );
};

export default EditCourseTabContent;
