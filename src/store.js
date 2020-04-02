import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/**
 * Create a store with imported reducers, middleware, and the desired initial state.
 *  globals: rootReducer
 * @function storeFactory
 * @param {object} initialState - Initial state for store
 * @returns {Store} - Redux store.
 */
const createStoreWithMiddleware = (initialState = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export default createStoreWithMiddleware;
