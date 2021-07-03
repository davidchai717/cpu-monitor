import React from 'react';
import { AlertInterface } from '../../../../types';

interface Props {
  alert: AlertInterface;
}

const PastAlert = ({ alert: { time, isOverloaded } }: Props) => (
  <div className={isOverloaded ? 'warning-past-alert' : 'normal-past-alert'}>
    <p>{time}</p>
    <p>{isOverloaded ? 'High CPU usage' : 'CPU load recovered'}</p>
  </div>
);

export default PastAlert;
