import { useContext } from 'react';

import { List, Typography } from '@material-ui/core';
import LecturerDetail from './LecturerDetail';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import CourseDetailContext from '../../../CourseDetailContext';

import { Loading } from '../../../../../components';
function Lecturers(params) {
  const { state, dispatch } = useContext(CourseDetailContext);

  const Lecturer = state.course.courseLecturers ? (
    <List style={{ position: 'static' }}>
      {state.course.courseLecturers.map((lecturer, i) => {
        return (
          <LecturerDetail
            key={i}
            address={lecturer.address}
            description={lecturer.description}
            email={lecturer.email}
            img={lecturer.avatar}
            name={lecturer.fullName}
            phone={lecturer.phone}
          ></LecturerDetail>
        );
      })}
    </List>
  ) : (
    <Loading></Loading>
  );
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
      {Lecturer}
    </div>
  );
}

export default Lecturers;
