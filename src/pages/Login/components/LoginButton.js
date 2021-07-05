import { Button, CircularProgress } from '@material-ui/core';
import { useState } from 'react';

function LoginButton({loading, ...props}) {

  return (
    <Button {...props}>{loading ? <CircularProgress /> : 'Sign In'}</Button>
  );
}

export default LoginButton;
