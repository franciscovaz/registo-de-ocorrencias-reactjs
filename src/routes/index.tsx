import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import CreateOccurrence from '../pages/CreateOccurrence';
import ListOccurrences from '../pages/ListOccurrences';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={SignUp} />

      <Route path="/create-occurrence" component={CreateOccurrence} isPrivate />
      <Route path="/list-occurrences" component={ListOccurrences} isPrivate />
    </Switch>
  </>
);

export default Routes;
