import {
  Input,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { verify } from 'pages/SignUp/signUp.action';
import SubmitBtn from './SubmitBtn';

const VerifyForm = (props) => {
  const { email, username } = props;
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    data.email = email;
    const res = await verify(data);
    if (res) {
      alert('Verified Successfully!');
      history.push('/login', { username });
    } else {
      alert('Verify failed!');
      setLoading(false);
    }
  });
  const [loading, setLoading] = useState(false);
  return (
    <form onSubmit={onSubmit}>
      <FormControl fullWidth border={1} className='m-1'>
        <InputLabel
          htmlFor='verifyKey'
        >
          Your Verify Key {errors.fullName && '*'}
        </InputLabel>
        <Input
          id='verifyKey'
          type='text'
          autoFocus
          {...register('key', { required: true })}
        />
      </FormControl>
      <SubmitBtn
        type='submit'
        fullWidth
        variant='contained'
        loading={loading}
        color="primary"
        className="mt-4"
        btnText='Verify'
      />
    </form>
  );
};

export default VerifyForm;
