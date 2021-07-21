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
import { AlertDialog, CategoryItem } from '..';
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

function CategoryManagement(props) {
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
  //       payload: { categories: result },
  //     });
  //   });
  // }, []);

  const classes = useStyles();

  console.log('modal', modal);

  const handleOpen = (id) => {
    if (state.categories) {
      const m = state.categories.find((d) => d._id === id);
      return () => setModal({ isOpen: true, data: m });
    }
  };

  const handleClose = () => {
    setModal({
      ...modal,
      isOpen: false,
    });
  };

  const render = state.categories ? (
    state.categories.map((category) => (
      <Grid item xs={12} key={category._id}>
        <CategoryItem
          categoryName={category.categoryName}
          itemId={category._id}
          onClick={handleOpen(category._id)}
          isDeleted={category.isDeleted ? 'true' : 'false'}
          level={category.level}
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
                Categories
              </Typography>
            }
          >
            <ListSubheader
              style={{ padding: 0, margin: 0, display: 'initial' }}
            >
              <CategoryItem
                noOptions
                categoryName="Category Name"
                itemId="ID"
                isDeleted="isDeleted"
                level="Level"
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
            {/* {state.categories?} */}
            {render}
          </List>
        </Grid>
      </Grid>
      <AlertDialog open={modal.isOpen} onClose={handleClose} />
    </div>
  );
}
export default CategoryManagement;
