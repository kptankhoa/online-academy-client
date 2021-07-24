import {
  Backdrop,
  Button,
  Fade,
  Grid,
  makeStyles,
  Modal,
  List,
  ListSubheader,
  Typography,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@material-ui/core';
// import { List } from './components';
import { useContext, useEffect, useState } from 'react';
import { CourseItem } from '..';
import ManagementContext from 'pages/Management/ManagementContext';
import { BackdropLoading, Loading } from 'components';
import {
  deleteCourse,
  deleteStudent,
  getSections,
  getStudents,
} from 'pages/Management/utils';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Rating } from 'pages/CourseDetail/components';
import { convertNumberWithComma } from 'utils/commonUtils';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
  },
  paper: {
    backgroundColor: 'white',
    // border: '1px solid #000',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: theme.spacing(2, 4, 3),
    width: '80%',
    height: '80vh',
    overflowY: 'auto',
  },
  active: {
    borderTop: '5px solid blue',
  },
  pending: {
    borderTop: '5px solid orangered',
  },
  deleted: {
    borderTop: '5px solid orangered',
  },
  root: {
    width: '100%',
    backgroundColor: '#fefefe',
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'scroll',
    maxHeight: '100%',
  },
  modelAccordion: {
    width: '100%',
    marginTop: 10,
  },
}));

