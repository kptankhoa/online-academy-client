import React from 'react';

import NotificationButton from './NotificationButton';
import AccountButton from './AccountButton';
import Login from './Login';
// import MoreButton from './MoreButton';
// import HeaderBarContext from '../Context/HeaderBarContext';

import useStyles from '../styles/header.style';
// import { useContext } from 'react';

function MoreArea(params) {
  const classes = useStyles();

  // const { state, dispatch } = useContext(HeaderBarContext);
  // const mobileMenuId = 'primary-search-account-menu-mobile';

  const LoggedMenu = (
    <div className={classes.sectionDesktop}>
      <NotificationButton />
      <AccountButton />
    </div>
  );
  const UnLoggedMenu = (
    <div className={classes.sectionDesktop}>
      <Login></Login>
    </div>
  );

  return (
    <div>
      {localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN)
        ? LoggedMenu
        : UnLoggedMenu}
      {/* <div className={classes.sectionMobile}>
        <MoreButton mobileMenuId={mobileMenuId} />
      </div> */}
    </div>
  );
}

export default MoreArea;
