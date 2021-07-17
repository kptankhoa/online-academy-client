import {
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  Link,
  Grid,
  Fade,
  Slide,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TocIcon from '@material-ui/icons/Toc';

import { useContext, useState } from 'react';
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
  const { detaildescription, ...rest } = props;
  const [expanded, setExpanded] = useState(false);
  const { state, dispatch } = useContext(CourseDetailContext);

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
          {detaildescription}
        </Paper>
      </div>

      <div>
        <Typography variant="h5">
          <TocIcon />
          Courses Content
        </Typography>
        <Paper style={{ backgroundColor: '#fefefe' }} variant="outlined">
          {state.sections ? (
            state.sections.map(({ title, lessons }, i) => {
              return (
                <Accordion
                  key={i}
                  expanded={expanded === i}
                  onChange={handleChange(i)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>{title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List style={{ paddingTop: 0, width: '100%' }}>
                      {lessons.map((lesson, index) => {
                        return (
                          <Slide
                            direction="up"
                            in={expanded === i}
                            timeout={500 * index}
                          >
                            <ListItem key={index} style={{ paddingTop: 0 }}>
                              <Grid
                                container
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <Grid item>
                                  <Typography>{lesson.title}</Typography>
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
