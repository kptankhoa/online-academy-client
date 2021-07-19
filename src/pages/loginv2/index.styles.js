import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(4),
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    display: "flex",
    justifyContent: "center"
  },
}));

export default useStyles;
