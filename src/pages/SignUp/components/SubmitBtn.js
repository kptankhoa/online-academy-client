import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';

const SubmitBtn = ({loading, btnText, ...props}) => (
  <Button {...props}>{loading ? <CircularProgress /> : btnText}</Button>
)

export default SubmitBtn;
