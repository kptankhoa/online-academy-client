import { MenuItem, Menu } from '@material-ui/core';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import HeaderBarContext from '../Context/HeaderBarContext';

import logout from '../utils/logout';

/**
 *
 * @param {{menuId}} props
 * @returns
 */
function MoreMenu(props) {
  const { menuId } = props;
  const { state, dispatch } = useContext(HeaderBarContext);

  const history = useHistory();

  function handleMenuClose() {
    dispatch({
      type: 'handleMenuClose',
    });
  }

  function handleLogOut_Clicked(e) {
    logout();
    history.push('/login');
  }

  const isMenuOpen = Boolean(state.anchorEl);

  // console.log('menuId', menuId, 'state', state);

  const LoggedMenu = (
    <Menu
      anchorEl={state.anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogOut_Clicked}>Log Out</MenuItem>
    </Menu>
  );

  return LoggedMenu;
}

export default MoreMenu;
