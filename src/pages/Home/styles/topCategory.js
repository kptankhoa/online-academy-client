import { makeStyles } from '@material-ui/core';
import { PlayCircleFilledWhite } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    width: '100%',
    color: 'white',
    marginRight: 20,
  },
  item: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#FFFFFF',
    forcedColorAdjust: 'auto',
    backgroundColor: 'inherit',
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
}));

export default useStyles;
