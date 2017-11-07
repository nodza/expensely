import React from 'react';
import { shallow } from 'enzyme';
import LoadingIndicator from '../../components/LoadingIndicator';

test('should render LoadingIndicator correctly', () => {
  const wrapper = shallow(<LoadingIndicator />);
  expect(wrapper).toMatchSnapshot();
});