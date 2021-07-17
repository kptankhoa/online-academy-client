import React from 'react';
import Avatar from "../../../common/avatar/Avatar";
import UserDropdown from "./userDropdown/UserDropdown";

import './UserNav.css';
import {Link} from "react-router-dom";
import jwt_decode from "jwt-decode";

function UserNav() {
  const accessToken = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
  const decoded = jwt_decode(accessToken);
  return (
    <div className="ml-3 user-nav">
      <Link to="/user" className="avatar-container">
        <Avatar size={40}
                src={decoded.avatar}/>
      </Link>
      <div className="dropdown-container">
        <div className="dropdown-content">
          <UserDropdown userInfo={{
            name: decoded.fullName,
            email: decoded.email,
            avatar: decoded.avatar
          }}/>
        </div>
      </div>
    </div>
  );
}

export default UserNav;
