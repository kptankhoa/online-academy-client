import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    maxHeight: 400,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
    padding: 0,
  },
  img: {
    width: '100%',
    maxHeight: 400,
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    display: 'inline',
    backgroundColor: 'inherit',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadow:
      '2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
  },
  subTitle: {
    display: 'block',
    backgroundColor: 'inherit',
    marginTop: 50,
    color: 'whitesmoke',
    textShadow:
      '2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
  },
  content: {
    position: 'absolute',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    top: 80,
    left: 16,
  },
  register: {
    display: 'none',
    position: 'fixed',
    maxWidth: 300,
    maxHeight: '85vh',
    alignItems: 'center',
    justifyContent: 'left',
    // overflowX: 'hidden',
    // overflowY: 'scroll',
    top: '10vh',
    // bottom: 100,
    height: '80vh',
    width: 300,
    // backgroundColor: 'white',
    right: '10%',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  courseDetailDescription: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
}));

export default useStyles;
