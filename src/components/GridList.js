
import { Grid } from '@material-ui/core';

function GridList(props) {
  const { children, ...rest } = props;
  // const childrenWithProps = React.Children.map(children, child => {
  //   // Checking isValidElement is the safe way and avoids a typescript
  //   // error too.
  //   if (React.isValidElement(child)) {
  //     return React.cloneElement(child, { xs: 4 });
  //   }
  //   return child;
  // });
  return (
    <Grid container {...rest}>
      {children.map((child, i) => {
        return (
          <Grid item key={i} md={6}>
            {child}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default GridList;
