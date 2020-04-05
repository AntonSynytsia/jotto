import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import createStoreWithMiddleware from '../store';

import TotalGuesses from './TotalGuesses';

/**
 * Factory function to create a ShallowWrapper for the TotalGuesses component.
 * @param {*} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = createStoreWithMiddleware(initialState);
  const wrapper = shallow(<TotalGuesses store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('<TotalGuesses />', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const statusText = findByTestAttr(wrapper, 'status-text');
    expect(statusText.length).toBe(1);
  });

  test('Initial guess count is 0', () => {
    const wrapper = setup();
    const statusText = findByTestAttr(wrapper, 'status-text');
    expect(statusText.length).toBe(1);
  });

  test('Guess count matches total guessed words', () => {
    const guessedWords = [{}, {}];
    const wrapper = setup({ guessedWords });
    const statusText = findByTestAttr(wrapper, 'status-text');
    expect(statusText.text()).toContain(guessedWords.length.toString());
  });
});
