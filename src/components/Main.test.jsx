import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import createStoreWithMiddleware from '../store';

import Main from './Main';

/**
 * Factory function to create a ShallowWrapper for the Main component.
 * @param {*} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = createStoreWithMiddleware(initialState);
  const wrapper = shallow(<Main store={store} />).dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('redux properties', () => {
  test('has access to `success` state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.props().success;
    expect(successProp).toBe(success);
  });

  test('has access to `secretWord` state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.props().secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.props().guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });

  test('`getSecretWord` action creator is a function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.props().getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});
