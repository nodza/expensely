import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '1234cde' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234cde'
  });
});

test('should set up edit expense action object', () => {
  const action = editExpense( '1234cde', { amount: 1000 });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234cde',
    updates: { 
      amount: 1000 
    }
  });
});

test('should set up add expense action object with provided values', () => {
  const expenseData = {
    description: 'Groceries',
    amount: 24900,
    createdAt: 56789067,
    note: 'This was for one week'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should set up add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  })
});