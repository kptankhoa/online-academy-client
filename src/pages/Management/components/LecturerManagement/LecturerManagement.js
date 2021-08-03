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
  IconButton,
} from '@material-ui/core';
// import { List } from './components';
import { useContext, useEffect, useState } from 'react';
import { ItemList } from '..';
import ManagementContext from 'pages/Management/ManagementContext';
import { BackdropLoading, Loading } from 'components';
import AddIcon from '@material-ui/icons/Add';
import {
  addLecturer,
  deleteLecturer,
  getStudents,
  reverseLecturer,
} from 'pages/Management/utils';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddLecturerForm from '../Dialog/FormAddLecturer';

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
    width: '50%',
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
    // overflowY: 'scroll',
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
    isFormOpen: false,
    form: {},
    isBackdropOpen: false,
  });
  // const [modal, setModal] = useState({
  //   isOpen: false,
  //   data: {},
  // });
  // const [form, setForm] = useState({
  //   open: false,
  //   data: {},
  // });

  // const [backdrop, setBackdrop] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [model, setModel] = useState({});

  // useEffect(() => {
  //   getStudents().then((result) => {
  //     console.log('result', result);
  //     dispatch({
  //       type: 'setStudents',
  //       payload: { lecturers: result },
  //     });
  //   });
  // }, []);

  const classes = useStyles();

  const handleReverse = (id) => {
    return async () => {
      setPage({
        ...page,
        isModalOpen: false,
        isBackdropOpen: true,
      });
      reverseLecturer(id).then((result) => {
        setPage({
          ...page,
          isBackdropOpen: false,
          isModalOpen: false,
        });
        dispatch({
          type: 'setLecturers',
          payload: {
            lecturers: state.lecturers.map((course) =>
              course._id === id ? { ...course, status: 'ACTIVE' } : course
            ),
          },
        });
      });
    };
  };

  const handleDelete = (id) => {
    return () => {
      console.log('in');
      setPage({
        ...page,
        isBackdropOpen: true,
      });
      deleteLecturer(id)
        .then((res) => {
          dispatch({
            type: 'setLecturers',
            payload: {
              lecturers: state.lecturers.map((l) =>
                l._id === id ? { ...l, status: 'DELETED' } : l
              ),
            },
          });
          setPage({
            ...page,
            isModalOpen: false,
            isBackdropOpen: false,
          });
          // setModal({ ...modal, isOpen: false });
          // setBackdrop(false);
        })
        .catch((error) => {
          alert('error', error);
        });
    };
  };

  const handleSubmit = (data) => {
    setPage({
      ...page,
      isBackdropOpen: true,
    });
    console.log('data', data);
    try {
      addLecturer(data).then((res) => {
        dispatch({
          type: 'setLecturers',
          payload: {
            lecturers: [...state.lecturers, res],
          },
        });
        setPage({
          ...page,
          isFormOpen: false,
          isBackdropOpen: false,
        });
      });
    } catch (error) {
      setPage({
        ...page,
        isFormOpen: false,
        isBackdropOpen: false,
      });
      alert(error);
    }
  };

  const handleOpen = (id) => {
    if (state.lecturers) {
      const m = state.lecturers.find((d) => d._id === id);
      return () =>
        setPage({
          isModalOpen: true,
          modal: m,
        });
      // return () => setModal({ isOpen: true, data: m });
    }
  };

  const handleClose = () => {
    setPage({
      ...page,
      isModalOpen: false,
    });
    // setModal({
    //   ...modal,
    //   isOpen: false,
    // });
  };

  const render = state.lecturers ? (
    state.lecturers.map((lecturer) => (
      <Grid item xs={12} key={lecturer._id}>
        <ItemList
          email={lecturer.email}
          fullName={lecturer.fullName}
          itemId={lecturer._id}
          onClick={handleOpen(lecturer._id)}
          status={lecturer.status}
          username={lecturer.username}
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
                Lecturers
                <IconButton
                  onClick={() =>
                    setPage({ ...page, isFormOpen: true, form: {} })
                  }
                >
                  {/* <IconButton onClick={() => setForm({ open: true, data: {} })}> */}
                  <AddIcon style={{ color: 'white' }} />
                </IconButton>
              </Typography>
            }
          >
            <ListSubheader
              style={{ padding: 0, margin: 0, display: 'initial' }}
            >
              <ItemList
                noOptions
                email="Email"
                fullName="Full Name"
                itemId="ID"
                status="Status"
                username="Username"
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
            {/* {state.lecturers?} */}
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
              page.modal.status === 'ACTIVE'
                ? classes.active
                : page.modal.status === 'PENDING'
                ? classes.pending
                : classes.deleted
            }`}
          >
            <div>
              <Grid container>
                <Grid item xs={3}>
                  <Avatar
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 100,
                      width: 100,
                    }}
                    src={page.modal.avatar}
                  >
                    {page.modal.fullName && page.modal.fullName.slice(0, 1)}
                  </Avatar>
                </Grid>
                <Grid item xs={9}>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography
                          style={{
                            fontWeight: 'bold',
                          }}
                          variant="h4"
                        >
                          {page.modal.fullName}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5">
                          {page.modal.username}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>{page.modal.email}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
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
                          Teaching Courses
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container>
                          <Grid item xs={12}>
                            {page.modal.teachingCourses &&
                              page.modal.teachingCourses.map(
                                (course, index) => {
                                  return index === 0 ? (
                                    <div>
                                      <Typography>
                                        {course.courseName}
                                      </Typography>
                                    </div>
                                  ) : (
                                    <div>
                                      <Divider />
                                      <Typography style={{ marginTop: 10 }}>
                                        {course.courseName}
                                      </Typography>
                                    </div>
                                  );
                                }
                              )}
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Grid>
                <Grid item xs={12} className="center" style={{ marginTop: 10 }}>
                  {page.modal.status === 'ACTIVE' ? (
                    <Button
                      className="bot-button banned"
                      onClick={handleDelete(page.modal._id)}
                    >
                      Delete
                    </Button>
                  ) : (
                    <Button
                      className="bot-button active"
                      onClick={handleReverse(page.modal._id)}
                    >
                      Reverse
                    </Button>
                  )}
                </Grid>
              </Grid>
            </div>
          </div>
        </Fade>
      </Modal>
      <AddLecturerForm
        open={page.isFormOpen}
        onSubmit={handleSubmit}
        onClose={() =>
          setPage({
            ...page,
            isFormOpen: false,
          })
        }
        // onClose={() => setForm({ ...form, open: false })}
      />
      <BackdropLoading
        style={{ display: 'fixed' }}
        open={page.isBackdropOpen}
      />
    </div>
  );
}
export default StudentManagement;
