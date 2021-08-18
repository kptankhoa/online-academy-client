import {
  Input,
  InputLabel,
  FormControl, FormControlLabel, Checkbox
} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {useContext, useState} from 'react';
import {Login} from 'pages/loginv2/login.action';
import LoginButton from 'pages/Login/components/LoginButton';
import jwt_decode from 'jwt-decode';
import {academyAxios} from 'config/axios.config';
import {LOGIN_SUCCESS} from 'Reducer/authReducer';
import {authContext} from 'provider/authProvider';

const LoginForm = function ({username}) {
  const history = useHistory();
  const {event, dispatch} = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const res = await Login(data, asLecturer);
    if (res) {
      const token = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
      if (token) {
        const decoded = jwt_decode(token);
        event.enableTokenRefreshLoop(decoded.type);
        let url;
        switch (decoded.type) {
          case "admin":
            url = `admin/${decoded.userId}`;
            break;
          case "student":
            url = `/users/${decoded.userId}`;
            break;
          case "lecturer":
            url = `/lecturers/${decoded.userId}`;
            break;
          default:
            break;
        }
        academyAxios.get(url).then(response => {
          if (response.status === 200) {
            dispatch({
              type: LOGIN_SUCCESS,
              payload: {
                ...response.data,
                type: decoded.type
              }
            });
            if(decoded.type === 'admin') {
              history.push('/admin/managements')
            } else {
              history.push('/');
            }
          }
        });
      }
    } else {
      alert('Username or password is incorrect!');
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
      <FormControl fullWidth border={1} className='m-2'>
        <InputLabel
          htmlFor='username'
        >
          Username {errors.username && '*'}
        </InputLabel>
        <Input
          id='username'
          type='text'
          autoFocus
          {...register('username', {required: true})}
          defaultValue={username}
        />
      </FormControl>
      <FormControl fullWidth className='m-2'>
        <InputLabel
          htmlFor='password'
        >
          Password {errors.password && '*'}
        </InputLabel>
        <Input
          id='password'
          type={'password'}
          {...register('password', {required: true})}
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
      />
    </form>
  );
};

export default LoginForm;
