import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // backgroundColor: '#ffeff1'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  typo: {
    fontSize: 30,
  },
  typoBox: {
    backgroundColor: '#b2ebf2',
    border: '1px solid #7ca4a9'
  }
});

export default useStyles;