import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

it('renders welcome message App-intro', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);

   expect(wrapper.is('.App')).toBe(true);
  //  expect(shallow(<App />).is('.App')).toBe(true);
});
