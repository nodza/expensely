import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import EditExpenseForm from './ExpenseForm';

const EditExpense = (props) => {
  return (
    <div>
      <EditExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }} />
      <br />
      <button onClick={()  => {
        props.dispatch(removeExpense({id: props.expense.id }));
        props.history.push('/');
      }}>Delete Expense</button>
    </div>

  )
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpense);