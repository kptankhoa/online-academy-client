import React from 'react';
import Avatar from "../../avatar/Avatar";
import UserInfo from "./userInfo/UserInfo";

function UserInfoCard({avatar, name, email}) {
  return (
    <div className="d-flex align-items-center">
      <div>
        <Avatar size={60} src={avatar}/>
      </div>
      <UserInfo name={name} email={email}/>
    </div>
  );
}

export default UserInfoCard;
