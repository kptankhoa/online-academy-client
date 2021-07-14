import React from 'react';
import Avatar from "../../../common/avatar/Avatar";
import UserDropdown from "./userDropdown/UserDropdown";

import './UserNav.css';
import {Link} from "react-router-dom";

function UserNav() {
  return (
    <div className="ml-3 user-nav">
      <Link to="/user/profile" className="avatar-container">
        <Avatar size={40} src="https://imgt.taimienphi.vn/cf/Images/sa/2018/12/6/co-do-viet-nam-taimienphi.vn.jpg"/>
      </Link>
      <div className="dropdown-container">
        <div className="dropdown-content">
          <UserDropdown/>
        </div>
      </div>
    </div>
  );
}

export default UserNav;
