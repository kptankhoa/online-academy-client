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

    console.log(arr);

    return (
      <div style={{ justifyContent: 'space-between' }}>
        <Typography
          style={{
            color: 'black',
            fontWeight: 'bold',
            display: 'inline',
            fontSize: 14,
            padding: 2,
          }}
        >
          {point}/5
        </Typography>
        <div style={{ display: 'inline', color: 'orange' }}>
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
        {persons && (
          <div style={{ display: 'inline', padding: '5%' }}>
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
