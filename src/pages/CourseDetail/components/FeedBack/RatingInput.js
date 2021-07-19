import { IconButton } from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useEffect, useRef, useState } from 'react';

function RatingInput({ type, value, onChange }) {
  const [object, setObject] = useState(value || 1);

  // onChange(object);
  const v = object;

  useEffect(() => {
    onChange && onChange(v);
  }, [v]);

  const handleOnIconClick = (index) => () => {
    setObject(index);
  };
  function drawStar(point) {
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
              padding: 6,
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
                  return (
                    <IconButton
                      key={index}
                      style={{ border: 'none', padding: 0 }}
                      onClick={handleOnIconClick(index + 1)}
                    >
                      <StarBorderIcon
                        fontSize="small"
                        style={{ color: 'orange' }}
                      />
                    </IconButton>
                  );
                case 1:
                  return (
                    <IconButton
                      key={index}
                      style={{ border: 'none', padding: 0 }}
                      onClick={handleOnIconClick(index + 1)}
                    >
                      <StarIcon fontSize="small" style={{ color: 'orange' }} />
                    </IconButton>
                  );
                default:
                  return (
                    <IconButton
                      key={index}
                      style={{ border: 'none', padding: 0 }}
                      onClick={handleOnIconClick(index + 1)}
                    >
                      <StarBorderIcon
                        style={{ color: 'orange' }}
                        fontSize="small"
                      />
                    </IconButton>
                  );
              }
            })}
          </div>
        </div>
      );
    }
  }
  const compo = drawStar(object);

  return <div value={object}>{compo}</div>;
}

export default RatingInput;
