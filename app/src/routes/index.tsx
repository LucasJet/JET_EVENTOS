import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Expenses from '../pages/Expenses/Get';
import Recipes from '../pages/Recipes/Get';
import CreateRecipe from '../pages/Recipes/Create';
import UpdateRecipe from '../pages/Recipes/Update';
import CreateExpense from '../pages/Expenses/Create';
import UpdateExpense from '../pages/Expenses/Update';
import CreateRecipeMov from '../pages/Movements/CreateRecipeMov';
import CreateExpenseMov from '../pages/Movements/CreateExpenseMov';
import UpdateExpenseMov from '../pages/Movements/UpdateExpenseMov';

const Routes: React.FC = () => (
  <Switch> 
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    <Route path="/despesas" exact component={Expenses} isPrivate />
    <Route path="/receitas" exact component={Recipes} isPrivate />
    <Route path="/criarReceita" exact component={CreateRecipe} isPrivate />
    <Route path="/atualizarReceita/:_id" exact component={UpdateRecipe} isPrivate />
    <Route path="/criarDespesa" exact component={CreateExpense} isPrivate />
    <Route path="/atualizarDespesa/:cod_despesa" exact component={UpdateExpense} isPrivate />
    <Route path="/criarMovimentoReceita" exact component={CreateRecipeMov} isPrivate />
    <Route path="/criarMovimentoDespesa" exact component={CreateExpenseMov} isPrivate />
    <Route path="/atualizarMovDesp/:cod_movimento" exact component={UpdateExpenseMov} isPrivate />
  </Switch>
); 

export default Routes;
