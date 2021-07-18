import React, {useContext} from 'react';
import {Link, useHistory} from "react-router-dom";
import UserInfoCard from "components/common/card/userInfoCard/UserInfoCard";
import Button from "components/common/button/pureButton/Button";
import {authContext} from "provider/authProvider";
import {academyAxios} from "config/axios.config";
import {LOGOUT_SUCCESS} from "Reducer/authReducer";

function LecturerDropdown({lecturerInfo}) {
  function handleLogOut() {
    academyAxios.post("/auth/logout").then(() => {
      localStorage.removeItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
      localStorage.removeItem(process.env.REACT_APP_STORAGE_REFRESH_TOKEN);
      dispatch({type: LOGOUT_SUCCESS});
      history.push('/login');
    });
  }

  const {dispatch} = useContext(authContext);
  const history = useHistory();
  return (
    <div className="d-flex flex-column">
      <Link to="/user/profile" className="text-decoration-none text-color-primary hover-color">
        <div className="p-3">
          <UserInfoCard avatar={lecturerInfo.avatar}
                        name={lecturerInfo.name} email={lecturerInfo.email}/>
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

export default LecturerDropdown;
