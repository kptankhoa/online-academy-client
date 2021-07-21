import React from 'react';

const FullScreenLoading = () => {
  return (
    <div className="full-screen-loading">
      <div className="spinner-border" style={{height:75, width:75}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default FullScreenLoading;
