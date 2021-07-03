import React from 'react';
import { AlertInterface } from '../../types';

interface props {
  alertArr: AlertInterface[];
  label: string;
}

const Status = ({ alertArr, label }: props) => (
  <div className="status">
    <p>
      <strong>{`${label}: `}</strong>
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

export default Status;