function StudentManagement(props) {
  const { state, dispatch } = useContext(ManagementContext);
  const [page, setPage] = useState({
    isModalOpen: false,
    modal: {},
    backdrop: false,
  });
  // const [modal, setModal] = useState({
  //   isOpen: false,
  //   data: {},
  // });
  // const [open, setOpen] = useState(false);
  // const [model, setModel] = useState({});

  // useEffect(() => {
  //   getStudents().then((result) => {
  //     console.log('result', result);
  //     dispatch({
  //       type: 'setStudents',
  //       payload: { courses: result },
  //     });
  //   });
  // }, []);

  const classes = useStyles();
  console.log('page', page);

  const handleDelete = (id) => {
    return () => {
      setPage({
        ...page,
        backdrop: true,
        isModalOpen: false,
      });

      deleteCourse(id).then((res) => {
        dispatch({
          type: 'setCourses',
          payload: {
            courses: state.courses.map((c) =>
              c._id === id ? { ...c, status: 'DELETED' } : c
            ),
          },
        });
        setPage({
          ...page,
          isModalOpen: false,
          backdrop: false,
        });
      });
    };
  };
  const handleOpen = (id) => {
    return () => {
      setPage({
        ...page,
        backdrop: true,
      });
      if (state.courses) {
        const m = state.courses.find((d) => d._id === id);
        console.log(m);
        getSections(id).then((data) => {
          setPage({
            ...page,
            isModalOpen: true,
            modal: m,
            sections: data,
            backdrop: false,
          });
        });
      }
    };
  };

  const handleClose = () => {
    setPage({
      ...page,
      isModalOpen: false,
    });
  };

  const render = state.courses ? (
    state.courses.map((course) => (
      <Grid item xs={12} key={course._id}>
        <CourseItem
          itemId={course._id}
          category={course.category && course.category.categoryName}
          courseName={course.courseName}
          onClick={handleOpen(course._id)}
          ratedNumber={course.ratedNumber}
          soldNumber={course.soldNumber}
          key={course._id}
          status={course.status}
          // style={{ border: 'solid 1px blue' }}
        />
      </Grid>
    ))
  ) : (
    <Loading />
  );

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <List
            className={classes.root}
            subheader={
              <Typography
                style={{
                  border: 'solid 1px black',
                  borderRadius: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  backgroundColor: 'darkblue',
                  fontSize: 20,
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                Courses
              </Typography>
            }
          >
            <ListSubheader
              style={{ padding: 0, margin: 0, display: 'initial' }}
            >
              <CourseItem
                noOptions
                itemId="ID"
                category="Category"
                courseName="Course Name"
                ratedNumber="Rated Number"
                soldNumber="Sold Number"
                status="Status"
                style={{
                  border: 'solid 1px blue',
                  borderRadius: 0,
                  width: '100%',
                  padding: 0,
                  backgroundColor: 'blue',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              />
            </ListSubheader>
            {/* {state.courses?} */}
            {render}
          </List>
        </Grid>
      </Grid>
      <Modal
        open={page.isModalOpen}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={page.isModalOpen}>
          <div
            className={`${classes.paper} ${
              page.modal.status === 'COMPLETED'
                ? classes.active
                : page.modal.status === 'INCOMPLETE'
                ? classes.pending
                : classes.deleted
            }`}
          >
            <div>
              <Grid container>
                <Grid item xs={12} style={{ width: '100%' }}>
                  <img
                    src={page.modal.courseImage}
                    alt="Course"
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <Typography style={{ padding: 7 }}>
                      {page.modal.category && page.modal.category.categoryName}
                    </Typography>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <Rating
                      num={page.modal.ratingPoint}
                      persons={page.modal.ratedNumber}
                    />
                    <Typography style={{ marginLeft: 10, padding: 7 }}>
                      Total: ({page.modal.totalHours}h)
                    </Typography>
                    <Typography style={{ marginLeft: 10, padding: 7 }}>
                      Views: {page.modal.view}
                    </Typography>
                  </div>
                </Grid>

                <Grid
                  item
                  xs={12}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Typography
                    style={{ color: 'orange', fontWeight: 'bold' }}
                    variant="h5"
                  >
                    {convertNumberWithComma(page.modal.price)}VND
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ width: '100%' }}>
                  <Typography variant="h3">
                    Course Name: {page.modal.courseName}
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ width: '100%' }}>
                  <Typography variant="h6">
                    <b>Brief Description:</b> {page.modal.briefDescription}
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ width: '100%' }}>
                  <Typography>
                    <b>Detail Description:</b> {page.modal.detailDescription}
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ width: '100%' }}>
                  <div className={classes.modelAccordion}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          Courses
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container>
                          <Grid item xs={12}>
                            {page.modal.courseLecturers &&
                              page.modal.courseLecturers.map(
                                (lecturer, index) => {
                                  const render = (
                                    <Grid container style={{ padding: 5 }}>
                                      <Grid item xs={1}>
                                        <Avatar src={lecturer.avatar}></Avatar>
                                      </Grid>

                                      <Grid item xs={11}>
                                        <Typography>
                                          {lecturer.fullName}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  );
                                  return index === 0 ? (
                                    <div>{render}</div>
                                  ) : (
                                    <div>
                                      <Divider />

                                      {render}
                                    </div>
                                  );
                                }
                              )}
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography className={classes.heading}>
                          Sections
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container>
                          {page.sections &&
                            page.sections.map((section) => {
                              return (
                                <Grid item xs={12}>
                                  <Accordion>
                                    <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      aria-controls="panel1a-content"
                                      id="panel1a-header"
                                    >
                                      <Typography className={classes.heading}>
                                        {section.title}
                                      </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <Grid container>
                                        <Grid item xs={12}>
                                          {section.lessons.map(
                                            (lesson, index) => {
                                              const render = (
                                                <Grid
                                                  container
                                                  style={{ padding: 5 }}
                                                >
                                                  <Typography>
                                                    {lesson.title}
                                                  </Typography>
                                                </Grid>
                                              );
                                              return index === 0 ? (
                                                <div>{render}</div>
                                              ) : (
                                                <div>
                                                  <Divider />

                                                  {render}
                                                </div>
                                              );
                                            }
                                          )}
                                        </Grid>
                                      </Grid>
                                    </AccordionDetails>
                                  </Accordion>
                                </Grid>
                              );
                            })}
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Grid>
                <Grid item xs={12} className="center" style={{ marginTop: 10 }}>
                  {page.modal.status !== 'DELETED' && (
                    <Button
                      className="bot-button banned"
                      onClick={handleDelete(page.modal._id)}
                    >
                      Delete
                    </Button>
                  )}
                </Grid>
              </Grid>
            </div>
          </div>
        </Fade>
      </Modal>
      <BackdropLoading open={page.backdrop} />
    </div>
  );
}
export default StudentManagement;
