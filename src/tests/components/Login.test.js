import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login';

test('should render Login component correctly', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin when button clicked', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<Login startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});