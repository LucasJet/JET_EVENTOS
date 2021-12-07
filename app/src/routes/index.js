import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Events from '../pages/Events';
import Publications from '../pages/Publications';

const Routes = () => (
  <Switch> 
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/eventos" exact component={Events} />
    <Route path="/publicacoes" exact component={Publications} />
  </Switch>
); 

export default Routes;
