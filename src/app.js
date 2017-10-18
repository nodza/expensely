import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboard = () => (
  <div>Hello from the ExpenseDashboard</div>
);

const AddExpense = () => (
  <div>Hello from the AddExpense</div>
);

const EditExpense = () => (
  <div>Hello from the EditExpense</div>
);

const HelpPage = () => (
  <div>Hello from the HelpPage</div>
);

const NotFoundPage = () => (
  <div>404! Page not found</div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ExpenseDashboard} />
      <Route path="/create" component={AddExpense} />
      <Route path="/edit" component={EditExpense} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

    
ReactDOM.render(routes, document.getElementById('app'));