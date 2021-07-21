import { Container, Link } from '@material-ui/core';
import LoginForm from 'pages/loginv2/components/loginForm';
import NavBar from 'components/domain/menu/NavBar';
import Footer from 'components/domain/footer/Footer';
import useStyles from './index.styles';

function Login() {
  const classes = useStyles();

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
        <LoginForm />
        <Link href="/login/admin">Log as Administrator</Link>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
