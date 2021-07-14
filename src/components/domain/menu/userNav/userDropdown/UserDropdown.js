import React from 'react';
import UserInfoCard from "../../../../common/card/userInfoCard/UserInfoCard";
import Button from "../../../../common/button/pureButton/Button";

import "../../../../../styles/text.style.css";
import "../../../../../styles/pseudo.style.css";
import {Link, useHistory} from "react-router-dom";
import {academyAxios} from "../../../../../config/axios.config";

function UserDropdown({userInfo}) {
  const history = useHistory();

  function handleLogOut() {
    academyAxios.post("/auth/logout").then(() => {
      localStorage.removeItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
      localStorage.removeItem(process.env.REACT_APP_STORAGE_REFRESH_TOKEN);
      history.push('/login');
    });
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
        <Link to="/user/my-learning">
          <Button className="text-left w-100 text-small hover-color">
            My learning
          </Button>
        </Link>
        <Link to="/user/wishlist">
          <Button className="text-left w-100 text-small hover-color">
            Wish list
          </Button>
        </Link>
      </div>
      <div className="border-top py-2">
        <Link to="/user/profile">
          <Button className="text-left w-100 text-small hover-color">
            My Profile
          </Button>
        </Link>
        <Button onClick={handleLogOut}
                className="text-left w-100 text-small hover-color">
          Log out
        </Button>
      </div>
    </div>
  );
}

export default UserDropdown;
