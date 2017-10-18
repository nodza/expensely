import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={ExpenseDashboard} />
      <Route path="/create" component={AddExpense} />
      <Route path="/edit/:id" component={EditExpense} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;