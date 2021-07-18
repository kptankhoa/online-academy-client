import { Container } from '@material-ui/core';
import SignUpForm from './components/signUpForm';
import NavBar from 'components/domain/menu/NavBar';
import Footer from 'components/domain/footer/Footer';
import useStyles from './index.styles';

function SignUp() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Container align='center' height={1} component='main' className={classes.root}>
        <h3>Sign Up</h3>
        <SignUpForm />
      </Container>
      <Footer />
    </>
  );
}

export default SignUp;
