import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';
import Button from 'components/common/button/pureButton/Button';
import { lessonContext } from 'provider/lessonProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function SectionNav(props) {
  const classes = useStyles();
  const { courseId, postProgress } = props;
  const { lessonState } = useContext(lessonContext);
  const sections = lessonState.sections;
  const history = useHistory();
  const onClickHandler = (lesson) => {
    history.push(`/courses/${courseId}/lessons/${lesson._id}`);
    postProgress()
  };
  const renderAccordion = (section) => {
    return (
      <Accordion key={section._id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>{section.title}</Typography>
        </AccordionSummary>
        {section.lessons.map(lesson => (
          <AccordionDetails key={lesson._id}>
            <div className="d-flex align-items-center">
              {lesson.progress && lesson.progress.isFinish && <i className='fas fa-check-square' style={{color: '#2ecc71'}}></i>}
              <Button style={{ fontSize: '14px' }} className='w-100 text-left'
                      onClick={() => onClickHandler(lesson)} >
                {lesson.title}
              </Button>
            </div>
          </AccordionDetails>
        ))}
      </Accordion>
    );
  };
  return (
    <div className={classes.root}>
      <h4 className='mt-3'>Course Sections:</h4>
      {sections.length && sections.map(section => renderAccordion(section))}
    </div>
  );
}
