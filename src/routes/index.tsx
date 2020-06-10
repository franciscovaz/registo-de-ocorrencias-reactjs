import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

import AppProvider from '../hooks';

const Routes: React.FC = () => (
  <>
    <AppProvider>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </AppProvider>
  </>
);

export default Routes;
