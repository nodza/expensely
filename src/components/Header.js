import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h2>Expense.ly</h2>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Add New</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

export default Header;