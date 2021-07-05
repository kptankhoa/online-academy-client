import { useContext } from 'react';
import { IconButton } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import useStyles from '../styles/header.style';
import MenuDrawer from './MenuDrawer';



import HeaderBarContext from '../Context/HeaderBarContext';

function MenuButton(props) {
  const classes = useStyles();

  const { state, dispatch } = useContext(HeaderBarContext);
  const handleDrawerOpen = () => {
    if (state.open)
      dispatch({
        type: 'close',
      });
    else
      dispatch({
        type: 'open',
      });
  };
  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
      <MenuDrawer />
    </div>
  );
}

export default MenuButton;
