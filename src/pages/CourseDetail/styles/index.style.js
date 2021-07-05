import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 800,
    maxHeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseDetail: {
    display: 'inline'
  }
}));

export default useStyles;
