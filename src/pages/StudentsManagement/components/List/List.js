import { Grid } from '@material-ui/core';

function ItemList({ itemId, username, fullName, email, status, onclick }) {
  <div onClick={onclick}>
    <Grid container>
      <Grid item>{itemId}</Grid>
      <Grid item>{username}</Grid>
      <Grid item>{fullName}</Grid>
      <Grid item>{email}</Grid>
      <Grid item>{status}</Grid>
    </Grid>
  </div>;
}

export default ItemList;
