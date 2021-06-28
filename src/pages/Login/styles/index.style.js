import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #1976d2 30%, #FF8E53 90%)',
    color: 'white',
    padding: theme.spacing(4),
    height: '100vh',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: theme.spacing(2, 0),
    backgroundColor: 'orange'
  },
  signin: {
    margin: theme.spacing(2),
    color: 'red',
    borderTop: 2,
    fontSize: 30
  }
}));

export default useStyles;