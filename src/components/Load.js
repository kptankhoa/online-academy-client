import { CircularProgress } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { useEffect, useState } from 'react';

function Loading({
  children,
  load,
  cancelLoading,
  timeoutComponent,
  size,
  ...rest
}) {
  const [overtime, setOvertime] = useState(false);

  const timeout = setTimeout(() => setOvertime(true), 10000);

  let render;
  switch (load) {
    case 'loading':
      render = (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: 10,
          }}
        >
          <CircularProgress size={size} />
        </div>
      );
      break;
    case 'timeout':
      render = <div>{timeoutComponent}</div>;
      break;
    case 'loaded':
      render = children;
      break;
    default:
      render = null;
      break;
  }
  // useEffect(() => {
  //   const s = setTimeout(() => {
  //     setTimeOut(true);
  //   }, 10000);
  //   return clearTimeout(s);
  // }, [timeOut]);

  return overtime ? timeoutComponent : render;
}

export default Loading;
