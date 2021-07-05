import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import reducer from '../Reducer/HeaderBarReducer';
import HeaderBarContext from '../Context/HeaderBarContext';

import MenuButton from './MenuButton';
import SearchBar from './SearchBar';
import MoreArea from './MoreArea';
import MoreMenu from './MoreMenu';
// import MobileMenu from './MobileMenu';

import useStyles from '../styles/header.style';
import { useReducer } from 'react';

export default function HeaderBar() {
  const classes = useStyles();

  const initialState = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    open: false,
    tabValue: 0,
    categories: {
      web: [],
      mobile: []
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={classes.grow}>
      <HeaderBarContext.Provider value={{ state, dispatch }}>
        <AppBar position="fixed">
          <Toolbar>
            <MenuButton />
            <Typography className={classes.title} variant="h6" noWrap>
              Material-UI
            </Typography>
            <SearchBar />
            <div className={classes.grow} />
            <MoreArea/>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <MoreMenu/>
        {/* <MobileMenu/> */}
      </HeaderBarContext.Provider>
    </div>
  );
}
