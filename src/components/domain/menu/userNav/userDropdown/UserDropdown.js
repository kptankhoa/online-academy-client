import React from 'react';
import UserInfoCard from "../../../../common/card/userInfoCard/UserInfoCard";
import Button from "../../../../common/button/Button";

import "../../../../../styles/text.style.css";
import "../../../../../styles/pseudo.style.css";
import {Link} from "react-router-dom";

function UserDropdown() {
  // const history = useHistory();

  function handleLogOut() {
    // history.push('/login');
  }

  return (
    <div className="d-flex flex-column">
      <Link to="/user/profile" className="text-decoration-none text-color-primary hover-color">
        <div className="p-3">
          <UserInfoCard avatar="https://imgt.taimienphi.vn/cf/Images/sa/2018/12/6/co-do-viet-nam-taimienphi.vn.jpg"
                        name="Dinh Gia Kiet" email="1712541@student.hcmus.edu.vn"/>
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
