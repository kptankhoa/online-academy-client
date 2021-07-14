import React from 'react';

function UserInfo({name, email}) {
  return (
    <div className="ml-2 text-wrap text-truncate">
      <div className="font-weight-bold text-wrap text-truncate">
        {name}
      </div>
      <div className="text-blur text-x-small text-wrap text-truncate">
        {email}
      </div>
    </div>
  );
}

export default UserInfo;
