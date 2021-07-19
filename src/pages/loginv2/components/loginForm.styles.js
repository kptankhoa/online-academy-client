import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 20,
    borderRadius: 20,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    width: 500,
    height: 150,
    padding: theme.spacing(4),
  },
  submit: {
    my: theme.spacing(2),
  },
  error: {
    color: 'red'
  }
}));

export default useStyles;
