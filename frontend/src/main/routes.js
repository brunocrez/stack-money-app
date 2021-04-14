import React from 'react';

import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router';

import Dashboard from '../dashboard';
import BillingCycle from '../billingCycle';
import AuthOrApp from './authOrApp';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path="billingCycles" component={BillingCycle} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);