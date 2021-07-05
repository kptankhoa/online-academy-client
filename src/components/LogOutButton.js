import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import logout from '../utils/logout';

function LogOutButton(props) {
  const history = useHistory();

  const handleLogOutButton_clicked = (e) => {
    logout();
    history.push('/login');
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleLogOutButton_clicked}
    >
      Hello World
    </Button>
  );
}

export default LogOutButton;
