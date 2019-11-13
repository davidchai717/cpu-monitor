import React from 'react';
import { Link } from 'react-router-dom';

const PageToggle = () => (
  <div id="page-toggle">
    <Link to="/">
      Chart
    </Link>
    <Link to="/past-alerts">
      Past Alerts
    </Link>
  </div>
);

export default PageToggle;
