import React from 'react';
import UserInfoCard from "../../../../common/card/userInfoCard/UserInfoCard";
import Button from "../../../../common/button/Button";

import "../../../../../styles/text.style.css";
import "../../../../../styles/pseudo.style.css";
import {Link, useHistory} from "react-router-dom";
import {academyAxios} from "../../../../../config/axios.config";

function UserDropdown({userInfo}) {
  const history = useHistory();

  function handleLogOut() {
    // academyAxios.post();
    history.push('/login');
  }

  return (
    <div className="d-flex flex-column">
      <Link to="/user/profile" className="text-decoration-none text-color-primary hover-color">
        <div className="p-3">
          <UserInfoCard avatar={userInfo.avatar}
                        name={userInfo.name} email={userInfo.email}/>
        </div>
      </Link>
      <div className="border-top py-2">
        <Link to="/user/profile">
          <Button title="My Profile" className="text-left w-100 text-small hover-color"/>
        </Link>
        <Button title="Log out" onClick={handleLogOut}
                className="text-left w-100 text-small hover-color"/>
      </div>
    </div>
  );
}

export default UserDropdown;
