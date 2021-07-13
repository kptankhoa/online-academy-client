import { CircularProgress } from '@material-ui/core';

function Loading({ size, ...rest }) {
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
      <CircularProgress size={size} />
    </div>
  );
}

export default Loading;
