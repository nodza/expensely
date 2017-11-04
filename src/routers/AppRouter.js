import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Login from '../components/Login';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
      <PrivateRoute path="/create" component={AddExpense} />
      <PrivateRoute path="/edit/:id" component={EditExpense} />
      <PrivateRoute path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
    </div>
  </Router>
);

export default AppRouter;