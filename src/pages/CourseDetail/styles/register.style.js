import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'fixed',
    maxWidth: 800,
    maxHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'left',
    top: 0,
    right: 20,
  },
  courseDetail: {
    display: 'inline',
  },
  registerbutton: { alignItems: 'center', justifyContent: 'center' },
  button: {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'blue'
    }
  }
}));

export default useStyles;
