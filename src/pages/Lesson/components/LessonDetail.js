import React, { useContext, useRef } from 'react';
import ReactPlayer from 'react-player';
import LessonViewContext from 'pages/Lesson/lessonViewContext';

const LessonDetail = (props) => {
  const { state } = useContext(LessonViewContext);
  const lesson = state.lesson;
  const { setProgress } = props;
  const player = useRef(null);
  const startAt = lesson.progress ? (lesson.progress.progress ? lesson.progress.progress : lesson.progress) : 0;
  return (
    <div className='container-fluid flex-fill m-3'>
      <div className='row'>
        <div className='m-auto'>
          <h4 className="mt-3 font-weight-bold">Lesson: {lesson.title}</h4>
          <ReactPlayer
            url={`${lesson.videoUrl}`}
            ref={player}
            width="1080px" height="608px"
            onProgress={(progress)=> setProgress(progress)}
            onReady={() => player.current.seekTo(startAt)}
          />
        </div>
      </div>
    </div>
  )
}

export default LessonDetail;
