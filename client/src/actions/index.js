import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const CORRECT_GUESS = 'CORRECT_GUESS';
export const GUESS_WORD = 'GUESS_WORD';
export const SET_SECRET_WORD = 'SET_SECRET_WORD';

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action and returns (conditionally) CORRECT_GUESS action.
 * @function guessWord
 * @param {string} guessedWord Guessed word
 * @return {function} Redux Thunk function
 */
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: CORRECT_GUESS,
      });
    }
  };
};

export const getSecretWord = () => {
  return function (dispatch, getState) {
    dispatch({
      type: SET_SECRET_WORD,
      payload: null,
    });

    return axios
      .get('/api/five-letter-word')
      .then((response) => {
        dispatch({
          type: SET_SECRET_WORD,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: SET_SECRET_WORD,
          payload: null,
        });
      });
  };
};
