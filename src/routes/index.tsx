import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

import { AuthProvider } from '../hooks/AuthContext';

const Routes: React.FC = () => (
  <>
    <AuthProvider>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </AuthProvider>
  </>
);

export default Routes;
