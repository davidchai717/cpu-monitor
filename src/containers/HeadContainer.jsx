import React from 'react';
import PageToggle from '../components/PageToggle.jsx';

const HeadContainer = () => {
  return (
    <div id="head-container">
      <div id="title">
        <h1>CPU Monitor</h1>
      </div>
      <PageToggle />
    </div>
  );
};

export default HeadContainer;
