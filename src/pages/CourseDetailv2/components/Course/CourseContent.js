import React, { useContext, useState } from 'react';
import {
  Grid, withStyles
} from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';
import Button from 'components/common/button/pureButton/Button';
import CourseContext from '../../CourseContext';
import ReactPlayer from 'react-player';
import { isStudent } from '../../utils/isStudent';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails);

const CourseContent = () => {
  const { state: { course, sections, isEnrolled } } = useContext(CourseContext);
  const history = useHistory();
  const onClickHandler = (lesson) => {
    if (isStudent() && isEnrolled) {
      history.push(`/courses/${course._id}/lessons/${lesson._id}`);
    } else {
      alert('You have to enroll in this course first!');
    }
  };
  const [expanded, setExpanded] = React.useState('');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const renderAccordion = (section, index) => {
    return (
      <Accordion key={section._id} square expanded={expanded === `panel${index}`}
                 onChange={handleChange(`panel${index}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>{section.title}</Typography>
        </AccordionSummary>
        {section.lessons.map(lesson => (
          <AccordionDetails key={lesson._id}>
            <div className='d-flex align-items-center justify-content-between w-100'>
              <Button
                style={{ fontSize: '14px' }}
                onClick={() => onClickHandler(lesson)}>
                {lesson.title}
              </Button>
              {lesson.isPreview && (
                <Button
                  style={{ color: '#67a199', fontWeight: 'bold' }}
                  onClick={() => onPreviewBtnClick(lesson.videoUrl)}>
                  Preview
                </Button>)}
            </div>
          </AccordionDetails>
        ))}
      </Accordion>
    );
  };

  const onPreviewBtnClick = (url) => {
    setVideoUrl(url);
    setShowVideoModal(true);
  };

  return (
    <>
      <Grid container>
        {sections && (
          <Grid item md={8} style={{ marginTop: '10px' }}>
            <h4 className='mt-3 font-weight-bold'>Course Content:</h4>
            {sections.length ?
              sections.map((section, index) => renderAccordion(section, index))
              : (
                <div>
                  No content available now
                </div>
              )}
          </Grid>
        )}
      </Grid>
      {showVideoModal && (
        <div className='video-modal'>
          <button className='pure-button p-0 pt-2' onClick={() => setShowVideoModal(false)}>
            <i className='far fa-times-circle' style={{ fontSize: 40, color: '#eee' }} />
          </button>
          <div className='video-wrapper'>
            <ReactPlayer url={videoUrl} width='100%' height='100%' />
          </div>
        </div>
      )}
    </>
  );
};

export default CourseContent;
