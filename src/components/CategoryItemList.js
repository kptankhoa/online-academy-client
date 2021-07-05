import { Paper, Link } from '@material-ui/core';

import useStyles from '../styles/category.style';

/**
 *
 * @param {{children, link}} param0
 * @returns
 */
function CategoryItemList({ children, link, ...rest }) {
  const classes = useStyles();
  return (
    <Paper className={classes.item} {...rest}>
      <Link href={link} color='inherit'>{children}</Link>
    </Paper>
  );
}

export default CategoryItemList;
