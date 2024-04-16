import React from 'react';
import './styles.scss';

const Alert = ({ message, type }) => {
  return (
    <div className={`alert ${type}`}>
      {message}
    </div>
  );
};

export default Alert;

