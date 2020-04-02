import { GUESS_WORD } from '../actions';

const initialState = [];

/**
 * @function guessedWordsReducer
 * @param {array} state Array of guessed words
 * @param {object} action Action to be reduced
 * @returns {array} New array of guessed words
 */
const guessedWordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default guessedWordsReducer;
