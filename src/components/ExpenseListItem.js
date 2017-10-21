import React from 'react';
import { Link } from 'react-router-dom';

// onRemoveExpense = () => {
//   console.log("Removal in process...");
// };

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
    <h4>{description}</h4>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;