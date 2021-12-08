import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import StudentPage from '../pages/StudentPage';
import Events from '../pages/Events';
import CreateEvent from '../pages/CreateEvent';
import Publications from '../pages/Publications';
import CreatePublication from '../pages/CreatePublication';

const Routes = () => (
  <Switch> 
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/inicio" exact component={StudentPage} />
    <Route path="/eventos" exact component={Events} />
    <Route path="/criar-eventos" exact component={CreateEvent} />
    <Route path="/publicacoes" exact component={Publications} />
    <Route path="/criar-publicacoes" exact component={CreatePublication} />
  </Switch>
); 

export default Routes;
