import { Typography } from '@material-ui/core';

import { convertNumberWithComma } from 'utils/commonUtils';

function Money({ money, size, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        color: 'red',
      }}
    >
      <Typography
        style={{
          fontStyle: 'italic',
          color: 'yellow',
          fontWeight: 'bold',
          fontSize: size,
          textShadow:
            '2px 0 0 #ff5722, -2px 0 0 #ff5722, 0 2px 0 #ff5722, 0 -2px 0 #ff5722, 1px 1px #ff5722, -1px -1px 0 #ff5722, 1px -1px 0 #ff5722, -1px 1px 0 #ff5722',
        }}
      >
        {convertNumberWithComma(money)}đ
      </Typography>
    </div>
  );
}
export default Money;
