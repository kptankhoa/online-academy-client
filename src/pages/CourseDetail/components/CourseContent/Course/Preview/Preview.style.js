import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    background: 'inherit',
    border: 'none',
    fontWeight: 'bold',
    color: 'blue',
  },
}));
