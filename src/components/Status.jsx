import React from 'react';
import PropTypes from 'prop-types';

const Status = ({ alertArr, label }) => (
  <div className="status">
    <p>
      <strong>
        {`${label}: `}
      </strong>
      {alertArr.length}
    </p>
    {alertArr.length ? (
      <p>
        Last occured at:
        {alertArr[alertArr.length - 1].time}
      </p>
    ) : null}
  </div>
);

Status.propTypes = {
  alertArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
};

export default Status;
