import { Avatar, Grid, Link, Paper, Typography } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';

function LecturerDetail(props) {
  return (
    <Paper style={{ padding: 1 }} variant="elevation">
      <Grid container>
        <Grid item xs={12}>
          <Link>
            <Typography variant="h6" style={{ padding: 5, fontWeight: 'bold' }}>
              Name
            </Typography>
          </Link>
        </Grid>
        <Grid item style={{ display: 'inline', padding: 2 }}>
          <Avatar
            alt="avatar"
            style={{
              width: 100,
              height: 100,
            }}
            // src={''}
          >
            N
          </Avatar>
        </Grid>
        <Grid item style={{ padding: 20 }}>
          <Typography style={{ padding: 2 }}>
            <MailIcon
              style={{ fontSize: 16, marginRight: 3, color: 'orangered' }}
            />
            Email
          </Typography>
          <Typography style={{ padding: 2 }}>
            <PhoneIcon
              style={{ fontSize: 16, marginRight: 3, color: 'orangered' }}
            />
            Phone
          </Typography>
          <Typography style={{ padding: 2 }}>
            <HomeIcon
              style={{ fontSize: 16, marginRight: 3, color: 'orangered' }}
            />
            Address
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Description</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default LecturerDetail;
