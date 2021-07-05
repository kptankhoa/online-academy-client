import { SwipeableDrawer } from '@material-ui/core';

// import useStyles from '../styles/header.style';

import HeaderBarContext from '../Context/HeaderBarContext';
import { useContext } from 'react';
import React from 'react';

import MenuTab from './MenuTab';

function MenuDrawer(props) {
  // const classes = useStyles();

  const { state, dispatch } = useContext(HeaderBarContext);

  const handleDrawerOpen = () => {
    dispatch({
      type: 'open',
    });
  };

  const handleDrawerClose = () => {
    dispatch({
      type: 'close',
    });
  };

  return (
    <React.Fragment>
      <div>
        <SwipeableDrawer
          anchor="left"
          open={state.open}
          onClose={handleDrawerClose}
          onOpen={handleDrawerOpen}
          style={{width:400}}
        >
          <MenuTab />
        </SwipeableDrawer>
      </div>
    </React.Fragment>
  );
}

export default MenuDrawer;
