import React from 'react';
import PropTypes from 'prop-types';

const PastAlert = ({ alert: { time, isOverloaded } }) => (
  <div className={isOverloaded ? 'warning-past-alert' : 'normal-past-alert'}>
    <p>{time}</p>
    <p>{isOverloaded ? 'High CPU usage' : 'CPU load recovered'}</p>
  </div>
);

PastAlert.propTypes = {
  alert: PropTypes.shape({ time: PropTypes.string, isOverloaded: PropTypes.bool }).isRequired,
};

export default PastAlert;
