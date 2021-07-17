import {
  InputAdornment,
  Input,
  InputLabel,
  FormControl,
  IconButton,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import {useContext, useState} from 'react';

import useStyles from '../styles/login_form.style';
import { Login } from '../utils/login.util';

import LoginButton from './LoginButton';
import {authContext} from "../../../provider/authProvider";
import {LOGIN_SUCCESS} from "../../../Reducer/authReducer";

const LoginForm = function (props) {
  const history = useHistory();
  const { type } = props;
  const classes = useStyles();

  const {dispatch} = useContext(authContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const res = await Login(data);
    if (res) {
      // dispatch({
      //   type: LOGIN_SUCCESS,
      //   payload: localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN)
      // });
      history.push('/');
    } else {
      alert('error');
      setLoading(false);
    }
  };

  const [password, setPassword] = useState({
    password: '',
    showPassword: false,
  });

  const [username, setUsername] = useState('');

  const [loading, setLoading] = useState(false);



  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleChange = (p) => (e) => {
    setPassword({ ...password, [p]: e.target.value });
    console.log(password);
  };

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const  handleKeyUp = async (e) =>{
    if (e.keyCode === 13) {
      await onSubmit({username, password: password.password});
    }
  }

  let compo;
  switch (type) {
    case 'admin':
      compo = (
        <form
          // className={classes.root}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl fullWidth border={1}>
            <InputLabel
              htmlFor="username"
              className={errors.username ? classes.error : ''}
            >
              Username {errors.username && '*'}
            </InputLabel>
            <Input
              id="username"
              type="text"
              autoFocus
              value={username}
              {...register('username', { required: true })}
              onChange={handleUsernameChange}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel
              htmlFor="password"
              className={errors.password ? classes.error : ''}
            >
              Password {errors.password && '*'}
            </InputLabel>
            <Input
              id="password"
              type={password.showPassword ? 'text' : 'password'}
              value={password.password}
              {...register('password', { required: true })}
              onKeyUp = {handleKeyUp}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {password.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <LoginButton
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            loading = {loading}
          />
        </form>
      );
      break;

    default:
      compo = <div>None</div>;
      break;
  }

  return compo;
};

export default LoginForm;
