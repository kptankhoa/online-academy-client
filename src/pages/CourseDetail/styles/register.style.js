import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  courseDetail: {
    display: 'inline',
  },
  registerbutton: { alignItems: 'center', justifyContent: 'center' },
  button: {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'blue',
    },
  },
  price: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
}));

export default useStyles;
