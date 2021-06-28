import { parseJwt } from "../../../utils/auth"

function UserBox(props) {
  const usr = parseJwt(localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN))

  console.log(usr);
  return (
    <div>
      Hello {usr.userId}
    </div>
  )
}


export default UserBox
