import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 800,
    maxHeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    maxHeight: '100%',
  },
  title: {
    display: 'flex',
    position: 'absolute',
    backgroundColor: 'inherit',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadow:
      '2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
  },
  subTitle: {
    display: 'flex',
    position: 'absolute',
    backgroundColor: 'inherit',
    marginTop: 100,
    color: 'whitesmoke',
    textShadow:
      '2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
  }
}));

export default useStyles;
