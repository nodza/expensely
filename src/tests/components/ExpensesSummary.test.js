import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary component with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={335} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary component with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={32} expensesTotal={9877620} />);
  expect(wrapper).toMatchSnapshot();
});