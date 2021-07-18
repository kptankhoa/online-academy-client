import {
  Input,
  InputLabel,
  FormControl, FormControlLabel, Checkbox
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Login } from 'pages/loginv2/login.action';
import LoginButton from 'pages/Login/components/LoginButton';

const LoginForm = function(props) {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
      setLoading(true);
      const res = await Login(data, asLecturer);
      if (res) {
        history.push('/');
      } else {
        alert('error');
        setLoading(false);
      }
  });
  const onCheckHandler = () => {
    setAsLecturer(!asLecturer);
  }
  const [loading, setLoading] = useState(false);
  const [asLecturer, setAsLecturer] = useState(false);
  return (
    <form
      onSubmit={onSubmit}
    >
      <FormControl fullWidth border={1} className='m-1'>
        <InputLabel
          htmlFor='username'
        >
          Username {errors.username && '*'}
        </InputLabel>
        <Input
          id='username'
          type='text'
          autoFocus
          {...register('username', { required: true })}
        />
      </FormControl>
      <FormControl fullWidth className='m-1' >
        <InputLabel
          htmlFor='password'
        >
          Password {errors.password && '*'}
        </InputLabel>
        <Input
          id='password'
          type={'password'}
          {...register('password', { required: true })}
        />
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={asLecturer}
            onChange={onCheckHandler}
            name="checkedB"
            color="primary"
          />
        }
        label="Log In as Lecturer"
      />
      <LoginButton
        type='submit'
        fullWidth
        variant='contained'
        loading={loading}
        color="primary"
        // color="secondary"
      />
    </form>
  );
};

export default LoginForm;
