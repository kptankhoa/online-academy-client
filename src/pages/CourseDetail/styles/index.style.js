import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxHeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseDetail: {
    display: 'inline',
  },
  rating: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  courseNmame: {
    fontWeight: 'bold',
    textShadow:
      '2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff',
  },
  register: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    // overflowX: 'hidden',
    // overflowY: 'scroll',
    // bottom: 100,
    // backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
      maxHeight: '85vh',
      maxWidth: 300,
      display: 'flex',
      position: 'fixed',
      top: '10vh',
      height: '80vh',
      width: 300,
      right: '10%',
    },
  },
}));

export default useStyles;
