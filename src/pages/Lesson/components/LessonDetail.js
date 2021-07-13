import React from 'react';
import ReactPlayer from 'react-player';

const LessonDetail = (props) => {
  const { lesson } = props;
  return (
    <div className='container-fluid flex-fill'>
      <div className='row'>
        <div className='m-auto'>
          <h4 className="mt-3">Lesson: {lesson.title}</h4>
          <ReactPlayer url={lesson.videoUrl} width="1080px" height="600px" onProgress={(progress)=> console.log(progress)}/>
        </div>
      </div>
    </div>
  )
}

export default LessonDetail;
