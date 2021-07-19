import { Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useEffect } from 'react';

function drawStar(point, persons) {
  if (point >= 0 && point <= 5) {
    const arr = [0, 0, 0, 0, 0];
    const p = Math.round(point * 2) / 2;
    const p1 = Math.floor(p);

    for (var i = 0; i < p1; i++) {
      arr[i] = 1;
    }

    if (p != p1) {
      arr[p1] = 2;
    }

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
        }}
      >
        <Typography
          style={{
            color: 'orange',
            fontWeight: 'bold',
            display: 'flex',
            fontSize: 14,
            paddingRight: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {point}
        </Typography>
        <div
          style={{
            display: 'flex',
            color: 'orange',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {arr.map((i, index) => {
            switch (i) {
              case 0:
                return <StarBorderIcon key={index} fontSize="small" />;
              case 1:
                return <StarIcon key={index} fontSize="small" />;
              case 2:
                return <StarHalfIcon key={index} fontSize="small" />;
              default:
                return <StarBorderIcon key={index} fontSize="small" />;
            }
          })}
        </div>
        {(persons || persons === 0) && (
          <div
            style={{
              display: 'flex',
              padding: '5%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SupervisorAccountIcon />
            {persons}
          </div>
        )}
      </div>
    );
  }
}

function Rating(props) {
  const { num, persons } = props;

  const compo = drawStar(num, persons);

  return <div>{compo}</div>;
}

export default Rating;
