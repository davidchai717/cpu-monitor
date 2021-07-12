import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Chart from './pages/Chart';
import PastAlerts from './pages/PastAlerts';
import About from './pages/About';

const Routes = () => (<Switch>
    <Route exact path="/">
      <Chart />
    </Route>
    <Route path="/past-alerts">
      <PastAlerts />
    </Route>
    <Route path="/about">
      <About />
    </Route>
  </Switch>)

export default Routes;