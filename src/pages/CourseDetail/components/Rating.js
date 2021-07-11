import { Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { useEffect } from 'react';

function drawStar(point) {
  if (point >= 0 && point <= 10) {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
      <div style={{color: "yellow"}}>
        {arr.map((i) => {
          switch (i) {
            case 0:
              return <StarBorderIcon />;
            case 1:
              return <StarIcon />;
            case 2:
              return <StarHalfIcon />;
            default:
              return <StarBorderIcon />;
          }
        })}
        <Typography  style={{color: "black", textAlign: 'end', fontWeight: 'bold'}}>{point}</Typography>
      </div>
    );
  }
}

function Rating(props) {
  const { num } = props;

  const compo = drawStar(num);

  return <div>{compo}</div>;
}

export default Rating;
