import React from 'react';
import { shallow } from 'enzyme';
// import { ReactShallowRenderer} from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();


  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  // expect(wrapper.find('h2').text()).toBe('Expense.ly');
  // console.log(renderer.getRenderOutput());
});

