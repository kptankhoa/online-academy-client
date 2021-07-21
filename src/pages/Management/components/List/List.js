import { Divider, Grid } from '@material-ui/core';

function List({ head, children }) {
  console.log(children);
  return (
    <div
      style={{
        width: '100%',
        maxHeight: 100,
        border: '1px solid black',
        overflowY: true,
      }}
    >
      <Grid container>
        <Grid xs={12}>{head}</Grid>
        <Grid xs={12}>
          {' '}
          {Array.isArray(children)
            ? children.map((child, index) =>
                index === 0 ? (
                  <div style={{ margin: '0px 2px' }}>
                    <Divider style={{ backgroundColor: 'black' }} />
                    {child}
                  </div>
                ) : (
                  <div style={{ margin: '0px 2px' }}>
                    <Divider />
                    {child}
                  </div>
                )
              )
            : children}
        </Grid>
      </Grid>
    </div>
  );
}

export default List;
