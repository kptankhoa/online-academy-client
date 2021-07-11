import { List, Typography } from '@material-ui/core';
import LecturerDetail from './LecturerDetail';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
function Lecturers(params) {
  return (
    <div>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <PersonOutlineIcon />

        <Typography
          variant="h5"
          style={{
            fontWeight: 'bold',
            display: 'inline',
          }}
        >
          Lecturers
        </Typography>
      </div>

      <List>
        <LecturerDetail></LecturerDetail>
      </List>
    </div>
  );
}

export default Lecturers;
