import {
  Input,
  InputLabel,
  FormControl, FormControlLabel, Checkbox
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { SignUp } from 'pages/SignUp/signUp.action';
import SignUpBtn from './SignUpBtn';

const SignUpForm = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    console.log(data);
    const res = await SignUp(data);
    if (res) {
      alert('Sign Up Successfully!');
      history.push('/login');
    } else {
      alert('Cannot sign up! Try another email or username!');
      setLoading(false);
    }
  });
  const [loading, setLoading] = useState(false);
  return (
    <form onSubmit={onSubmit}>
      <FormControl fullWidth border={1} className='m-1'>
        <InputLabel
          htmlFor='fullName'
        >
          Full Name {errors.fullName && '*'}
        </InputLabel>
        <Input
          id='fullName'
          type='text'
          autoFocus
          {...register('fullName', { required: true })}
        />
      </FormControl>
      <FormControl fullWidth border={1} className='m-1'>
        <InputLabel
          htmlFor='emailInput'
        >
          Email {errors.email && '*'}
        </InputLabel>
        <Input
          id='emailInput'
          type='email'
          autoFocus
          {...register('email', { required: true })}
        />
      </FormControl>
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
      <SignUpBtn
        type='submit'
        fullWidth
        variant='contained'
        loading={loading}
        color="primary"
        className="mt-4"
      />
    </form>
  );
};

export default SignUpForm;
