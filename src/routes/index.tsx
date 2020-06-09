import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

import AuthContext from '../hooks/AuthContext';

const Routes: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Francisco' }}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </AuthContext.Provider>
  </>
);

export default Routes;
