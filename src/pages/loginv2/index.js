import { Container } from '@material-ui/core';
import LoginForm from 'pages/loginv2/components/loginForm';
import NavBar from 'components/domain/menu/NavBar';
import Footer from 'components/domain/footer/Footer';
import useStyles from './index.styles';
import { useLocation } from 'react-router-dom';

function Login() {
  const classes = useStyles();
  const location = useLocation();
  const username = location.state ? location.state.username : '';
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div className="flex-grow-1">
        <Container
          align="center"
          height={1}
          component="main"
          className={classes.root}
        >
          <h3>Sign In</h3>
          <LoginForm username={username} />
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
