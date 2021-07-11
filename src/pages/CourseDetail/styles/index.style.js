import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxHeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseDetail: {
    display: 'inline'
  },
  rating: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20
  }
}));

export default useStyles;
