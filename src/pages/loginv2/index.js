import { Container } from '@material-ui/core';
import LoginForm from './components/loginForm';
import NavBar from 'components/domain/menu/NavBar';
import Footer from 'components/domain/footer/Footer';
import useStyles from './index.styles';
import { useLocation } from 'react-router-dom';

function Login() {
  const classes = useStyles();
  const location = useLocation();
  const username = location.state ? location.state.username : '';
  return (
    <>
      <NavBar />
      <Container align='center' height={1} component='main' className={classes.root}>
        <h3>Sign In</h3>
        <LoginForm username={username}/>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
