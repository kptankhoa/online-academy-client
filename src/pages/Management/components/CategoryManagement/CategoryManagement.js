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
import { AlertDialog, CategoryItem, UpdateCategoryForm } from '..';
import ManagementContext from 'pages/Management/ManagementContext';
import { BackdropLoading, Loading } from 'components';
import {
  deleteCategory,
  getStudents,
  reverseCategory,
  updateCategory,
} from 'pages/Management/utils';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import FormDialog from '../Dialog/FormDialog';
import { TramRounded } from '@material-ui/icons';

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

function CategoryManagement(props) {
  const { state, dispatch } = useContext(ManagementContext);
  const [modal, setModal] = useState({
    isOpen: false,
    data: {},
  });

  const [form, setForm] = useState({
    open: false,
    data: {},
  });

  const [update, setUpdate] = useState({
    open: false,
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

  // console.log('modal', modal);

  const handleSubmit = (data) => {
    dispatch({
      type: 'setCategories',
      payload: {
        categories: [...state.categories, data],
      },
    });
    setForm({
      ...form,
      open: false,
    });
  };

  const handleUpdateSubmit = (data) => {
    setModal({
      ...modal,
      isOpen: true,
    });

    setUpdate({
      ...update,
      open: false,
    });
    updateCategory(data)
      .then((result) => {
        dispatch({
          type: 'setCategories',
          payload: {
            categories: state.categories.map((c) =>
              c._id === data._id ? { ...c, ...result } : c
            ),
          },
        });
        setModal({
          ...modal,
          isOpen: false,
        });
      })
      .catch((error) => {
        alert('error' + error.response.data);
      });
  };

  const handleOpenUpdateForm = (id) => () => {
    const data = state.categories.find((c) => c._id === id);
    setUpdate({
      ...update,
      data: data,
      open: true,
    });
  };

  const handleDetele = (id) => {
    return () => {
      setModal({
        ...modal,
        isOpen: true,
      });
      deleteCategory(id).then((res) => {
        if (state.categories) {
          const c = state.categories.map((d) =>
            d._id === id ? { ...d, isDeleted: true } : d
          );
          dispatch({
            type: 'setCategories',
            payload: {
              categories: c,
            },
          });
          setModal({
            ...modal,
            isOpen: false,
          });
        }
      });
    };
  };

  // const handleOpen = (id) => {
  //   if (state.categories) {
  //     const m = state.categories.find((d) => d._id === id);
  //     return () => setModal({ isOpen: true, data: m });
  //   }
  // };

  const handleReverse = (id) => {
    return () => {
      setModal({
        ...modal,
        isOpen: true,
      });
      reverseCategory(id).then((res) => {
        if (state.categories) {
          const c = state.categories.map((c) =>
            c._id === id ? { ...c, isDeleted: false } : c
          );
          dispatch({
            type: 'setCategories',
            payload: {
              categories: c,
            },
          });
          setModal({
            ...modal,
            isOpen: false,
          });
        }
      });
    };
  };

  // const handleClose = () => {
  //   setModal({
  //     ...modal,
  //     isOpen: false,
  //   });
  // };

  const render = state.categories ? (
    state.categories.map((category) => (
      <Grid item xs={12} key={category._id}>
        <CategoryItem
          categoryName={category.categoryName}
          itemId={category._id}
          onDeleteClicked={handleDetele(category._id)}
          onReverseClicked={handleReverse(category._id)}
          onUpdateClicked={handleOpenUpdateForm(category._id)}
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
                <IconButton onClick={() => setForm({ open: true, data: {} })}>
                  <AddIcon style={{ color: 'white' }} />
                </IconButton>
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
      {/* <AlertDialog
        open={modal.isOpen}
        onAgree={handleDetele(modal.data._id)}
        onDis={handleClose}
        onClose={handleClose}
      /> */}
      <BackdropLoading open={modal.isOpen} />
      <FormDialog
        open={form.open}
        onClose={(open) => setForm({ open: open })}
        onSubmit={handleSubmit}
      />
      <UpdateCategoryForm
        open={update.open}
        onClose={(open) => setUpdate({ ...update, open: open })}
        onSubmit={handleUpdateSubmit}
        defaultValue={update.data}
      />
    </div>
  );
}
export default CategoryManagement;
