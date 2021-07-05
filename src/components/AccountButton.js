import { IconButton } from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import { useContext } from 'react';
import HeaderBarContext from '../Context/HeaderBarContext';

function AccountButton(props) {
  const { menuId } = props;

  const { dispatch } = useContext(HeaderBarContext);

  const handleProfileMenuOpen = (event) => {
    dispatch({
      type: 'setAnchorEl',
      payload: {
        anchorEl: event.currentTarget,
      },
    });
  };

  return (
    <IconButton
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  );
}

export default AccountButton;
