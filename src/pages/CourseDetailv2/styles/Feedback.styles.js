import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  name: {
    fontWeight: 'bold',
  },
  feedbackTxt: {
    padding: '8px',
    marginTop: '8px',
    width: '100%',
    minHeight: '100px',
    border: '1px solid black',
    borderRadius: 0,
  },
  submitBtn: {
    width: '100%',
    color: '#fff',
    borderRadius: 0,
    background: '#000',
    textTransform: 'none',
    '&:hover': {
      background: '#696969',
    }
  },
  showMoreBtn: {
    border: '1px solid black',
    width: '100%',
    borderRadius: 0,
    textTransform: 'none'
  }
}));

export default useStyles;
