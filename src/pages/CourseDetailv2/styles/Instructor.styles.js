import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  name: {
    fontWeight: 'bold',
    color: '#67a199',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  descLess: {
    textAlign: 'justify',
    position: 'relative',
    height: '100px',
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
  descMore: {
    textAlign: 'justify',
  },
  readBtn: {
    padding: 0,
    color: '#67a199',
  }
}));

export default useStyles;
