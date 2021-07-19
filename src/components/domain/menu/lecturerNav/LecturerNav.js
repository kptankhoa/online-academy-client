import React, {useContext} from 'react';
import {authContext} from "provider/authProvider";
import {Link} from "react-router-dom";
import Avatar from "components/common/avatar/Avatar";
import UserDropdown from "../userNav/userDropdown/UserDropdown";

import "styles/other.style.css";

function LecturerNav() {
  const {authState} = useContext(authContext);

  return (
    <div className="ml-3 position-relative">
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

export default LecturerNav;
