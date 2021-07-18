import {
  Input,
  InputLabel,
  FormControl, FormControlLabel, Checkbox
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Login } from 'pages/loginv2/login.action';
import LoginButton from 'pages/Login/components/LoginButton';
import jwt_decode from 'jwt-decode';
import { academyAxios } from '../../../config/axios.config';
import { LOGIN_SUCCESS } from '../../../Reducer/authReducer';
import { authContext } from '../../../provider/authProvider';

const LoginForm = function(props) {
  const history = useHistory();
  const {dispatch} = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
      setLoading(true);
      const res = await Login(data, asLecturer);
      if (res) {
        const token = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
        if (token) {
          const decoded = jwt_decode(token);
          academyAxios.get(`/users/${decoded.userId}`).then(response => {
            if (response.status === 200) {
              dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
              });
              history.push('/');
            }
          });
        }
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