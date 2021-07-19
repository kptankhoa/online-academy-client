import {
  Input,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { signUp } from 'pages/SignUp/signUp.action';
import SubmitBtn from './SubmitBtn';

const SignUpForm = (props) => {
  const {setEmail, setUsername, setSignedUp} = props;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    setEmail(data.email);
    setUsername(data.username);
    const res = await signUp(data);
    if (res) {
      setSignedUp(true);
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
      <SubmitBtn
        type='submit'
        fullWidth
        variant='contained'
        loading={loading}
        color="primary"
        className="mt-4"
        btnText="Sign Up"
      />
    </form>
  );
};

export default SignUpForm;
