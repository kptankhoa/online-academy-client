import {Avatar, Container} from '@material-ui/core';

import LoginForm from './components/login_form';
import useStyles from './styles/index.style';

function Login() {
  const classes = useStyles();

  return (
    <Container align="center" height={1} className={classes.root} component="main">
      <Avatar className={classes.avatar}>N</Avatar>
      <h3 className={classes.signin}>Sign In</h3>
      <LoginForm type="admin"/>
    </Container>
  )
}

export default Login;
