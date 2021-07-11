import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'fixed',
    maxWidth: 800,
    maxHeight: '85%',
    alignItems: 'center',
    justifyContent: 'left',
    overflowX:'hidden',
    overflowY:'scroll',
    top: 70,
    paddingTop: 180,
    right: 0,
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
  },
  price: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red'
  }
}));

export default useStyles;
