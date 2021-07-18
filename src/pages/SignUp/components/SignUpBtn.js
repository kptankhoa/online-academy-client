import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';

const SignUpBtn = ({loading, ...props}) => (
  <Button {...props}>{loading ? <CircularProgress /> : 'Sign Up'}</Button>
)

export default SignUpBtn;
