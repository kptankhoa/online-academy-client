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
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TocIcon from '@material-ui/icons/Toc';

import { useState } from 'react';

import useStyles from '../styles/courseDetail.style';

/**
 *
 * @param {{detaildescription}} props
 * @returns
 */
function CourseContent(props) {
  const { detaildescription, ...rest } = props;
  const [expanded, setExpanded] = useState(false);

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
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>Section</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List style={{ paddingTop: 0, width: '100%' }}>
                <ListItem style={{ paddingTop: 0 }}>
                  <Grid
                    container
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Grid item>
                      <Typography>lesson name</Typography>
                    </Grid>

                    <Grid item>
                      <Link>Preview</Link>
                    </Grid>
                  </Grid>
                </ListItem>

                <ListItem>How</ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>Users</Typography>
              <Typography className={classes.secondaryHeading}>
                You are currently not an owner
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </div>
    </div>
  );
}

export default CourseContent;
