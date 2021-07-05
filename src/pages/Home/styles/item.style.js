import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  item: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // backgroundColor: 'white',
  },
  destopSection: {
    display: 'none',
    marginTop: 16,
    position: 'sticky',
    top: 80,
    bottom: 0,
    height: 100,
    width: 200,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      // background: 'white',
      // position: '-webkit-sticky',
    },
  },
}));

export default useStyles;
