import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import CreateOccurrence from '../pages/CreateOccurrence';

import AppProvider from '../hooks';

const Routes: React.FC = () => (
  <>
    <AppProvider>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create-occurrence" component={CreateOccurrence} />
      </Switch>
    </AppProvider>
  </>
);

export default Routes;
