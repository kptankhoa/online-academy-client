import { Box, Typography } from '@material-ui/core';

import useStyles from '../styles/card.style';

function AccordingTitle({ children, ...rest }) {
  const classes = useStyles();

  return (
    <Box className={classes.typoBox} {...rest}>
      <Typography
        variant="caption"
        color="inherit"
        className={classes.typo}
      >
        {children}
      </Typography>
    </Box>
  );
}

export default AccordingTitle;
