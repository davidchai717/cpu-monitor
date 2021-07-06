import React from 'react';
import { Link } from 'react-router-dom';

const HeadContainer = () => (
  <div className="flex flex-col w-full md:w-64 text-white bg-purple-900 flex-shrink-0 px-8 pt-4">
    <div id="title">
      <h1 className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">CPU Monitor</h1>
    </div>
    <nav className="flex flex-col">
      <Link className="block px-4 py-2 mt-2 text-sm font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all" to="/">
        Chart
      </Link>
      <Link className="block px-4 py-2 mt-2 text-sm font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all" to="/past-alerts">
        Past Alerts
      </Link>
      <Link className="block px-4 py-2 mt-2 text-sm font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all" to="/about">
        About
      </Link>
    </nav>
  </div>
);

export default HeadContainer;
