import { SET_SECRET_WORD } from '../actions/';

const initialState = null;

/**
 * @function secretWordReducer
 * @param {string} state - Secret word before reducer
 * @param {object} action - Action sent to reducer
 * @returns {string} New secret word
 */
const secretWordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};

export default secretWordReducer;
