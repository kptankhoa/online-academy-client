import { parseJwt } from '../../../utils/auth';

import LogOutButton from '../../../components/LogOutButton';

function UserBox(props) {
  const usr = parseJwt(
    localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN)
  );

  console.log(usr);
  return (
    <div>
      <div>Hello {usr.userId}</div>
      <LogOutButton />
    </div>
  );
}

export default UserBox;
