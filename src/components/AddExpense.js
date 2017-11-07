import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


export class AddExpense extends Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">
              Add Expense
            </h1>
          </div>
        </div>
        <div className="container">
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);