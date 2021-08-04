import React, { useContext, useRef } from 'react';
import ReactPlayer from 'react-player';
import { SET_PROGRESS } from '../lessonViewReducer';
import { lessonContext } from 'provider/lessonProvider';

const LessonDetail = () => {
  const { lessonState, dispatch } = useContext(lessonContext);
  const lesson = lessonState.lesson;
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
            onProgress={(progress)=> dispatch({type: SET_PROGRESS, payload: progress})}
            onReady={() => player.current.seekTo(startAt)}
          />
        </div>
      </div>
    </div>
  )
}

export default LessonDetail;
