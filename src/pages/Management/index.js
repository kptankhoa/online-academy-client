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
} from '@material-ui/core';
// import { List } from './components';
import { useEffect, useReducer, useState } from 'react';
import './styles/index.css';
import { ItemList, StudentManagement, TabOptions } from './components';
import StudentManagementContext from './ManagementContext';
import reducer from './ManagementReducer';
import { Loading } from 'components';
import { getCategories, getCourses, getLecturers, getStudents } from './utils';
import NavBar from 'components/domain/menu/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Admin(props) {
  const initialState = {};
  const [state, dispatch] = useReducer(reducer, initialState);

  const classes = useStyles();
  useEffect(() => {
    getStudents().then((result) => {
      dispatch({
        type: 'setStudents',
        payload: { students: result },
      });
    });
    getLecturers().then((result) => {
      dispatch({
        type: 'setLecturers',
        payload: { lecturers: result },
      });
    });
    getCategories().then((result) => {
      dispatch({
        type: 'setCategories',
        payload: { categories: result },
      });
    });
    getCourses().then((result) => {
      dispatch({
        type: 'setCourses',
        payload: { courses: result },
      });
    });
  }, []);

  return (
    <div>
      <StudentManagementContext.Provider value={{ state, dispatch }}>
        <Grid container className="root">
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item xs={12}>
            <TabOptions />
          </Grid>
        </Grid>
      </StudentManagementContext.Provider>
    </div>
  );
}
export default Admin;
