import { Button, Container, Link } from '@material-ui/core';
import LoginForm from 'pages/loginv2/components/loginForm';
import NavBar from 'components/domain/menu/NavBar';
import Footer from 'components/domain/footer/Footer';
import useStyles from './index.styles';
import { useHistory, useLocation } from 'react-router-dom';

function Login() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const username = location.state ? location.state.username : '';
  return (
    <>
      <NavBar />
      <Container
        align="center"
        height={1}
        component="main"
        className={classes.root}
      >
        <h3>Sign In</h3>
        <LoginForm username={username} />
        <Button
          style={{
            backgroundColor: 'inherit',
            textTransform: 'none',
            textDecoration: 'underline',
            color: 'blue',
          }}
          onClick={() => history.push('/login/admin')}
        >
          Log as Administrator
        </Button>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
