export const CORRECT_GUESS = 'CORRECT_GUESS';
export const GUESS_WORD = 'GUESS_WORD';

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action and returns (conditionally) CORRECT_GUESS action.
 * @function guessWord
 * @param {string} guestWord - Guessed word.
 * @return {function} - Redux Thunk function.
 */
export const guessWord = guestWord => {
  return function(dispatch, getState) {};
};
