import React from 'react';
import Avatar from "../../avatar/Avatar";

import './UserInfoCard.css'

function UserInfoCard({avatar, name, email}) {
  return (
    <div className="d-flex align-items-center">
      <div className="flex-grow-1">
        <Avatar size={60} src={avatar}/>
      </div>
      <div className="ml-2 text-wrap text-truncate">
        <div className="font-weight-bold text-wrap text-truncate">
          {name}
        </div>
        <div className="text-blur text-x-small text-wrap text-truncate">
          {email}
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
