import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Homepage from '../pages/Homepage';
import Dashboard from '../pages/Dashboard';
import StudentPage from '../pages/StudentPage';
import Events from '../pages/Events';
import CreateEvent from '../pages/CreateEvent';
import Publications from '../pages/Publications';
import CreatePublication from '../pages/CreatePublication';

const Routes = () => (
  <Switch> 
    <Route path="/login" exact component={Login} />
    <Route path="/home" exact component={Homepage} isPrivate />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    <Route path="/inicio" exact component={StudentPage} isPrivate />
    <Route path="/eventos" exact component={Events} isPrivate />
    <Route path="/criar-eventos" exact component={CreateEvent} isPrivate />
    <Route path="/publicacoes" exact component={Publications} isPrivate />
    <Route path="/criar-publicacoes" exact component={CreatePublication} isPrivate />
  </Switch>
); 

export default Routes;
