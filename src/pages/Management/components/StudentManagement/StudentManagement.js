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
import { ItemList } from '..';
import ManagementContext from 'pages/Management/ManagementContext';
import { Loading } from 'components';
import { getStudents } from 'pages/Management/utils';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  const [modal, setModal] = useState({
    isOpen: false,
    data: {},
  });
  // const [open, setOpen] = useState(false);
  // const [model, setModel] = useState({});

  // useEffect(() => {
  //   getStudents().then((result) => {
  //     console.log('result', result);
  //     dispatch({
  //       type: 'setStudents',
  //       payload: { students: result },
  //     });
  //   });
  // }, []);

  const classes = useStyles();

  console.log('modal', modal);

  const handleOpen = (id) => {
    if (state.students) {
      const m = state.students.find((d) => d._id === id);
      return () => setModal({ isOpen: true, data: m });
    }
  };

  const handleClose = () => {
    setModal({
      ...modal,
      isOpen: false,
    });
  };

  const render = state.students ? (
    state.students.map((student) => (
      <Grid item xs={12} key={student._id}>
        <ItemList
          email={student.email}
          fullName={student.fullName}
          itemId={student._id}
          onClick={handleOpen(student._id)}
          status={student.status}
          username={student.username}
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
                Students
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
            {/* {state.students?} */}
            {render}
          </List>
        </Grid>
      </Grid>
      <Modal
        open={modal.isOpen}
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
        <Fade in={modal.isOpen}>
          <div
            className={`${classes.paper} ${
              modal.data.status === 'ACTIVE'
                ? classes.active
                : modal.data.status === 'PENDING'
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
                    src={modal.data.avatar}
                  >
                    {modal.data.fullName && modal.data.fullName.slice(0, 1)}
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
                          {modal.data.fullName}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5">
                          {modal.data.username}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>{modal.data.email}</Typography>
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
                          WishList
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container>
                          <Grid item xs={12}>
                            {modal.data.wishList &&
                              modal.data.wishList.map((course, index) => {
                                return index === 0 ? (
                                  <div>
                                    <Typography>{course.courseName}</Typography>
                                  </div>
                                ) : (
                                  <div>
                                    <Divider />
                                    <Typography style={{ marginTop: 10 }}>
                                      {course.courseName}
                                    </Typography>
                                  </div>
                                );
                              })}
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
                          Learning List
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Grid>
                <Grid item xs={12} className="center" style={{ marginTop: 10 }}>
                  <Button className="bot-button banned">Delete</Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default StudentManagement;
