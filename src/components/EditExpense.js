import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expenses';
import EditExpenseForm from './ExpenseForm';

export class EditExpense extends Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.startRemoveExpense({id: this.props.expense.id });
    this.props.history.push('/');
  };


  render() {
    return (
      <div>
        <EditExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit} />
        <br />
        <button onClick={this.onRemove}>Delete Expense</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(props.expense.id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);