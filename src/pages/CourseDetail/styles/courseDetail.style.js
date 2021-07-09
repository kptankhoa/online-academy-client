import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    maxHeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5
  },
  img: {
    width: '100%',
    maxHeight: 400,
  },
  title: {
    padding: theme.spacing(2),
    alignItems: 'center',
    textAlign: 'center',
    display: 'block',
    backgroundColor: 'inherit',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadow:
      '2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
  },
  subTitle: {
    padding: theme.spacing(2),
    display: 'block',
    backgroundColor: 'inherit',
    marginTop: 100,
    color: 'whitesmoke',
    textShadow:
      '2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
  },
  content: {
    display: 'block',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
