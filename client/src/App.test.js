import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';

import App from './App';
import Main from './components/Main';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

describe('<App />', () => {
  test('renders one <Main /> component', () => {
    const wrapper = setup();
    expect(wrapper.find(Main).length).toBe(1);
  });
});
