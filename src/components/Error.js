import React from 'react';
import PropTypes from 'prop-types';

function Error({ message }) {
  return (
    <div
      className="Error"
      style={{ color: 'red' }}
    >
      {message}
    </div>
  );
}

Error.defaultProps = {
  message: 'Произошла ошибка при загрузке данных!',
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;