import {
  InputAdornment,
  Input,
  InputLabel,
  FormControl,
  IconButton,
  Button,
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { useState } from 'react';

import useStyles from '../styles/login_form.style';
import { Login } from '../utils/login.util';

const LoginForm = function (props) {
  const history = useHistory();
  const { type } = props;
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await Login(data);
    if (res) {
      history.push('/home');
    } else {
      alert("error")
    }
  };

  const [password, setPassword] = useState({
    password: '',
    showPassword: false,
  });

  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleChange = (p) => (e) => {
    setPassword({ ...password, [p]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let compo;
  switch (type) {
    case 'admin':
      compo = (
        <form
          className={classes.root}
          border={3}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl fullWidth border={1}>
            <InputLabel
              htmlFor="username"
              className={errors.username ? classes.error : ''}
            >
              Username {errors.username && '*'}{' '}
            </InputLabel>
            <Input
              id="username"
              type="text"
              value={username}
              {...register('username', { required: true })}
              onChange={handleUsernameChange}
            />
          </FormControl>
          <FormControl fullWidth>
            {errors.password && (
              <span className={classes.error}>password is required</span>
            )}
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type={password.showPassword ? 'text' : 'password'}
              value={password.password}
              {...register('password', { required: true })}
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
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
