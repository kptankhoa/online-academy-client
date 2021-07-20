import {
  Backdrop,
  Button,
  Fade,
  Grid,
  makeStyles,
  Modal,
} from '@material-ui/core';
import { useReducer, useState } from 'react';
import { ItemList } from './components';
import StudentManagementContext from './StudentManagementContext';
import reducer from './StudentManagementReducer';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function StudentManagement(props) {
  const initialState = {};
  const [state, dispatch] = useReducer(reducer, initialState);
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState({});
  const data = [
    {
      id: '123456789',
      name: 'a',
    },
    {
      id: '123456788',
      name: 'b',
    },
  ];

  const classes = useStyles();

  const handleOpen = (id) => () => {
    const m = data.filter((d) => d.id === id);
    setModel(m[0]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StudentManagementContext.Provider value={{ state, dispatch }}>
        <Grid container>
          item list
          <Grid item xs={12}>
            <ItemList
              email="a@g.c"
              fullName="vanlinh"
              itemId="123456789"
              onclick={handleOpen('123456789')}
              status="banned"
              username="abc"
              key="123456789"
              color="red"
              style={{ border: 'solid 1px blue' }}
            />
          </Grid>
          <Grid item xs={12}>
            <ItemList
              email="a@g.c"
              fullName="vanlinh"
              itemId="123456788"
              onclick={handleOpen('123456788')}
              status="banned"
              username="abc"
              key="123456789"
              color="red"
              style={{ border: 'solid 1px blue' }}
            />
          </Grid>
        </Grid>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div>
              <h2 id="transition-modal-title">{model.name}</h2>
            </div>
          </Fade>
        </Modal>
      </StudentManagementContext.Provider>
    </div>
  );
}
export default StudentManagement;
