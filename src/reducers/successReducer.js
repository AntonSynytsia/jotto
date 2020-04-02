import { CORRECT_GUESS } from '../actions';

const initialState = false;
/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success state.
 */
const successReducer = (state = initialState, action) => {
  switch (action.type) {
    case CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};

export default successReducer;
