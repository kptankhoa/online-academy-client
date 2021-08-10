import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  topContainer: {
    background: '#101010',
  },
  courseRating: {
    display: 'inline-block',
  },
  buttonF: {
    color: '#fff',
    borderRadius: 0,
    borderColor: '#fff',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    textTransform: 'none',
  },
  buttonT: {
    color: '#000',
    borderRadius: 0,
    borderColor: '#000',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    textTransform: 'none',
  },
  courseImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  name: {
    fontWeight: 'bold',
    color: '#8cd1c8',
    cursor: 'pointer',
    '&:hover': {
      color: '#5da39a',
      textDecoration: 'underline',
    }
  },
  originalPrice: {
    fontSize: '18px',
    fontWeight: 'normal',
    textDecoration: 'line-through',
    color: '#696969'
  },
  promotionalPrice: {
    fontWeight: 'bold',
    fontSize: '25px'
  }
}));

export default useStyles;
