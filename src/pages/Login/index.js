import { Container, Avatar } from '@material-ui/core';

import LoginForm from './components/login_form';
import useStyles from './styles/index.style';

function Login(props) {
  const classes = useStyles();

  const html = (
    <Container align="center" height={1} className={classes.root} component="main">
      <Avatar className={classes.avatar}>N</Avatar>
      <h3 className={classes.signin}>Sign In</h3>
      <LoginForm type="admin"></LoginForm>
    </Container>
  );
  return html
};

export default Login;
