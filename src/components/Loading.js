import { CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';

function Loading({ children, cancelLoading, timeoutComponent, size, ...rest }) {
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    const s = setTimeout(() => {
      setTimeOut(true);
    }, 10000);
    return () => {
      clearTimeout(s);
    };
  }, [timeOut]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 10,
      }}
    >
      {timeOut ? (
        <div>{timeoutComponent}</div>
      ) : (
        <CircularProgress size={size} />
      )}
    </div>
  );
}

export default Loading;
