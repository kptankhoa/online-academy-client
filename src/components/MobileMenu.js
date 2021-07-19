import { Menu, MenuItem, Badge, IconButton } from '@material-ui/core';

import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';

import HeaderBarContext from '../Context/HeaderBarContext';
import { useContext } from 'react';

function MobileMenu(props) {
  const { state, dispatch } = useContext(HeaderBarContext);

  const { mobileMenuId } = props;

  const isMobileMenuOpen = Boolean(state.mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    dispatch({
      type: 'setAnchorEl',
      payload: {
        anchorEl: event.currentTarget,
      },
    });
  };

  const handleMobileMenuClose = (e) => {
    dispatch({
      type: 'setMobileMoreAnchorEl',
      payload: {
        mobileMoreAnchorEl: null,
      },
    });
  };

  return (
    <Menu
      anchorEl={state.mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
}

export default MobileMenu;
