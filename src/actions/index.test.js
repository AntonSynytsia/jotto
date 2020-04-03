import moxios from 'moxios';

import createStoreWithMiddleware from '../store';
import { getSecretWord } from './';

describe('getSecretWord action creator', () => {
  // route axios requests through moxios during the tests
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('adds response word to state', () => {
    const secretWord = 'party';
    const store = createStoreWithMiddleware();

    // create the anticipated responses
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    // dispatch the asynchronous action, and return the promise so that the test waits for it to resolve
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
