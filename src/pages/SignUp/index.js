import { Container } from '@material-ui/core';
import SignUpForm from './components/SignUpForm';
import VerifyForm from './components/VerifyForm';
import NavBar from 'components/domain/menu/NavBar';
import Footer from 'components/domain/footer/Footer';
import useStyles from './index.styles';
import { useState } from 'react';

function SignUp() {
  const classes = useStyles();
  const [signedUp, setSignedUp] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  return (
    <>
      <NavBar />
      <Container align='center' height={1} component='main' className={classes.root}>
        {!signedUp ? (
          <>
            <h3>Sign Up</h3>
            <SignUpForm setSignedUp={setSignedUp} setEmail={setEmail} setUsername={setUsername}/>
          </>
        ) : (
          <>
            <h3>Verify Your Email</h3>
            <h4>Submit the code we sent to your email:</h4>
            <VerifyForm email={email} username={username} />
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default SignUp;
