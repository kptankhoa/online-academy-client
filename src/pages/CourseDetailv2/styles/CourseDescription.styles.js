import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  courseDescriptionLess: {
    textAlign: 'justify',
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '70%',
      background: 'linear-gradient(transparent, #fff)'
    }
  },
  courseDescriptionMore: {
    textAlign: 'justify',
  },
  readBtn: {
    padding: 0,
    color: '#67a199',
  }
}));

export default useStyles;
