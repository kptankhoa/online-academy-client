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
}));

export default useStyles;
