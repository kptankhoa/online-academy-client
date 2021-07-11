import { Box, Grid, Paper, CssBaseline } from '@material-ui/core';

import Top10New from './components/Top10New';
import TopOfView from './components/TopOfViews';
import HeaderBar from '../../components/HeaderBar';
import ControlledCarousel from './components/ControlledCarousel';
import TopCategory from './components/TopCategory';

import useStyles from './styles/item.style';

import reducer from './HomeReducer';
import { useReducer } from 'react';

import HomeContext from './HomeContext';
import Menu from '../../components/domain/menu/Menu';

const Home = function(props) {
  const classes = useStyles();

  const initialState = {
    top10New: [],
    topOfView: [],
    topCategory: [],
    trendingCourse: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={classes.root}>
      {/*<HeaderBar />*/}
      <Menu />
      {/* <CssBaseline /> */}
      {/*<HomeContext.Provider value={{ state, dispatch }}>*/}
      {/*  <div>*/}
      {/*    <Grid container spacing={1}>*/}
      {/*      <Grid item xs={12} className={classes.root}>*/}
      {/*        <Grid container justify='center'>*/}
      {/*          <Grid item xs={8} className={classes.item}>*/}
      {/*            <ControlledCarousel />*/}
      {/*          </Grid>*/}
      {/*        </Grid>*/}
      {/*      </Grid>*/}
      {/*      <Grid item md={9}>*/}
      {/*        <Grid container spacing={1} justify='space-between'>*/}
      {/*          <Box className={classes.item}>*/}
      {/*            <Top10New />*/}
      {/*          </Box>*/}
      {/*        </Grid>*/}
      {/*        <Grid container spacing={1} justify='space-between'>*/}
      {/*          <Box className={classes.item}>*/}
      {/*            <TopOfView />*/}
      {/*          </Box>*/}
      {/*        </Grid>*/}
      {/*      </Grid>*/}
      {/*      <Grid item md={3} className={classes.destopSection}>*/}
      {/*        <Grid container spacing={1} justify='flex-end'>*/}
      {/*          <TopCategory />*/}
      {/*        </Grid>*/}
      {/*      </Grid>*/}
      {/*    </Grid>*/}
      {/*  </div>*/}
      {/*</HomeContext.Provider>*/}
    </div>
  );
};

export default Home;
