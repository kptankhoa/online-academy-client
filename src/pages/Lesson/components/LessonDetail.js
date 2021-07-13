import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

const LessonDetail = (props) => {
  const { lesson, setProgress } = props;
  const player = useRef(null);
  const startAt = lesson.progress ? (lesson.progress.progress ? lesson.progress.progress : lesson.progress) : 0;
  return (
    <div className='container-fluid flex-fill'>
      <div className='row'>
        <div className='m-auto'>
          <h4 className="mt-3">Lesson: {lesson.title}</h4>
          <ReactPlayer
            url={`${lesson.videoUrl}`}
            ref={player}
            width="1080px" height="600px"
            onProgress={(progress)=> setProgress(progress)}
            onReady={() => player.current.seekTo(startAt)}
          />
        </div>
      </div>
    </div>
  )
}

export default LessonDetail;
