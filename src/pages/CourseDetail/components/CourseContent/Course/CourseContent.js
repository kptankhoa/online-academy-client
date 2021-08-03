import {
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  // Link,
  Grid,
  // Fade,
  Slide,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TocIcon from '@material-ui/icons/Toc';
import parse from 'html-react-parser';

import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Preview } from '../..';
import { Loading } from '../../../../../components';
import CourseDetailContext from '../../../CourseDetailContext';

import useStyles from './courseDetail.style';

/**
 *
 * @param {{detaildescription}} props
 * @returns
 */
function CourseContent(props) {
  const { detaildescription } = props;
  const [expanded, setExpanded] = useState(false);
  const { state } = useContext(CourseDetailContext);
  const history = useHistory();

  // const list =[{a, true}]
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();
  return (
    <div>
      <div className={classes.courseContent}>
        <Paper
          elevation={0}
          variant="outlined"
          className={classes.courseDetailDescription}
        >
          {typeof detaildescription === 'string'
            ? parse(detaildescription)
            : detaildescription}
        </Paper>
      </div>

      <div>
        <Typography variant="h5">
          <TocIcon />
          Courses Content
        </Typography>
        <Paper
          style={{ backgroundColor: '#fefefe', position: 'static' }}
          variant="outlined"
        >
          {state.sections ? (
            state.sections.map(({ title, lessons }, i) => {
              return (
                <Accordion
                  key={i}
                  expanded={expanded === i}
                  onChange={handleChange(i)}
                  style={{ position: 'static' }}
                >
                  <AccordionSummary
                    style={{ position: 'static' }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>{title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ position: 'static' }}>
                    <List
                      style={{
                        position: 'static',
                        paddingTop: 0,
                        width: '100%',
                      }}
                    >
                      {lessons.map((lesson, index) => {
                        return (
                          <Slide
                            key={index}
                            direction="up"
                            in={expanded === i}
                            timeout={500 * index}
                          >
                            <ListItem key={index} style={{ paddingTop: 0 }}>
                              <Grid
                                container
                                style={{
                                  position: 'static',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <Grid item>
                                  {state.isEnrolled ? (
                                    <Button
                                      style={{
                                        backgroundColor: 'inherit',
                                        border: 'none',
                                        textTransform: 'none',
                                      }}
                                      onClick={() =>
                                        history.push(
                                          `/courses/${state.course._id}/lessons/${lesson._id}`
                                        )
                                      }
                                    >
                                      <Typography>{lesson.title}</Typography>
                                    </Button>
                                  ) : (
                                    <Typography>{lesson.title}</Typography>
                                  )}
                                </Grid>

                                {lesson.isPreview && (
                                  <Grid item>
                                    <Preview url={lesson.videoUrl}>
                                      Preview
                                    </Preview>
                                  </Grid>
                                )}
                              </Grid>
                            </ListItem>
                          </Slide>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
              );
            })
          ) : (
            <Loading />
          )}
        </Paper>
      </div>
    </div>
  );
}

export default CourseContent;
