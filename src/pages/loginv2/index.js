import { Container } from '@material-ui/core';
import LoginForm from 'pages/loginv2/components/loginForm';
import NavBar from 'components/domain/menu/NavBar';
import Footer from 'components/domain/footer/Footer';
import useStyles from './index.styles';
import { useLocation } from 'react-router-dom';
import React, {useState} from "react";

function Login() {
  const classes = useStyles();
  const location = useLocation();
  const username = location.state ? location.state.username : '';
  const [errorMessage, setErrorMessage] = useState("");

  function handleError(errorMessage) {
    setErrorMessage(errorMessage);
  }
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
          <h3 className="font-weight-bold">Sign In</h3>
          {errorMessage && (
            <div className="alert alert-danger d-flex align-items-center mb-2" role="alert">
              <i className="fas fa-exclamation-circle" style={{fontSize: 20}}/>&nbsp;&nbsp;
              <div>{errorMessage}</div>
            </div>
          )}
          <LoginForm username={username} handleError={handleError}/>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
