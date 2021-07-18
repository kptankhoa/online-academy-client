import React, {useContext} from 'react';
import Avatar from "components/common/avatar/Avatar";
import UserDropdown from "./userDropdown/UserDropdown";

import './UserNav.css';
import {Link} from "react-router-dom";
import {authContext} from "provider/authProvider";

function UserNav() {
  const {authState} = useContext(authContext);

  return (
    <div className="ml-3 user-nav">
      {authState.userInfo ? (
        <>
          <Link to="/user" className="avatar-container">
            <Avatar size={40}
                    src={authState.userInfo.avatar}/>
          </Link>
          <div className="dropdown-container">
            <div className="dropdown-content">
              <UserDropdown userInfo={{
                name: authState.userInfo.fullName,
                email: authState.userInfo.email,
                avatar: authState.userInfo.avatar
              }}/>
            </div>
          </div>
        </>
      ) : ""}
    </div>
  );
}

export default UserNav;
