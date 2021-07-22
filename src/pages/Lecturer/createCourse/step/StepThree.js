import React from 'react';
import SectionView from "../../../../components/domain/lecturer/sectionView/SectionView";

const lessons = [
  {
    title: "What is HTML?",
    order: 1
  },
  {
    title: "What is CSS?",
    order: 2
  },
  {
    title: "What is JavaScript?",
    order: 3
  }
]

const StepThree = () => {
  return (
    <div className="mt-5">
      <SectionView
        className="mb-3"
        title="Introduction"
        order="1" lessons={lessons}
      />
    </div>
  );
};

export default StepThree;
