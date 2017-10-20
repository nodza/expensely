import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

// onRemoveExpense = () => {
//   console.log("Removal in process...");
// };

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h4>{description}</h4>
    <p>{amount} - {createdAt}</p>
    <button onClick={()  => {
      dispatch(removeExpense({ id }));
    }}>Remove</button>
  </div>
);

export default (connect())(ExpenseListItem);