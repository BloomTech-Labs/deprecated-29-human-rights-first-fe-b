import PropTypes from 'prop-types';
import React from 'react';

// Currently not being used
function LoadingComponent(props) {
  const { message } = props;

  return <div>{message}</div>;
}

export default LoadingComponent;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
