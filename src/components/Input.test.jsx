import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the GuessWords component.
 * @param {*} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders without error ', () => {});
    test('renders input box', () => {});
    test('renders submit button', () => {});
  });
  describe('word has been guessed', () => {
    test('renders without error ', () => {});
    test('does not render input box', () => {});
    test('does not render submit button', () => {});
  });
});

describe('update state', () => {});
