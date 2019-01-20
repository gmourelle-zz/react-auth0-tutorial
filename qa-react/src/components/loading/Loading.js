import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css';
const Loading = ({ loading, children }) => {
  if (loading) {
    return (
      <div className="loading">
        <CircularProgress className="spinner" size={150} thickness={4} />
      </div>
    );
  } else {
    return children;
  }
};

export default Loading;
