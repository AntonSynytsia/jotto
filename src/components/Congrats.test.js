import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { findByTestAttr } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop if false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'congrats-message');
  expect(component.length).toBe(0);
});

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'congrats-message');
  expect(component.text().length).not.toBe(0);
});
